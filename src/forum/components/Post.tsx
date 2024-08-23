import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/shadcn/ui/card"
import { ForumPost } from "../interfaces/forum.interface";
import { Button } from "@/components/shadcn/ui/button";

interface PostProps {
    post: ForumPost;
    }

export const Post = ({ post }: PostProps) => {
  return (
    <Card className="m-2">
        <CardHeader>
            <CardTitle>{ post.title }</CardTitle>
            <CardDescription>{ post.category.name }</CardDescription>
        </CardHeader>    
        <CardContent className="flex flex-col">
            { post.content }
        <Button className="mt-2 self-end">Leer mas</Button>
        </CardContent>
    </Card>
  )
}
