import { useEffect } from "react";
import { useForumStore } from "../store/forum.store"
import { Separator } from "@/components/shadcn/ui/separator";
import { Card, CardHeader, CardTitle } from "@/components/shadcn/ui/card";

export const Recommendations = () => {

    const posts = useForumStore((state) => state.posts);
    const categories = useForumStore((state) => state.categories);
    const getCategories = useForumStore((state) => state.getCategories);

    useEffect(() => {
        getCategories();
    }, []);


  return (
    <>
        <h2 className="text-center text-xl">Recomendaciones</h2>
        
    </>
  )
}
