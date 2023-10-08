export class User {
   
    id:number;
    username:string;
    email:string;
    pwd:string;
    avatar?:string;
    role?:string;
    constructor(username:string='',email:string='',pwd:string='',avatar:string="",id:number = 0, role:string=""){
       
        this.username = username;
        this.email = email;
        this.pwd=pwd;
        this.avatar = avatar
        this.id = id;
        this.role = role;
    }
}
