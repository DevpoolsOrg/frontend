import { Button } from '@/components/ui/button';
import { User } from '@/users-management/types';
import { ColumnDef } from '@tanstack/react-table';
import { validRoles } from '@/users-management/types';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { MoreHorizontal } from 'lucide-react';
import { UserContext } from '@/users-management/store';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

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
};


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
      return `${row.original.firstName}, ${row.original.lastName}`;
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
      return renameRole(row.original.role);
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
      return row.original.isActive ? 'Activo' : 'Desactivado';
    },
  },
  {
    accessorKey: '_id',
    header: 'Acciones',
    cell: ({ row }) => {

      const {  deleteUser,  } = useContext(UserContext);
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
              onClick={() => navigate(`edit/${row.original._id}`)}
            >
              Editar
            </DropdownMenuItem>
            <DropdownMenuItem
              className="text-red-500"
              onClick={() => handleDelete(row.original._id!)}
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
