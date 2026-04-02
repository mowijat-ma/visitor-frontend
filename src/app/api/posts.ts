import { apiClient } from "@/lib/apiclient"
import { extractWpPost, extractWpPosts } from "@/services/post.services"
import { WpPost } from "@/types"

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
export const getWpPostsByCategory = async (category: string)=>{
  try {
    const { res } = await apiClient<Post[]>('posts', {
      method: 'GET',
    })
    
    // return extractWpPosts(res)
    return res
  } catch (error) {
    throw new Error(
      error instanceof Error ? error.message : "Failed to fetch posts"
    )
  }
}
export const getFirstWpPost = async ()=>{
  try {
    const { res } = await apiClient<Post[]>('posts', {
      method: 'GET',
    })
    const data = await res
    return extractWpPost(data[0])
  } catch (error) {
    throw new Error(
      error instanceof Error ? error.message : "Failed to fetch posts"
    )
  }
}
export const getCinemaWorldWpPosts = async ()=>{
  try {
    const { res } = await apiClient<Post[]>('posts', {
      method: 'GET',
    })
    // const data = extractWpPosts(res)
    const data = extractWpPosts(await res)
    return data?.slice(0, 5);
  } catch (error) {
    throw new Error(
      error instanceof Error ? error.message : "Failed to fetch posts"
    )
  }
}
export const getCinemaMorrocanWpPosts = async ()=>{
  try {
    const { res } = await apiClient<Post[]>('posts', {
      method: 'GET',
    })
    // const data = extractWpPosts(res)
    const data = extractWpPosts(await res)
    return [data[5], data[2],data[3],data[4]]
  } catch (error) {
    throw new Error(
      error instanceof Error ? error.message : "Failed to fetch posts"
    )
  }
}
export const getCinemaArabeWpPosts = async ()=>{
  try {
    const { res } = await apiClient<Post[]>('posts', {
      method: 'GET',
    })
    // const data = extractWpPosts(res)
    const data = extractWpPosts(await res)
    return [data[4], data[3],data[2], data[1]]
  } catch (error) {
    throw new Error(
      error instanceof Error ? error.message : "Failed to fetch posts"
    )
  }
}
export const getWpNewsPosts = async ()=>{
  try {
    const { res } = await apiClient<Post[]>('posts', {
      method: 'GET',
    })
    // const data = extractWpPosts(res)
    const data = extractWpPosts(await res)
    return [data[0], data[5], data[2]]
  } catch (error) {
    throw new Error(
      error instanceof Error ? error.message : "Failed to fetch posts"
    )
  }
}

export const getWpMoreReads = async ()=>{
  try {
    const { res } = await apiClient<Post[]>('posts', {
      method: 'GET',
    })
    // const data = extractWpPosts(res)
    const data = extractWpPosts(await res)
    return data.slice(0,5)
  } catch (error) {
    throw new Error(
      error instanceof Error ? error.message : "Failed to fetch posts"
    )
  }
}
export const getWpTopPosts = async ()=>{
  try {
    const { res } = await apiClient<Post[]>('posts', {
      method: 'GET',
    })
    // const data = extractWpPosts(res)
    const data = extractWpPosts(await res)
    return [data[0], data[5], data[2]]
  } catch (error) {
    throw new Error(
      error instanceof Error ? error.message : "Failed to fetch posts"
    )
  }
}