import { Card, CardContent, CardHeader } from "@/components/shadcn/ui/card";
import { LockKeyhole } from "lucide-react";
import { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";

export const FormLayout = () => {
  const location = useLocation();
  const [title, setTitle] = useState<string>('Auth');

  useEffect(() => {
    switch (location.pathname) {
      case '/auth/login':
        setTitle('Iniciar Sesión');
        break;
      case '/auth/register':
        setTitle('Registrarse');
        break;
      default:
        setTitle('Auth');
        break;
    }
  }, [location.pathname]);


  return (
    <Card className="w-full border-none sm:w-3/4">
      <CardHeader className="flex flex-col justify-center items-center">
        <LockKeyhole size={48} />
        <h2 className="text-2xl font-semibold">{ title }</h2>
      </CardHeader>
      <CardContent>
        <Outlet />
      </CardContent>
    </Card>
  );
};
