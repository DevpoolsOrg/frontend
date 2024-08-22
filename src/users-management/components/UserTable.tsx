
import { Link } from 'react-router-dom'
import { User } from '@/auth/interfaces/user.interface'
import { ValidRoles } from '../types'

interface UserTableProps {
  user: User
  handleDelete: (id: string) => void
}

 const renameRole = (roles: string) => {
  switch (roles) {
      case ValidRoles.SUPERADMIN:
          return 'Super Usuario';
      case ValidRoles.ADMIN:
          return 'Administrador';
      case ValidRoles.USER:
          return 'Usuario';
    default:
            return 'Usuario';
  }
}

export const UserTable = ({user, handleDelete}: UserTableProps) => {
  return (
    <tr key={user.id}>
    <td className="px-6 py-4 whitespace-nowrap">{`${user.name}`}</td>
    <td className="px-6 py-4 whitespace-nowrap">{user.email}</td>
    <td className="px-6 py-4 whitespace-nowrap">{renameRole(user.roles[0])}</td>
    <td className="px-6 py-4 whitespace-nowrap">{user.isActive ? "Activo" : "Desactivado"}</td>
    <td className="text-right px-6 whitespace-nowrap">
        <Link
            to={`edit/${user.id}`}
            className="py-2 px-3 font-medium text-indigo-600 hover:text-indigo-500 duration-150 hover:bg-gray-50 rounded-lg">
            Editar
        </Link>
        <button
            id={user.id}
            onClick={() => handleDelete(user.id!)}
            className="py-2 leading-none px-3 font-medium text-red-600 hover:text-red-500 duration-150 hover:bg-gray-50 rounded-lg">
            Eliminar
        </button>
    </td>
</tr>
  )
}
