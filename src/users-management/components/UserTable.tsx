
import { Link } from 'react-router-dom'
import { User, validRoles } from '../types'

interface UserTableProps {
  user: User
  handleDelete: (id: string) => void
}

 const renameRole = (role: string) => {
  switch (role) {
      case validRoles.superUser:
          return 'Super Usuario';
      case validRoles.adminTech:
          return 'Administrador técnico';
      case validRoles.admin:
          return 'Administrador';
      case validRoles.user:
          return 'Usuario';
  }
}

export const UserTable = ({user, handleDelete}: UserTableProps) => {
  return (
    <tr key={user._id}>
    <td className="px-6 py-4 whitespace-nowrap">{`${user.firstName}, ${user.lastName}`}</td>
    <td className="px-6 py-4 whitespace-nowrap">{user.email}</td>
    <td className="px-6 py-4 whitespace-nowrap">{renameRole(user.role)}</td>
    <td className="px-6 py-4 whitespace-nowrap">{user.isActive ? "Activo" : "Desactivado"}</td>
    <td className="text-right px-6 whitespace-nowrap">
        <Link
            to={`edit/${user._id}`}
            className="py-2 px-3 font-medium text-indigo-600 hover:text-indigo-500 duration-150 hover:bg-gray-50 rounded-lg">
            Editar
        </Link>
        <button
            id={user._id}
            onClick={() => handleDelete(user._id!)}
            className="py-2 leading-none px-3 font-medium text-red-600 hover:text-red-500 duration-150 hover:bg-gray-50 rounded-lg">
            Eliminar
        </button>
    </td>
</tr>
  )
}
