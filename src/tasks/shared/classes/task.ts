import { Document } from "mongoose";

export class Task extends Document {
    id: string ;
    description: string;
    completed: boolean;
}
