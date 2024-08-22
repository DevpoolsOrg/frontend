import { Route, Routes } from "react-router-dom"
import { ForumLayout } from "../layout/ForumLayout"
import { ProtectedAdminRouter } from "../../router/ProtectedAdminRouter"

export const ForumRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={ <ForumLayout /> }>
          <Route path='/' element={ <h1>Foro</h1> } />
          <Route path='/' element={ <ProtectedAdminRouter /> }>
            <Route path='/admin' element={ <h1>Panel de administración</h1> } />
          </Route>
        </Route>
    </Routes>
  )
}
