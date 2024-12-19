import { useEffect, useState } from 'react';
import { Panel, PanelGroup, PanelResizeHandle } from 'react-resizable-panels';
import { useFileStore } from '../store/fileStore';
import { useThemeStore } from '../store/themeStore';
import FileExplorer from '../components/FileExplorer';
import FileViewer from '../components/FileViewer';
import Header from '../components/Header';
import { FileNode } from '../types';
import { Loader2 } from 'lucide-react';
import React from 'react';

// Define the prop types for GithubViewer component
interface GithubViewerProps {
    repoName: string; // Explicitly define the type for repoName
}

function GithubViewer({ repoName }: GithubViewerProps) {

    const {
        files,
        selectedFile,
        isLoading,
        error,
        fetchContents,
        fetchFileContents,
        setSelectedFile,
        setRepo,
    } = useFileStore();

    const { isDark } = useThemeStore();
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    // Reset selectedFile when files or repoName change
    useEffect(() => {
        if (repoName || files.find(file => file.name.endsWith('.md'))) {
            setSelectedFile(null);
        } else {
            <div className="flex items-center justify-center h-full text-gray-500 dark:text-gray-400">
                Select a file to view its contents
            </div>
        }

    }, [repoName, files, setSelectedFile]);

    useEffect(() => {
        if (repoName) {
            setRepo("ifathurohman", repoName);  // Dynamically set the repository name
            fetchContents();   // Fetch files after setting the repo
        }
    }, [fetchContents, setRepo, repoName]);

    useEffect(() => {
        // Check if files are loaded and there is no selected file
        if (files.length && !selectedFile) {
            // Find the first Markdown file in the list
            const firstMarkdownFile = files.find(file => file.name.endsWith('.md'));

            if (firstMarkdownFile) {
                handleFileSelect(firstMarkdownFile); // Automatically select it
            }
        }
    }, [files, selectedFile]);

    useEffect(() => {
        document.documentElement.classList.toggle('dark', isDark);
    }, [isDark]);

    const handleFileSelect = async (file: FileNode) => {
        await fetchFileContents(file);
    };

    return (
        <div className="min-h-screen bg-light-bg2 dark:bg-dark-bg2">
            <Header isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} repoName={repoName} />

            <main className="container mx-auto py-4 px-4">
                <div className="bg-white dark:bg-neutral-700 rounded-lg shadow-lg overflow-hidden">
                    {error ? (
                        <div className="p-4 text-red-500 dark:text-red-400">{error}</div>
                    ) : (
                        // <div className="h-[calc(150vh-8rem)]">
                        <div className="h-max">
                            <PanelGroup direction="horizontal">
                                {(isSidebarOpen || window.innerWidth >= 1024) && (
                                    <>
                                        <Panel defaultSize={20} minSize={15} maxSize={40}>
                                            {isLoading && !files.length ? (
                                                <div className="flex items-center justify-center h-32">
                                                    <Loader2 className="animate-spin text-gray-500 dark:text-gray-400" />
                                                </div>
                                            ) : (
                                                <FileExplorer
                                                    files={files}
                                                    onFileSelect={handleFileSelect}
                                                    selectedFile={selectedFile}
                                                />
                                            )}
                                        </Panel>
                                        <PanelResizeHandle className="w-1 bg-neutral-200 dark:bg-neutral-900 hover:bg-neutral-300 dark:hover:bg-neutral-600 transition-colors" />
                                    </>
                                )}
                                <Panel>
                                    {isLoading && !selectedFile?.content ? (
                                        <div className="flex items-center justify-center h-full">
                                            <Loader2 className="animate-spin text-gray-500 dark:text-gray-400" />
                                        </div>
                                    ) : selectedFile ? (
                                        <FileViewer file={selectedFile} />
                                    ) : (
                                        <div className="flex items-center justify-center h-full text-gray-500 dark:text-gray-400">
                                            Select a file to view its contents
                                        </div>
                                    )}
                                </Panel>
                            </PanelGroup>
                        </div>
                    )}
                </div>
            </main>
        </div>
    );
}

export default GithubViewer;
