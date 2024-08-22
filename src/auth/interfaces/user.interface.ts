

export interface User {
    id: string;
    name: string;
    email: string;
    password: string;
    roles: string[];
    isActive: boolean;
    avatar?: string;
};

export interface UserLogin {
    email: string;
    password: string;
};

export interface UserRegister {
    name: string;
    email: string;
    password: string;
};

export interface CreateUser extends UserRegister {
    roles: string[]; 
};

export interface UserResponseApi {
    user: User;
    token: string;
};