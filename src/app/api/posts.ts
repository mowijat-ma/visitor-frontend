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
