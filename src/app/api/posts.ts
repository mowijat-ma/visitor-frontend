import { apiClient } from "@/lib/apiclient"

interface Post {
  id: number
  title: string
  content: string
  [key: string]: unknown
}

export const getWpPosts = async (): Promise<Post[]> => {
  try {
    const { res } = await apiClient<Post[]>('posts', {
      method: 'GET',
    })
    return await res
  } catch (error) {
    throw new Error(
      error instanceof Error ? error.message : "Failed to fetch posts"
    )
  }
}


export const searchWpPosts =  async (query: string, page = 1): Promise<Post[]> => {
  const params = new URLSearchParams({
    search: query,
    page: page.toString(),
    per_page: '10',
    type: 'post', // Only search blog posts
    subtype: 'post'
  });
  try {
    const { res } = await apiClient<Post[]>(`search?${params}`, {
      method: 'GET',
    })
    return res
  } catch (error) {
    throw new Error(
      error instanceof Error ? error.message : "Failed to fetch posts"
    )
  }
}