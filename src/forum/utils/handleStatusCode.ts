import { toast } from 'react-hot-toast'


export const handleStatusErrors = (statusCode: number) => {
    switch (statusCode) {
      case 401:
        return toast.error('Credenciales incorrectas');
      case 500:
        return toast.error('Error en el servidor');
      case 400:
        return toast.error('Datos incorrectos');
      case 409:
        return toast.error('La publicacion ya existe');
      case 404:
        return toast.error('Publicacion no encontrada');
      case 403:
        return toast.error('No tienes permisos');
  
      default:
        return toast.error('Error desconocido');
    }
  };

  export const handleSuccess = (message: string) => {
    toast.success(message);
  }