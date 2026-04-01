export interface BlogPost {
  id: number;
  title: string;
  description: string;
  date: string;
  category: string;
  image: string;
}

export interface WpPost {
  id: number;
  title: { rendered: string };
  excerpt: { rendered: string };
  date: string;
  context: string;
  jetpack_featured_media_url: string;
  image?: string;
  category: string;
  description: string;
  
}


export interface Post{
  id: number;
  title: string;
  description: string;
  date: string;
  category: string;
  image: string;
}