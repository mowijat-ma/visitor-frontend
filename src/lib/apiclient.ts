// const BASE_URL = process.env.NEXT_PUBLIC_API_URL;
const BASE_URL = "https://public-api.wordpress.com/wp/v2/sites/mowijat.wordpress.com";

export async function apiClient(endpoint: string, options: RequestInit = {}) {
  try {
    const url = `${BASE_URL}/${endpoint}`
    const response = await fetch(url, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
  });

  // if (!response.ok) throw new Error('Network response was not ok');
  return { res: response.json(), url};
  } catch (error) {
    console.error("API Client Error:", error);
  }
}