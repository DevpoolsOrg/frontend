import { ScrollArea } from "@/components/shadcn/ui/scroll-area";
import { Post } from "./Post";
import { useForumStore } from "../store/forum.store";
import { useEffect } from "react";

export const PostList = () => {
  const posts = useForumStore((state) => state.posts);
  const getPosts = useForumStore((state) => state.getPosts);

  useEffect(() => {
    getPosts();
  }, [getPosts]);

  return (
    <ScrollArea className="sm:h-[550px]">
      {posts.length > 0 && posts.map((post, i) => <Post key={i} post={post} />)}
    </ScrollArea>
  );
};
