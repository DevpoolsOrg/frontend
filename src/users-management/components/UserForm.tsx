
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/shadcn/ui/form";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/shadcn/ui/select"
import { Button } from '@/components/shadcn/ui/button';

import { z } from 'zod';
import { zodResolver } from "@hookform/resolvers/zod";

import { useUserStore } from '../store/userStore';
import { Input } from '@/components/shadcn/ui/input';
import { ValidRoles } from '../types';


const formSchema = z.object({
    name: z.string().min(2, {
        message: "El nombre es requerido.",
    }),
    email: z.string().email({
        message: "El correo electrónico no es válido.",
    }),
    roles: z.string().min(2, {
        message: "El rol es requerido.",
    }),
    password: z.string().min(6, {
        message: "La contraseña debe tener al menos 6 caracteres.",
    }),
    confirmPassword: z.string().min(6, {
        message: "La confirmación de la contraseña es requerida.",
    }),
}).refine(data => data.password === data.confirmPassword, {
    message: "Las contraseñas no coinciden",
});



export const UserForm = () => {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            roles: "",
            password: "",
            confirmPassword: "",
        },
    });
    const createUser = useUserStore(state => state.createUser);

    const navigate = useNavigate();

    const onSubmit = (data: z.infer<typeof formSchema>) => {
        const newUser = {
            name: data.name,
            email: data.email,
            roles: [data.roles],
            password: data.password,
        }
        createUser(newUser)
            ;
        navigate('/dashboard/users');
        form.reset();

    }
    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="grid grid-cols-4 gap-2">

                <div className="col-span-4 md:col-span-2">
                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Nombre</FormLabel>
                                <FormControl>
                                    <Input placeholder="Nombre" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>

                <div className="col-span-4 md:col-span-2">
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Correo Electronico</FormLabel>
                                <FormControl>
                                    <Input placeholder="usuario@mail.com" type="email" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>
                <div className="col-span-4 md:col-span-2">
                    <FormField
                        control={form.control}
                        name="roles"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Rol</FormLabel>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                    <FormControl>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Seleccione un rol" />
                                        </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                        <SelectGroup>
                                            <SelectItem value={ValidRoles.ADMIN}>
                                                <SelectLabel>Administrador</SelectLabel>
                                            </SelectItem>
                                            <SelectItem value={ValidRoles.USER}>
                                                <SelectLabel>Usuario</SelectLabel>
                                            </SelectItem>
                                        </SelectGroup>
                                    </SelectContent>
                                </Select>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>

                <div className="col-span-4 md:col-span-2">
                    <FormField
                        control={form.control}
                        name="password"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Contraseña</FormLabel>
                                <FormControl>
                                    <Input type="password" placeholder="********" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>

                <div className='col-span-4 md:col-span-2'>
                    <FormField
                        control={form.control}
                        name="confirmPassword"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Confirmar Contraseña</FormLabel>
                                <FormControl>
                                    <Input type="password" placeholder="********" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>
                <div className="col-span-4">
                    <Button>Crear</Button>
                </div>

            </form>
        </Form>
    )
}


