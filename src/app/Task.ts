import { User } from "./User";
export class Task {
    id:number;
    status:string;
    note:string;
    deadLine:Date;
    IdUserCreator: number;
    idUser:Array<number>;

    constructor(status?:string, note?:string,deadLine?:Date,IdUserCreator?:number, idUser?:Array<number>){
        this.status = status === undefined ? '' : status;
        this.note = note === undefined ? '':note;
        this.deadLine = deadLine === undefined ? new Date(1992,1,21):deadLine;
        this.IdUserCreator = IdUserCreator === undefined ? 0:IdUserCreator;
        this.idUser = idUser === undefined ? []:idUser;
    }
}