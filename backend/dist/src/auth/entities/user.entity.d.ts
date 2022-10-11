export declare enum Status {
    Admin = 0,
    Editor = 1,
    Client = 2,
    Guest = 3
}
export declare class UserEntity {
    login: number;
    password: string;
    hashPassword(): Promise<void>;
    name: string;
    surname: string;
    email: string;
    status: Status;
    country: string;
    university: string;
    confirmed?: boolean;
}
