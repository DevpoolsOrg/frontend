import { ForumNav } from "../components/ForumNav"
import { PostList } from "../components/PostList"

export const ForumPage = () => {
  return (
    <div className="h-full w-full">
        {/* navegacion con input de busqueda de articulos y btn de agregar articulo */}
        <ForumNav />
        {/*  lista de articulos */}
        <PostList />
    </div>
  )
}
