import { Schema, model, Document, Types} from "mongoose";
import { Exercise } from "./exercise";
import { User } from "./user";
import { json } from "express";

export interface Group {
    name: string,
    order: number,
    exercises: Exercise[],
    user: User;
}

export interface GroupDoc extends Document, Group {}; // type that queries of UserModel will return

const groupSchema = new Schema<Group>({
    "name": { type: String , required: true },
    "order": { type: Number , required: true },
    "exercises": [{ type: Schema.Types.ObjectId , ref: 'Exercise', required: true }],
    "user": { type: Schema.Types.ObjectId, ref: 'User', required: true },
});

export const GroupModel = model<Group>('Group', groupSchema);

export function jsonObjectToGroup(jsonObject: any): Group {
    jsonObject.user = new Types.ObjectId(jsonObject.user)
    return jsonObject;
}