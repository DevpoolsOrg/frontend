import { Navigate, Route, Routes } from "react-router-dom";
import { NotFoundPage } from "../../UI/pages/NotFoundPage";
import { UsersView } from "../views/UsersView";
import { AddUserView } from "../views/AddUserView";
import { EditUserView } from "../views";
import { useAuthStore } from "@/auth/store/authStore";
import { ValidRoles } from "../types";


export const UsersRutes = () => {
  const user = useAuthStore(state => state.user);

  if (user?.roles.includes(ValidRoles.USER)) {
    return <Navigate to="/" />;
  };
  
  return (
   <Routes>
        <Route path="/" element={ <UsersView /> } />
        <Route path="/add" element={<AddUserView />} />
        <Route path="/edit/:id" element={ <EditUserView /> } />
        <Route path="/*" element={ <NotFoundPage /> } />
    </Routes>
    
  )
}
