import { Users } from "./Users";
import { Tasks } from "./Tasks";
export class Comments {
        ID: number;
        Content : string;
        CreateDate: Date;
        IDUser : number;
        IDTask : number;

        Tasks : Tasks;
        Users : Users;
    
}