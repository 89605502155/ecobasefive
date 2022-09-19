export declare enum UserRole {
    ADMIN = "admin",
    EDITOR = "editor",
    GUEST = "guest"
}
export declare class UserEntity {
    login: string;
    password: string;
    rememberTocken: string;
    email: string;
    firstName: string;
    lastName: string;
    country: string;
    university: string;
    department: string;
    roles: UserRole;
    isVerified: boolean;
    createdAt: Date;
}
