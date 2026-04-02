import { WpPost } from "@/types";

export const extractWpPosts = (res:any) => {
  const data = res.map((item: any) => {
    return {
      id: item.id,
      title: item.title.rendered,
      // WP excerpts come wrapped in <p> tags; item.excerpt.rendered is the correct path
      description: item.excerpt.rendered.replace(/<[^>]*>?/gm, ''),
      date: new Date(item.date).toLocaleDateString('ar-EG', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
      }),
      category: item.context || "Cinema",
      image: item.jetpack_featured_media_url,
      content: item.content.rendered
    };
  });

  return data
}

export const extractWpPost =  (post: any) => {
    return {
      id: post.id,
      title: post.title.rendered,
      // WP excerpts come wrapped in <p> tags; post.excerpt.rendered is the correct path
      description: post.excerpt.rendered.replace(/<[^>]*>?/gm, ''),
      date: new Date(post.date).toLocaleDateString('ar-EG', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
      }),
      category: post.context || "Cinema",
      image: post.jetpack_featured_media_url
    };
}
