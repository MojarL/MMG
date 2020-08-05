"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.__esModule = true;
var fs = require("fs");
var texto = fs.readFileSync('lista.txt', 'utf8');
var palabras = texto.split('\r\n');
