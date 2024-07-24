import { Schema, model, Document } from "mongoose";

export interface Exercise {
    name: string,
    order: number,
    sets: number
}

export interface ExerciseDoc extends Document, Exercise {}; // type that queries of ExerciseModel will return

const exerciseSchema = new Schema<Exercise>({
    "name": { type: String , required: true },
    "order": { type: Number , required: true },
    "sets": { type: Number , required: true }
});

export const ExerciseModel = model<Exercise>('Exercise', exerciseSchema);