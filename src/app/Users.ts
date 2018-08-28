import {Comments} from "./Comments";
import { Tasks } from "./Tasks";
export class Users {
    // id:number;
    // mail:string;
    // pseudo:string;
    // pwd:string;
    // constructor(id?:number,mail?:string,pseudo?:string,password?:string){
    //     this.id = id === undefined ? 0 : id;
    //     this.mail = mail === undefined ? '' : mail;
    //     this.pseudo = pseudo === undefined ? '' : pseudo;
    //     this.pwd = password === undefined ? '':password;
    // }

    //[System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
    constructor()
        {
            this.Comments = Array<Comments>();
            this.Tasks = new Array<Tasks>();
            this.Tasks1 = new Array<Tasks>();
        }

        ID : number;
        Pseudo : string;
        Mail : string;
        Pwd :string;

        //[System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        Comments : Array<Comments>        //[System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        Tasks : Array<Tasks>
        //[System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
       Tasks1 : Array<Tasks>;
}