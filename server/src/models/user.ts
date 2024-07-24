import { Schema, model, Document } from "mongoose";

export interface User {
    username: string,
    email: string
}

export interface UserDoc extends Document, User {}; // type that queries of UserModel will return

const userSchema = new Schema<User>({
    "username": { type: String , required: true },
    "email": { type: String , required: true },
});

export const UserModel = model<User>('User', userSchema);