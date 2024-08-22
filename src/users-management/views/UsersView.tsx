import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { DataTable } from '../components/table/DataTable';
import { columns } from '../components/table/Columns';
import { Button } from '@/components/shadcn/ui/button';
import { useUserStore } from '../store/userStore';

export const UsersView = () => {
  // const { users, getUsers, deleteUser, isLoading } = useContext(UserContext);
  const users = useUserStore((state) => state.users);
  const getUsers = useUserStore((state) => state.getUsers);
  const isLoading = useUserStore((state) => state.isLoading);
  useEffect(() => {
    if (users.length === 0) getUsers();
  }, []);

  // const handleDelete = (id: string) => {
  //     window.confirm("¿Estas seguro de eliminar este usuario?")
  //     deleteUser(id);
  // };

  return isLoading ? (
    <h1>Cargando...</h1>
  ) : (
    <main className="grid grid-cols-12">
      <header className="col-span-12 py-4">
        <div className='flex flex-col justify-center items-center'>
            <div className="flex flex-col space-y-3 justify-center items-center my-2">
            <h3 className=" text-xl font-bold sm:text-2xl">
                Usuarios de la plataforma
            </h3>
            <p className="">Gestion de usuarios de la plataforma</p>
            </div>
            <Button className=''>
              <Link to="add">Agregar Usuario</Link>
            </Button>
        </div>
      </header>
      <section className="col-span-12 p-2 sm:m-auto">
        <DataTable columns={columns} data={users} />
      </section>
    </main>
  );
};
