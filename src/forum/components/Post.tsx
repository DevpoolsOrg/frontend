import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/shadcn/ui/card"
import { ForumPost } from "../interfaces/forum.interface";
import { Button } from "@/components/shadcn/ui/button";

interface PostProps {
    post: ForumPost;
    }

export const Post = ({ post }: PostProps) => {
  return (
    <Card className="m-2">
        <CardHeader>
            <CardTitle>{ post?.title }</CardTitle>
            <CardDescription>{ post?.category?.name }</CardDescription>
        </CardHeader>    
        <CardContent>
            { post?.content }
        </CardContent>
        <CardFooter className="flex justify-between">
          <CardTitle>{ post?.user?.name }</CardTitle>
          <CardDescription>Cantidad de votos: { post?.votes?.length }</CardDescription>
          <Button className="mt-2 self-end">Leer mas</Button>
        </CardFooter>
    </Card>
  )
}
