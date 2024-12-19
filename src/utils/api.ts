export class ApiError extends Error {
  constructor(
    message: string,
    public status?: number,
    public statusText?: string
  ) {
    super(message);
    this.name = 'ApiError';
  }
}

export async function fetchWithError(url: string, options?: RequestInit): Promise<Response> {
  const token = localStorage.getItem('github-config');
  const parsedToken = token ? JSON.parse(token).state.githubToken : null;

  const headers = {
    'Accept': 'application/vnd.github.v3+json',
    ...options?.headers,
  } as Record<string, string>;

  if (parsedToken) {
    headers['Authorization'] = `token ${parsedToken}`;
  }

  const response = await fetch(url, {
    ...options,
    headers,
  });

  if (!response.ok) {
    const errorMessage = response.status === 403 && !parsedToken
      ? 'API rate limit exceeded. Please add a GitHub token to increase the rate limit.'
      : `API request failed: ${response.statusText}`;

      if (response.status === 404) {
        return response;
      }

    throw new ApiError(
      errorMessage,
      response.status,
      response.statusText
    );
  }

  return response;
}
