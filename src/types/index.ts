export interface FileNode {
  name: string;
  path: string;
  type: 'file' | 'directory';
  children?: FileNode[];
  content?: string;
  size?: number;
  sha?: string;
  url?: string;
  downloadUrl?: string;
}

export interface FileViewerProps {
  file: FileNode;
}

export interface FileExplorerProps {
  files: FileNode[];
  onFileSelect: (file: FileNode) => void;
  selectedFile?: FileNode | null;
}