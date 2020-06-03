export enum UserRoles{
    ADMIN = "1",
    GENERAL = "2"
 }

 export class UserRolesHelper{
    public static getRoleName(role: UserRoles):string{

        switch(role){
            case "1": return 'ADMIN';
            case "2": return 'GENERAL';
        }
    }

    public static getIsAdmin(role: UserRoles):boolean{
        switch(role){
            case "1": return true;
            case "2": return false;
        }
    }
}