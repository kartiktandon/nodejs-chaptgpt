import express from 'express'
const router = express.Router();
import createUser from '../controller/createUser.js'

router.get('/', (req,res) => {
   res.render("signup")
})

router.post('/', createUser)
export {router}