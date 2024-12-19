export function getFileType(fileName: string): string {
  const extension = fileName.split('.').pop()?.toLowerCase() || '';
  
  const extensionMap: Record<string, string> = {
    'js': 'javascript',
    'jsx': 'javascript',
    'ts': 'typescript',
    'tsx': 'typescript',
    'md': 'markdown',
    'json': 'json',
    'yml': 'yaml',
    'yaml': 'yaml',
    'php': 'php',
    'py': 'python',
    'rb': 'ruby',
    'java': 'java',
    'go': 'go',
    'rs': 'rust',
    'css': 'css',
    'scss': 'scss',
    'html': 'html',
    'xml': 'xml',
    'sql': 'sql',
    'sh': 'bash',
    'bash': 'bash',
  };

  return extensionMap[extension] || 'plaintext';
}

export function isImageFile(fileName: string): boolean {
  return /\.(jpg|jpeg|png|gif|svg|webp|bmp|ico)$/i.test(fileName);
}

export function isMarkdownFile(fileName: string): boolean {
  return /\.md$/i.test(fileName);
}

export function isJsonFile(fileName: string): boolean {
  return /\.json$/i.test(fileName);
}

export function formatBytes(bytes: number): string {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return `${parseFloat((bytes / Math.pow(k, i)).toFixed(2))} ${sizes[i]}`;
}