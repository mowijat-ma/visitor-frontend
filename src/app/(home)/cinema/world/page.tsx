import { getWpPosts } from "@/app/api/posts";
import { BlogSection1 } from "@/components/blog-section-1";

// Optional: Define a type for better DX
interface Post {
  id: number;
  title: { rendered: string };
  excerpt: { rendered: string };
  date: string;
  context: string;
  jetpack_featured_media_url: string;
}

export default async function CinemaWorldPage() {
  const res: Post[] = await getWpPosts();
  const data = res.map((item) => {
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
    <>
      {/* <pre dir="ltr" className="text-wrap bg-slate-100 p-4 rounded text-xs">
        {JSON.stringify(data, null, 2)}
      </pre> */}

      <div className="mx-auto py-10" dir="rtl">
        {/* <h1 className="text-3xl font-bold mb-6">Cinema World Page</h1> */}
        <section>
          {/* Removed the extra brackets around data */}
          <BlogSection1 data={data} />
        </section>
      </div>
    </>
  );
}