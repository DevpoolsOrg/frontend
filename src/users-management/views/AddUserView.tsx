
import { UserFormLayout } from '@/users-management/layout/UserFormLayout'
import { UserForm } from '../components'

export const AddUserView = () => {
  return (
    <UserFormLayout title="Agregar Usuario">
        <UserForm />
    </UserFormLayout>
  )
}
