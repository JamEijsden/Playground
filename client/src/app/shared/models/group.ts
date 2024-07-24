import { Exercise } from "./exercise";
import { User } from "./user";

export class Group {
    constructor(public name: string = 'Undefined', order: number = 1, public exercises: Exercise[] = [], user?: User) { }
}
