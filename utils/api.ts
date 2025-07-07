// Get CSRF token before making authenticated requests
async function getCsrfToken() {
  try {
    const response = await fetch('http://localhost:3001/api/csrf-token', {
      credentials: 'include',
    });
    const data = await response.json();
    return data.csrfToken;
  } catch (error) {
    console.error('Error fetching CSRF token:', error);
    throw error;
  }
}

export async function makeAuthenticatedRequest(url: string, options: RequestInit = {}) {
  // Get CSRF token first
  const csrfToken = await getCsrfToken();

  // Merge the provided options with required headers and credentials
  const requestOptions: RequestInit = {
    ...options,
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
      'X-CSRF-Token': csrfToken,
      ...(options.headers || {}),
    },
  };

  return fetch(url, requestOptions);
} 