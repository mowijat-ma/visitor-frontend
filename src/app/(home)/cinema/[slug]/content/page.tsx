import { getWpPosts } from "@/app/api/posts";
import BackButton from "@/components/BackButton";
import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";
import { Separator } from "@/components/ui/separator";
import { BsArrowRight, BsShare } from "react-icons/bs";
import { GoArrowRight } from "react-icons/go";
import { IoBookmarkOutline, IoShareSocialOutline } from "react-icons/io5";
import './style.css'

// Ensure you are destructuring params from the component props
export default async function PostContentPage({
    params
}: {
    params: Promise<{ slug: string }>
}) {
    // 1. Await params in Next.js 15+ 
    const { slug } = await params;

    // 2. Fetch all posts
    const res = await getWpPosts();

    // 3. Filter by slug (or ID)
    // Use .find() instead of .filter() if you only want one object
    const postData = res.find((item: any) => item.id === slug || item.id.toString() === slug);

    // 4. Handle case where post isn't found
    if (!postData) {
        return <div>Post not found {slug}</div>;
    }

    const post = {
        id: postData.id,
        title: postData.title.rendered,
        description: postData.excerpt.rendered.replace(/<[^>]*>?/gm, ''),
        date: new Date(postData.date).toLocaleDateString('ar-EG', {
            day: 'numeric',
            month: 'long',
            year: 'numeric'
        }),
        category: postData.context || "Cinema",
        image: postData.jetpack_featured_media_url
    };

    return (
        <div className="max-w-x5l px-4 md:px-0" dir="rtl">
            <div className="flex justify-between mb-4 items-center">
                <div className="">

                    <BackButton />
                </div>
                <ButtonGroup dir="ltr">
                    <Button variant={'ghost'} size={"lg"} className="flex items-center ">
                        <IoShareSocialOutline />
                        <span>نشر</span>


                    </Button>
                    {/* <Button variant={'ghost'} size={"lg"} className="flex items-center ">
                        <IoBookmarkOutline />
                    </Button> */}
                </ButtonGroup>
            </div>
            <div className="">
                <img src={post.image} alt="" className="aspect-video object-cover rounded-lg sm:rounded-2xl border w-full" />
            </div>
            <div className="flex flex-col gap-2 sm:gap-4 my-4 sm:my-8">
                <div className="flex items-center gap-2 text-left">
                <span className="text-muted-foreground text-sm">
                    {post.date}
                </span>
                <span className="text-muted-foreground text-sm">·</span>
                <span className="text-muted-foreground text-sm">
                    {post.category}
                </span>
            </div>
            <h3
                dangerouslySetInnerHTML={{ __html: post.title }}
                className="text-xl sm:text-3xl leading-normal font-semibold"
            />
            </div>
            {/* <Separator className="my-4 sm:my-8 max-w-[95%] mx-auto" /> */}
            <article
                className="content-area text-muted-foreground"
                dangerouslySetInnerHTML={{ __html: postData.content.rendered }}
            />
        </div>
    );
}