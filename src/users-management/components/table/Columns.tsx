import { Button } from '@/components/shadcn/ui/button';
import {  ValidRoles } from '@/users-management/types';
import { ColumnDef } from '@tanstack/react-table';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/shadcn/ui/dropdown-menu';
import { MoreHorizontal } from 'lucide-react';


import { useNavigate } from 'react-router-dom';
import { User } from '@/auth/interfaces/user.interface';
import { useUserStore } from '@/users-management/store/userStore';

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


export const columns: ColumnDef<User>[] = [
  {
    accessorKey: 'firstName',
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          className="hover:bg-transparent"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Nombre
        </Button>
      );
    },
    cell: ({ row }) => {
      return `${row.original.name}`;
    },
  },
  {
    accessorKey: 'email',
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          className="hover:bg-transparent"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Email
        </Button>
      );
    },
    cell: ({ row }) => {
      return row.original.email;
    },
  },
  {
    accessorKey: 'role',
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          className="hover:bg-transparent"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Rol
        </Button>
      );
    },
    cell: ({ row }) => {
      return renameRole(row.original?.roles[0]);
    },
  },
  {
    accessorKey: 'isActive',
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          className="hover:bg-transparent"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Estado
        </Button>
      );
    },
    cell: ({ row }) => {
      return row.original?.isActive ? 'Activo' : 'Desactivado';
    },
  },
  {
    accessorKey: '_id',
    header: 'Acciones',
    cell: ({ row }) => {

      const deleteUser = useUserStore(state => state.deleteUser);
      const handleDelete = (id: string) => {
        window.confirm("¿Estas seguro de eliminar este usuario?")
        deleteUser(id);
      };
      const navigate = useNavigate();

      
      return (
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Acciones</DropdownMenuLabel>
            <DropdownMenuItem
              className="text-foreground"
              onClick={() => navigate(`edit/${row.original.id}`)}
            >
              Editar
            </DropdownMenuItem>
            <DropdownMenuItem
              className="text-red-500"
              onClick={() => handleDelete(row.original.id!)}
            >
              Eliminar
            </DropdownMenuItem>
            <DropdownMenuSeparator />

            <DropdownMenuItem>Ver usuario</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
