import { create } from "zustand";
import { UserStoreType } from "../types";
import { UserRequest } from "../api/userRequest";
import { handleStatusErrors, handleSuccess } from "../utils/handleStatusCode";


export const useUserStore = create<UserStoreType>((set, get) => ({
    users: [],
    getUsers: async () => {
        set({ isLoading: true });
        const response = await UserRequest.getUsersApi();
        if( response.status === 200 ){
            set({ users: response.data, isLoading: false });
            return handleSuccess('Usuarios cargados');
        }
        handleStatusErrors( response.status );
    },
    findUser: async(id: string) => {
        const user =  get().users.find(user => user.id === id);
        !user && handleStatusErrors(404);
        return user;
    },
    createUser: async(user) => {
        set({ isLoading: true });
        const response = await UserRequest.createUserApi(user);
        if( response.status === 201 ){
            set({ isLoading: false, users: [...get().users, response.data] });
            return handleSuccess('Usuario creado');
        }
        handleStatusErrors( response.status );
    },
    updateUserRole: async(user) => {
        set({ isLoading: true });
        const response = await UserRequest.updateUserRoleApi(user);
        if( response.status === 202 ){
            set({ isLoading: false, users: get().users.map( u => u.id === user.id ? response.data : u ) });
            return handleSuccess('Rol actualizado');
        }
        handleStatusErrors( response.status );
    },
    deleteUser: async(id) => {
        set({ isLoading: true });
        const response = await UserRequest.deleteUserApi(id);
        if( response.status === 200 ){
            set({ isLoading: false, users: get().users.filter( u => u.id !== id ) });
            return handleSuccess('Usuario eliminado');
        }
        handleStatusErrors( response.status );
    },
    isLoading: false,
    
}));