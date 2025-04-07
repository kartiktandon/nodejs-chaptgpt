import express from 'express'
const router = express.Router();
import fetchUser from '../controller/loginUser.js'

router.get('/', (req,res) => {
   res.render("login")
})

router.post('/', fetchUser)

export {router}