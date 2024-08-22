import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { User } from '@/auth/interfaces/user.interface';
import { useUserStore } from '../store/userStore';
import { ValidRoles } from '../types';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
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

import { z } from 'zod';
import { Button } from '@/components/shadcn/ui/button';

const formSchema = z.object({
    roles: z.string().min(2, {
        message: "Roles es requerido.",
    }),
});



export const RoleForm = ({ user }: { user: User }) => {


    const updateUserRole = useUserStore(state => state.updateUserRole);

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            roles: '',
        },
    });

    const navigate = useNavigate();

    useEffect(() => {
        form.reset({
            roles: user?.roles[0],
        });
    }, [user, form.reset]);

    const HandleOnSubmit = (data: z.infer<typeof formSchema>) => {
        user.roles = [data.roles];
        updateUserRole(user);
        navigate('/dashboard/users');
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(HandleOnSubmit)}>
                <FormField
                    control={form.control}
                    name="roles"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Roles</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Selecione un rol" />
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
                            <FormDescription>
                                Selecciona el rol que deseas asignar al usuario.
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button >Cambiar</Button>
            </form>
        </Form>

    )
}
