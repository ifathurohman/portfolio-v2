import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { FileViewerProps } from '../types';
import { getFileType, isImageFile, isJsonFile, isMarkdownFile, formatBytes } from '../utils/file';
import { Download } from 'lucide-react';
import React from 'react';

const FileViewer: React.FC<FileViewerProps> = ({ file }) => {

  const handleDownload = async () => {
    try {
      const response = await fetch(file.downloadUrl!);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = file.name;
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
    } catch (error) {
      console.error('Error downloading file:', error);
    }
  };

  // Function to extract repository name from the URL
  const extractRepoName = (url: string) => {
    const regex = /github\.com\/([^/]+)\/([^/]+)/; // matches github.com/{owner}/{repo}
    const match = url.match(regex);
    return match ? match[2] : null; // Return the second part of the match which is the repository name
  };

  // Using the `url` or `downloadUrl`
  const repoName = extractRepoName(file.url || '');  // You could also use file.downloadUrl  // Output: "e-database-cv"

  // Function to extract branch name from the GitHub URL
  const extractBranchName = (url: string) => {
    const regex = /github\.com\/[^/]+\/[^/]+\/blob\/([^/]+)/; // matches github.com/{owner}/{repo}/blob/{branch}/{file-path}
    const match = url.match(regex);
    return match ? match[1] : null; // Return the branch name (first capturing group)
  };

  // Using the `url` or `downloadUrl`
  const branchName = extractBranchName(file.url || '');  // You can use file.downloadUrl too

  const customImageRenderer = (props: React.ImgHTMLAttributes<HTMLImageElement>) => {
    const { alt, src, title, ...otherProps } = props;

    if (!src) {
      console.error('Image source is missing:', props);
      return <span>Image not available</span>;  // Fallback when no src is provided
    }

    // If the image path is relative, convert it to a full URL
    const isRelativeUrl = src.startsWith('/'); // Simple check for relative URL
    const baseUrl = `https://raw.githubusercontent.com/ifathurohman/${repoName}/${branchName}`; // Set your base URL here

    const imageUrl = isRelativeUrl ? `${baseUrl}${src}` : src;

    // Render the image with the correct URL
    return (
      <img
        src={imageUrl}
        alt={alt}
        title={title}
        style={{ maxWidth: '100%', height: 'auto' }}
        {...otherProps} // Pass other props like className, loading, etc.
      />
    );
  };

  const renderContent = () => {
    if (!file.content) {
      return <div className="p-4 text-gray-500 dark:text-gray-400">No content available</div>;
    }

    if (isImageFile(file.name)) {
      return (
        <div className="p-4">
          <img
            src={file.downloadUrl}
            alt={file.name}
            className="max-w-full rounded-lg shadow-lg"
          />
          <div className="mt-4 flex items-center gap-4">
            <button
              onClick={handleDownload}
              className="flex items-center px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
            >
              <Download size={16} className="mr-2" />
              Download Image
            </button>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              Size: {formatBytes(file.size || 0)}
            </span>
          </div>
        </div>
      );
    }

    if (isJsonFile(file.name)) {
      try {
        const formattedJson = JSON.stringify(JSON.parse(file.content), null, 2);
        return (
          <SyntaxHighlighter
            language="json"
            style={vscDarkPlus}
            showLineNumbers={true}
            className="!bg-neutral-900 !m-0"
          >
            {formattedJson}
          </SyntaxHighlighter>
        );
      } catch {
        return <pre className="p-4 bg-gray-900 text-white">{file.content}</pre>;
      }
    }

    // if (isMarkdownFile(file.name)) {
    //   return (
    //     <div className="prose prose-slate dark:prose-invert max-w-none p-6">
    //       <ReactMarkdown remarkPlugins={[remarkGfm]}>{file.content}</ReactMarkdown>
    //     </div>
    //   );
    // }

    if (isMarkdownFile(file.name)) {
      return (
        <div className="prose prose-slate dark:prose-invert max-w-none p-6">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={{
              img: customImageRenderer, // Use the custom image renderer for Markdown images
            }}
          >
            {file.content}
          </ReactMarkdown>
        </div>
      );
    }

    return (
      <SyntaxHighlighter
        language={getFileType(file.name)}
        style={vscDarkPlus}
        showLineNumbers={true}
        className="!bg-neutral-900 !m-0"
      >
        {file.content}
      </SyntaxHighlighter>
    );
  };

  return (
    <div className="h-full overflow-auto">
      <div className="sticky top-0 border-b border-gray-200 dark:border-gray-700 px-4 py-2 flex items-center justify-between bg-gray-50 dark:bg-neutral-800">
        <div className="flex items-center gap-2">
          <span className="font-medium text-gray-900 dark:text-white">{file.name}</span>
          {file.size && (
            <span className="text-sm text-gray-500 dark:text-gray-400">
              ({formatBytes(file.size)})
            </span>
          )}
        </div>
        {file.url && (
          <a
            href={file.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300"
          >
            View on GitHub
          </a>
        )}
      </div>
      {renderContent()}
    </div>
  );
};

export default FileViewer;