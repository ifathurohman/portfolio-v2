import { FileNode } from '../types';
import { fetchWithError } from '../utils/api';
import { useConfigStore } from '../store/configStore';

const GITHUB_API_BASE = 'https://api.github.com';

// A reusable function to fetch repository contents and file data
export function createGitHubClient(repoOwner: string, repoName: string) {
  // Get the githubToken from the config store
  const { githubToken } = useConfigStore.getState();  // Access the authToken from the store

  // Function to fetch repository contents
  async function fetchRepositoryContents(path: string = ''): Promise<FileNode[]> {
    const url = `${GITHUB_API_BASE}/repos/${repoOwner}/${repoName}/contents/${path}`;
    const response = await fetchWithError(url, {
      headers: {
        'Authorization': `Bearer ${githubToken}`,  // Use the token here
        'X-GitHub-Api-Version': '2022-11-28', // Specify the API version
      },
    });
    const data = await response.json();

    return Array.isArray(data) ? data.map(transformGitHubItem) : [transformGitHubItem(data)];
  }

  // Function to fetch file content from a specific path
  async function fetchFileContent(path: string): Promise<string> {
    const url = `${GITHUB_API_BASE}/repos/${repoOwner}/${repoName}/contents/${path}`;
    const response = await fetchWithError(url, {
      headers: {
        'Authorization': `Bearer ${githubToken}`,  // Use the token here
        'X-GitHub-Api-Version': '2022-11-28', // Specify the API version
      },
    });
    const data = await response.json();

    if (data.encoding === 'base64' && data.content) {
      return atob(data.content.replace(/\s/g, ''));
    }

    return '';
  }

  // Helper function to transform the GitHub API response into a FileNode
  function transformGitHubItem(item: any): FileNode {
    return {
      name: item.name,
      path: item.path,
      type: item.type === 'dir' ? 'directory' : 'file',
      size: item.size,
      sha: item.sha,
      url: item.html_url,
      downloadUrl: item.download_url,
    };
  }

  // Return the client methods so they can be used
  return {
    fetchRepositoryContents,
    fetchFileContent,
  };
}
