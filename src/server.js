import express from "express";
import dotenv from 'dotenv';
//import mainRoutes from './routes/main.js';
import cors from 'cors';
import fileUpload from "express-fileupload";
import { fileURLToPath } from 'url';
import { dirnam, dirname } from "path";

dotenv.config();

const_filename = fileURLToPath(import.meta.url);
const_dirname = dirname(_filename);

const server = express();
server.use(cors());
server.use(express.json());
server.use(fileUpload());

//server.use(mainRoutes);

server.use(express.static(_dirname+'/public'));

server.listen(process.env.PORT, () => {
    console.log(`Rodando na porta: ${process.env.BASE}`);
});