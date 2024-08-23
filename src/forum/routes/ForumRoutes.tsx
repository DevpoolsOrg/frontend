import { Route, Routes } from "react-router-dom"
import { ForumLayout } from "../layout/ForumLayout"
import { ProtectedAdminRouter } from "../../router/ProtectedAdminRouter"
import { ForumPage } from "../pages/ForumPage"

export const ForumRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={ <ForumLayout /> }>
          <Route path='/' element={ <ForumPage /> } />
          <Route path='/' element={ <ProtectedAdminRouter /> }>
            <Route path='/admin' element={ <h1>Panel de administración</h1> } />
          </Route>
        </Route>
    </Routes>
  )
}
