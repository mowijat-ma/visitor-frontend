import { apiClient } from "@/lib/apiclient";

const getWpPosts =async ()=>{
    const {res}:any = await apiClient(`posts`, {
    method: 'GET',
    // You can add Next.js specific cache options here
    // next: { revalidate: 3600 } 
  });
  // console.log("Fetching products from:", url);
  console.log(res)
  return res
}
export {getWpPosts}