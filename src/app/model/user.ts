import { UserRoles } from "../enums/user-roles";

export class User {

    id: number;
    name: string;
    surname: string;
    email: string;
    password: string;
    role: UserRoles;
    roleString?: string;
    isAdmin?: boolean
}
