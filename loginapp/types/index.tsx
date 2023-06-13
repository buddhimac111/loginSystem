export interface WindowSize {
    width: number;
    height: number;
}

export interface IUser {
    _id?: string;
    email: string;
    username: string;
}

export interface LoginUserParams {
    email: string;
    password: string;
}