import { User } from "./User";
export class Task {
    id:number;
    status:string;
    note:string;
    creation:Date;
    deadLine:Date;
    IdUserCreator: number;
    idUser:Array<number>;

    constructor(creation?:Date,status?:string, note?:string,deadLine?:Date,IdUserCreator?:number, idUser?:Array<number>){
        this.status = status === undefined ? 'todo' : status;
        this.note = note === undefined ? '':note;
        this.creation = new Date();
        this.deadLine = deadLine === undefined ? new Date():deadLine;
        this.IdUserCreator = IdUserCreator === undefined ? 0:IdUserCreator;
        this.idUser = idUser === undefined ? []:idUser;
    }
}