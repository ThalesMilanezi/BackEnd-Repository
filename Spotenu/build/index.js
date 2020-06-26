"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const express_1 = __importDefault(require("express"));
const UserRouter_1 = require("./router/UserRouter");
const cors_1 = __importDefault(require("cors"));
const GenderRouter_1 = require("./router/GenderRouter");
const AlbumRouter_1 = require("./router/AlbumRouter");
const MusicRouter_1 = require("./router/MusicRouter");
dotenv_1.default.config();
const app = express_1.default();
app.use(express_1.default.json());
app.use(cors_1.default());
app.use("/", UserRouter_1.userRouter);
app.use("/gender", GenderRouter_1.genderRouter);
app.use("/album", AlbumRouter_1.albumRouter);
app.use("/music", MusicRouter_1.musicRouter);
exports.default = app;