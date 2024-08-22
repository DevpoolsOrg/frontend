import { Controller, useForm } from 'react-hook-form';
import {  ValidRoles } from '../types';
import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { User } from '@/auth/interfaces/user.interface';
import { useUserStore } from '../store/userStore';



export const RoleForm = ({ user }: { user: User }) => {


    const updateUserRole = useUserStore(state => state.updateUserRole);
    
    const { control, reset, handleSubmit } = useForm<User>();
    const navigate = useNavigate();
    useEffect(() => {
        reset(user);
    }, [user, reset]);

    const onsubmit = (data: User) => {
        updateUserRole(data);
        navigate('/dashboard/users');
        
    }

    return (
        <form  onSubmit={handleSubmit(onsubmit)} className="flex justify-center flex-col">
          <div className="col-span-4">
          <Controller
                name="role"
                control={control}
                defaultValue={validRoles.user}
                rules={{ required: "El rol es requerido" }}
                render={({ field, fieldState: { error } }) => (
                    <>
                        <label className='font-medium text-gray-800'>Rol</label>
                        <select
                            {...field}
                            value={field.value}
                            onChange={field.onChange}
                            className={`w-full mt-2 px-3 py-2 text-gray-800 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg ${error ? "border-red-500" : ""}`}
                        >
                            <option value={validRoles.user}>Usuario</option>
                            <option value={validRoles.admin}>Administrador</option>
                            <option value={validRoles.adminTech}>Administrador Tecnico</option>
                        </select>
                        {error && <p className="text-sm text-red-500">{error.message}</p>}
                    </>
                )}

            />
          </div>
            <button type="submit" className="col-span-4 md:col-span-2 bg-indigo-600 text-white m-2 py-2 rounded-lg">Guardar</button>
        </form>

    )
}
