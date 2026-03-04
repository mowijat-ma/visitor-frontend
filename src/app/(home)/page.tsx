import { getWpPosts } from "../api/posts"
import { HomeInterviewsSection } from "@/components/sections/HomeInterviewsSection"
import HomeHeroSection from "@/components/sections/HomeHeroSection"

interface WpPost {
  id: number
  title: { rendered: string }
  excerpt: { rendered: string }
  date: string
  context?: string
  jetpack_featured_media_url?: string
}

interface Post {
  id: number
  title: string
  description: string
  date: string
  category: string
  image?: string
}

export default async function HomePage() {
  const res = (await getWpPosts()) as WpPost[]

  const interviews = res.map((item) => {
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
      image: item.jetpack_featured_media_url
    };
  });
  const firstPost = {
    id: res[0].id,
    title: res[0].title.rendered,
    // WP excerpts come wrapped in <p> tags; res[0].excerpt.rendered is the correct path
    description: res[0].excerpt.rendered.replace(/<[^>]*>?/gm, ''),
    date: new Date(res[0].date).toLocaleDateString('ar-EG', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }),
    category: res[0].context || "Cinema",
    image: res[0].jetpack_featured_media_url
  }
  const secondPosts = [
    {
    id: res[1].id,
    title: res[1].title.rendered,
    // WP excerpts come wrapped in <p> tags; res[1].excerpt.rendered is the correct path
    description: res[1].excerpt.rendered.replace(/<[^>]*>?/gm, ''),
    date: new Date(res[1].date).toLocaleDateString('ar-EG', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }),
    category: res[1].context || "Cinema",
    image: res[1].jetpack_featured_media_url
  }, 
  {
    id: res[2].id,
    title: res[2].title.rendered,
    // WP excerpts come wrapped in <p> tags; res[2].excerpt.rendered is the correct path
    description: res[2].excerpt.rendered.replace(/<[^>]*>?/gm, ''),
    date: new Date(res[2].date).toLocaleDateString('ar-EG', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }),
    category: res[2].context || "Cinema",
    image: res[2].jetpack_featured_media_url
  }, 
  {
    id: res[3].id,
    title: res[3].title.rendered,
    // WP excerpts come wrapped in <p> tags; res[3].excerpt.rendered is the correct path
    description: res[3].excerpt.rendered.replace(/<[^>]*>?/gm, ''),
    date: new Date(res[3].date).toLocaleDateString('ar-EG', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }),
    category: res[3].context || "Cinema",
    image: res[3].jetpack_featured_media_url
  }
  ]
  const moreReadables = res.map((item: any) => {
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
      image: item.jetpack_featured_media_url
    };
  });
  return (
    <div className="max-w-x5l my-4 px-4 md:px-0">
      <HomeHeroSection firstPost={firstPost} topPosts={secondPosts} moreReadables={moreReadables} />
      <HomeInterviewsSection interviews={interviews} />
    </div>
  )
}
