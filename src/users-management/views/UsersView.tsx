import { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../store';
import { SpinnerCloud } from '../../UI/components/SpinnerCloud';
import { DataTable } from '../components/table/DataTable';
import { columns } from '../components/table/Columns';
import { Button } from '@/components/ui/button';

export const UsersView = () => {
  const { users, getUsers, deleteUser, isLoading } = useContext(UserContext);
  useEffect(() => {
    if (users.length === 0) getUsers();
  }, []);

  // const handleDelete = (id: string) => {
  //     window.confirm("¿Estas seguro de eliminar este usuario?")
  //     deleteUser(id);
  // };

  return isLoading ? (
    <SpinnerCloud />
  ) : (
    <main className="grid grid-cols-12">
      <header className="col-span-12 py-4">
        <div className='flex flex-col justify-center items-center'>
            <div className="flex flex-col space-y-3 justify-center items-center">
            <h3 className=" text-xl font-bold sm:text-2xl">
                Usuarios de la plataforma
            </h3>
            <p className="">Gestion de usuarios de la plataforma</p>
            </div>
            <Button className='sm:self-start my-4 sm:ml-4'>
            <Link to="add">Agregar Usuario</Link>
            </Button>
        </div>
      </header>
      <section className="col-span-12 p-2">
        <DataTable columns={columns} data={users} />
      </section>
    </main>
  );
};
