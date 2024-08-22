import { useContext } from "react";
import { AuthContext } from "../../Auth/context";
import { validRoles } from "../types";
import { Navigate, Route, Routes } from "react-router-dom";
import { NotFoundPage } from "../../UI/pages/NotFoundPage";
import { UsersView } from "../views/UsersView";
import { AddUserView } from "../views/AddUserView";
import { EditUserView } from "../views";


export const UsersRutes = () => {

  const { user: { isActive, role } } = useContext(AuthContext);
    if (!isActive && role !== validRoles.adminTech || role !== validRoles.superUser) {
        return <Navigate to="/" />
    }
  return (
   <Routes>
        <Route path="/" element={ <UsersView /> } />
        <Route path="/add" element={<AddUserView />} />
        <Route path="/edit/:id" element={ <EditUserView /> } />
        <Route path="/*" element={ <NotFoundPage /> } />
    </Routes>
    
  )
}
