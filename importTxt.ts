Object.defineProperty(exports, "__esModule", { value: true });
import * as fs from 'fs';


let texto:string = fs.readFileSync('lista.txt', 'utf8');

let palabras:string[] = texto.split('\r\n')