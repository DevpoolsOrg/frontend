
import { Controller, useForm } from 'react-hook-form'
import { User, validRoles } from '../types'
import { Input } from '../../UI/components/Input'
import { useContext } from 'react'
import { UserContext } from '../store'
import { useNavigate } from 'react-router-dom'



export const UserForm = () => {
    const { control, handleSubmit, watch, reset } = useForm<User>()
    const { createUser } = useContext(UserContext)

    const navigate = useNavigate();

    const onSubmit = (data: User) => {
        const { confirmPassword, ...newUser } = data;
        createUser(newUser);
        navigate('/dashboard/users');
        reset();

    }
    const password = watch("password");

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-4 gap-2">
            <div className="col-span-4 md:col-span-2">
                <Input
                    name="firstName"
                    label="Nombre"
                    defaultValue={""}
                    control={control}
                    rules={{
                        required: "El nombre es requerido",
                        pattern: {
                            value: /^[a-zA-Z ]*$/,
                            message: "El nombre no es válido",
                        },
                    }}
                />
            </div>

            <div className="col-span-4 md:col-span-2">
                <Input
                    name="lastName"
                    label="Apellido"
                    defaultValue={""}
                    control={control}
                    rules={{
                        required: "El apellido es requerido",
                        pattern: {
                            value: /^[a-zA-Z ]*$/,
                            message: "El apellido no es válido",
                        },
                    }}
                />
            </div>

            <div className="col-span-4 md:col-span-2">
                <Input
                    name="email"
                    label="Correo Electrónico"
                    defaultValue={""}
                    control={control}
                    rules={{
                        required: "El correo electrónico es requerido",
                        pattern: {
                            value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                            message: "El correo electrónico no es válido",
                        },
                    }}
                />
            </div>

            <div className='col-span-4 md:col-span-2'>
                <Controller
                    name="role"
                    control={control}
                    defaultValue={validRoles.user}
                    rules={{ required: "El rol es requerido" }}
                    render={({ field, fieldState: { error } }) => (
                        <>
                            <label className='font-medium  text-gray-800'>Rol</label>
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

            <div className="col-span-4 md:col-span-2">
                <Input
                    name="password"
                    label="Contraseña"
                    defaultValue={""}
                    control={control}
                    rules={{
                        required: "La contraseña es requerida",
                        minLength: {
                            value: 6,
                            message: "La contraseña debe tener al menos 6 caracteres",
                        },
                    }}
                    type="password"
                />
            </div>

            <div className="col-span-4 md:col-span-2">
                <Input
                    name="confirmPassword"
                    label="Confirmar Contraseña"
                    defaultValue={""}
                    control={control}
                    rules={{
                        required: "La confirmación de la contraseña es requerida",
                        validate: (value: string) =>
                            value === password || "Las contraseñas no coinciden",
                    }}
                    type="password"
                />
            </div>

            <button className="col-span-4 py-2 text-white font-medium bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-600 rounded-lg duration-150">
                Agregar Usuario
            </button>

        </form>
    )
}


