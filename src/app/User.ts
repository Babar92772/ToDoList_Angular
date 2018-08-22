export class User {
    id:number;
    mail:string;
    pwd:string;
    constructor(id?:number,mail?:string,password?:string){
        this.id = id === undefined ? 0 : id;
        this.mail = mail === undefined ? '' : mail;
        this.pwd = password === undefined ? '':password;
    }
}