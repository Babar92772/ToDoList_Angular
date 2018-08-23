export class User {
    id:number;
    mail:string;
    pseudo:string;
    pwd:string;
    constructor(id?:number,mail?:string,pseudo?:string,password?:string){
        this.id = id === undefined ? 0 : id;
        this.mail = mail === undefined ? '' : mail;
        this.pseudo = pseudo === undefined ? '' : pseudo;
        this.pwd = password === undefined ? '':password;
    }
}