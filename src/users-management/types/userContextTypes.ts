

import { User } from '@/auth/interfaces/user.interface';

export enum ValidRoles {
    SUPERADMIN='super-admin',
    ADMIN='admin',
    USER='user',
};

export interface UsersResponse {
    users: User[];
};

export interface UserResponse {
    user: User;
};

export interface UserStoreType {
    users:    User[];
    getUsers: () => Promise<void>;
    findUser: (id: string) => Promise<User | undefined>;
    createUser: (user: User) => Promise<void>;
    updateUserRole: (user: User) => Promise<void>;
    deleteUser: (id:string) => Promise<void>;
    isLoading: boolean;
};


export interface UserState {
    users: User[];
    isLoading: boolean;
};







