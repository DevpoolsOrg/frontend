import { create } from 'zustand';
import { User, UserLogin, UserRegister, UserResponseApi } from '../interfaces/user.interface';
import { AuthRequests } from '../api/AuthRequests';
import { handleStatusErrors } from '../utils/handleStatusCode';
import toast from 'react-hot-toast';

interface AuthStoreI {
    user: User | undefined;
    isLoading: boolean;
    token:string;
    login: ( user: UserLogin ) => Promise<void>;
    logout: () => Promise<void>;
    register: ( user: UserRegister ) => Promise<void>;
    checkAuth: () => void;
    handleError: (error: any) => void;
    handleLogin: ( userResponseApi: UserResponseApi ) => void;

}


export const useAuthStore = create<AuthStoreI>( (set, get) => ({

    user: undefined,
    isLoading: false,
    token: '',
    register: async( user: UserRegister ) => {
            set({ isLoading: true });
            const response = await AuthRequests.register( user );
            if( response.status === 201 ) return get().handleLogin( response.data );
            get().handleError( response.status );

    },
    login: async( user: UserLogin ) => {
            set({ isLoading: true });
            const response = await AuthRequests.login( user );
            if( response.status === 200 ) return get().handleLogin( response.data );
            get().handleError( response.status );
    },
    logout: async() => {
            set({ isLoading: true });
            const response = await AuthRequests.logout();
            if( response.status === 204 ) return set({ user: undefined, isLoading: false, token: '' });
            get().handleError( response.status );
    },
    checkAuth: async() => {
            set({ isLoading: true });
            const response = await AuthRequests.checkAuth();
            if( response.status === 200 ) return get().handleLogin( response.data );
            const res = await AuthRequests.logout();
            if( res.status === 204 ) return set({ user: undefined, isLoading: false, token: '' });

    },
    handleError: (statusCode: number) => {
        handleStatusErrors( statusCode );
        set({ isLoading: false });
    },
    handleLogin: ( userResponseApi: UserResponseApi) => {
        toast.success(`Bienvenido ${userResponseApi.user.name}`);
        set({ user: userResponseApi.user, token: userResponseApi.token, isLoading: false });
    }
}));






