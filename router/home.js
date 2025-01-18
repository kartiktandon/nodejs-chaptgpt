import express from 'express'
const router = express.Router();
import { getData } from '../controller/getData.js';
router.post('/', getData)
export {router}