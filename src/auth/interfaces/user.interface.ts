

export interface User {
    id: string;
    name: string;
    email: string;
    password: string;
    role: string;    
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

export interface UserResponseApi {
    user: User;
    token: string;
};