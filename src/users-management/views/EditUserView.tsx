import { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { UserFormLayout } from "../layout"
import { UserContext } from "../store"
import { User } from "../types"
import { RoleForm } from "../components/RoleForm"

export const EditUserView = () => {
  const { id } = useParams()
  const { users } = useContext(UserContext)
  const [user, setUser] = useState<User | null>(null)

  useEffect(() => {
    if(id){
      const user = users.find(user => user._id === id)
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
