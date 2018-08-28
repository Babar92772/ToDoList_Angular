import { Users } from "./Users";
import {Comments} from "./Comments";
export class Tasks {
    // ID:number;
    // TaskState:string;
    // Note:string;
    // Creation:Date;
    // DeadLine:Date;
    // IdUserCreator: number;
    // IdUser:Array<number>;

    // constructor(creation?:Date,status?:string, note?:string,deadLine?:Date,IdUserCreator?:number, idUser?:Array<number>){
    //     this.TaskState = status === undefined ? 'todo' : status;
    //     this.Note = note === undefined ? '':note;
    //     this.Creation = new Date();
    //     this.DeadLine = deadLine === undefined ? new Date():deadLine;
    //     this.IdUserCreator = IdUserCreator === undefined ? 0:IdUserCreator;
    //     this.IdUser = idUser === undefined ? []:idUser;
    // }

    public Tasks()
    {
        this.Comments = new Array<Comments>();
        this.Users1 = new Array<Users>();
    }

    ID : number;
    TaskState : string
    CreateDate : Date;
    DeadLine :Date;
    Note : string
    IDUserCreator : number

    // [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
    Comments : Array<Comments>
    Users: Users;
    // [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
    Users1 : Array<Users>;
}