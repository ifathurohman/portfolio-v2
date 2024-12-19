import { useState } from 'react';
import { ChevronDown, ChevronRight, File, Folder } from 'lucide-react';
import { FileNode, FileExplorerProps } from '../types';
import { isMarkdownFile } from '../utils/file';
import React from 'react';

const FileExplorer: React.FC<FileExplorerProps> = ({ files, onFileSelect, selectedFile }) => {
  const [expandedFolders, setExpandedFolders] = useState<Set<string>>(new Set());
  const [firstMarkdownFileSelected, setFirstMarkdownFileSelected] = useState(false);

  const getFirstMarkdownFile = (files: FileNode[]): FileNode | null => {
    for (const file of files) {
      if (isMarkdownFile(file.name)) {
        return file; // Return the first Markdown file
      }
      if (file.children) {
        const child = getFirstMarkdownFile(file.children);
        if (child) return child;
      }
    }
    return null;
  };

  const sortFiles = (nodes: FileNode[]): FileNode[] => {
    return [...nodes].sort((a, b) => {
      if (a.type === b.type) {
        return a.name.localeCompare(b.name);
      }
      return a.type === 'directory' ? -1 : 1;
    });
  };

  const toggleFolder = (path: string) => {
    setExpandedFolders(prev => {
      const next = new Set(prev);
      if (next.has(path)) {
        next.delete(path);
      } else {
        next.add(path);
      }
      return next;
    });
  };

  const renderNode = (node: FileNode, level = 0) => {
    const isSelected = selectedFile?.path === node.path;
    const isDirectory = node.type === 'directory';
    const isExpanded = expandedFolders.has(node.path);
    const isFirstMarkdownFile = getFirstMarkdownFile(files)?.path === node.path;
    const shouldApplyBg = !isFirstMarkdownFile || (isFirstMarkdownFile && firstMarkdownFileSelected);

    return (
      <div key={node.path}>
        <button
          className={`flex items-center w-full p-2 text-left transition-colors
            hover:bg-neutral-100 dark:hover:bg-neutral-950
            ${isSelected && shouldApplyBg ? 'bg-neutral-50 dark:bg-neutral-900/60' : ''} 
            ${level > 0 ? 'pl-' + (level * 4 + 2) : 'pl-2'}
          `}
          onClick={() => {
            if (isDirectory) {
              toggleFolder(node.path);
            }
            onFileSelect(node);
            if (isFirstMarkdownFile && !firstMarkdownFileSelected) {
              setFirstMarkdownFileSelected(true); // Set the first markdown file as selected
            }
          }}
        >
          {isDirectory ? (
            <div className="flex items-center text-gray-600 dark:text-gray-300">
              <span className="w-4 h-4 mr-1">
                {isExpanded ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
              </span>
              <Folder size={16} className="mr-2 text-yellow-500" />
            </div>
          ) : (
            <div className="flex items-center text-gray-600 dark:text-gray-300">
              <span className="w-4 h-4 mr-1" />
              <File size={16} className="mr-2" />
            </div>
          )}
          <span className="truncate text-sm text-gray-600 dark:text-gray-300">{node.name}</span>
        </button>
        {isDirectory && isExpanded && node.children && (
          <div className="animate-slideDown">
            {sortFiles(node.children).map(child => renderNode(child, level + 1))}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="h-full overflow-auto bg-white dark:bg-neutral-700 border-r border-gray-200 dark:border-gray-700">
      <div className="sticky top-0 bg-gray-50 dark:bg-neutral-700 border-b border-neutral-200 dark:border-gray-700 p-2">
        <h2 className="text-sm font-medium text-gray-600 dark:text-gray-300">Files</h2>
      </div>
      <div className="divide-y divide-gray-100 dark:divide-gray-900">
        {sortFiles(files).map(node => renderNode(node))}
      </div>
    </div>
  );
};

export default FileExplorer;