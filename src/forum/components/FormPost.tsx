import { Button } from "@/components/shadcn/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/shadcn/ui/form";
import { Input } from "@/components/shadcn/ui/input";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useNavigate } from "react-router-dom";
import { Textarea } from "@/components/shadcn/ui/textarea";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/shadcn/ui/select";
import { useForumStore } from "../store/forum.store";
import { useAuthStore } from "@/auth/store/authStore";
import { ValidRoles } from "@/users-management";

const formSchema = z.object({
  title: z.string().min(2, {
    message: "Title must be at least 2 characters.",
  }),
  content: z.string().min(8, {
    message: "Content must be at least 8 characters.",
  }),
  temathicArea: z.string(),
  category: z.string(),
});

enum TemathicArea {
  MATEMATICAS = "Matematicas",
  CIENCIAS_SOCIALES = "Ciencias Sociales",
  CIENCIAS_NATURALES = "Ciencias Naturales",
  LENGUA = "Lengua",
}

export const FormPost = () => {
  const navigate = useNavigate();
  const categories = useForumStore((state) => state.categories);
  const user = useAuthStore((state) => state.user);
  const isAdmin = user?.roles.includes(
    ValidRoles.ADMIN || ValidRoles.SUPERADMIN
  );
  const ministerio = categories.find((category) => category.name === "Ministerio de educacion");
    const docentes = categories.find((category) => category.name === "Docentes");

  const createPost = useForumStore((state) => state.createPost);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      content: "",
      temathicArea: "",
      category: "",
    },
  });


  async function onSubmit(values: z.infer<typeof formSchema>) {
    const { category, ...post} = values;
    createPost(post, category);
    form.reset();
    navigate("/forum");
}
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8 w-3/4 m-auto"
      >
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Titulo</FormLabel>
              <FormControl>
                <Input placeholder="Titulo" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="temathicArea"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Tematica</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione una temática" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value={TemathicArea.MATEMATICAS}>
                      <SelectLabel>Matemáticas</SelectLabel>
                    </SelectItem>
                    <SelectItem value={TemathicArea.CIENCIAS_SOCIALES}>
                      <SelectLabel>Ciencias Sociales</SelectLabel>
                    </SelectItem>
                    <SelectItem value={TemathicArea.CIENCIAS_NATURALES}>
                      <SelectLabel>Ciencias Naturales</SelectLabel>
                    </SelectItem>
                    <SelectItem value={TemathicArea.LENGUA}>
                      <SelectLabel>Lengua</SelectLabel>
                    </SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              <FormDescription>
                Seleccione la temática de su publicación.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="category"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Categoria</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione una categoria" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectGroup>

                    <SelectItem value={docentes?.id!}>
                      <SelectLabel>Docentes</SelectLabel>
                    </SelectItem>

                    {isAdmin && (
                        <SelectItem value={ministerio?.id!}>
                            <SelectLabel>Ministerio de educacion</SelectLabel>
                        </SelectItem>
                    )}

                  </SelectGroup>
                </SelectContent>
              </Select>
              <FormDescription>
                Seleccione la categoria de su publicación.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="content"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Contenido</FormLabel>
              <FormControl>
                <Textarea placeholder="Contenido" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" variant={"secondary"}>
          Crear
        </Button>
      </form>
    </Form>
  );
};
