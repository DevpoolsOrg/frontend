import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { UserFormLayout } from "@/users-management/layout/UserFormLayout"
import { User } from "@/auth/interfaces/user.interface"
import { RoleForm } from "../components/RoleForm"
import { useUserStore } from "../store/userStore"

export const EditUserView = () => {
  const { id } = useParams()
  const users = useUserStore(state => state.users);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    console.log(user)
    if(id){
      const user = users.find(user => user.id === id);
      if(user) setUser(user)
    }
  }
  , [])

  return (
    <UserFormLayout title="Cambiar Rol" >
       <RoleForm user={user!} />
    </UserFormLayout>
  )
}
