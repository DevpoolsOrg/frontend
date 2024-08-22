import { Card, CardContent, CardHeader } from "@/components/shadcn/ui/card";
import { LockKeyhole } from "lucide-react";
import { useEffect, useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/authStore";

export const FormLayout = () => {

  const user = useAuthStore(state => state.user);
  const location = useLocation();
const navigate = useNavigate();

  useEffect(() => {
    user && navigate('/', { replace: true });
  },[user]);


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
