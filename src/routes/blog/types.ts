export type BlogPostType = {
  _id: string;
  title: string;
  content: string;
  date: string;
  slides: string[];
  likes: number;
  views: number;
  creator: {
    avatar: string;
    name: string;
  };
};
