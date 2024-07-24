import express, { Request, Response, } from "express";
import { Error, Types } from "mongoose";
import { GroupDoc, GroupModel } from "../models/group";

export const groupRouter = express.Router();

groupRouter.get('/user/:userId/groups', async (req: Request, res: Response) => {
    // route for getting all groups by user from the db
    console.log(req.params)
    GroupModel.find({user: new Types.ObjectId(req.params.userId)}, async (_err: Error, groups: GroupDoc) => {
        console.log(_err, groups);
        res.json(groups);
    })
    .populate('user')
    .populate('exercises');
});