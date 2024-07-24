import express, { application } from "express";
import { config } from "./config";
import mongoose, { Error } from "mongoose";
import { router } from "./routes";

import { userRouter } from "./routes/user-routes";
import { groupRouter } from "./routes/group-routes";
import { UserModel, UserDoc } from "./models/user";
import { GroupDoc, GroupModel, jsonObjectToGroup } from "./models/group";
import { ExerciseDoc, ExerciseModel } from "./models/exercise";

// require-syntax used to parse json doc
const USERS = require("./data/users.json");
const GROUPS = require("./data/groups.json");
const EXERCISES = require("./data/exercises.json");
const app = express();

// Connect to MongoDB
console.log('Connection to mongoDb on uri: ' + config.mongo.uri);
mongoose.connect(config.mongo.uri, config.mongo.options);
mongoose.connection.on('error', function(err: Error) {
 console.error('MongoDB connection error: ' + err);
});

// populate db with users if collection doesn't exit
UserModel.findOne({}, async (err: Error, doc: UserDoc) => {
    if (!doc) {
        UserModel.collection.insertMany(USERS).then(() => console.log("Inserted users from JSON"));
    }
});

// populate db with groups if collection doesn't exit
GroupModel.findOne({}, async (err: Error, doc: GroupDoc) => {
    if (!doc) {
        GroupModel.collection.insertMany(GROUPS.map((groups: any) => jsonObjectToGroup(groups))).then(() => console.log("Inserted groups from JSON"));
    }
});

// populate db with groups if collection doesn't exit
ExerciseModel.findOne({}, async (err: Error, doc: ExerciseDoc) => {
    if (!doc) {
        ExerciseModel.collection.insertMany(EXERCISES).then(() => console.log("Inserted exercises inserted from JSON"));
    }
});

 
// Cross Origin middleware
app.use(function(req: express.Request, res: express.Response, next: express.NextFunction) {
 res.header("Access-Control-Allow-Origin", "*");
 res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
 next();
});

app.use("/api", router);
app.use('/api/user', userRouter);
app.use('/api', groupRouter);
 
app.listen(config.port, () => console.log(`Example app listening on ${config.port}!`));
