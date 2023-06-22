import { Router } from "express";
import passport from "passport"
import userModel from "../dao/mongo/user.js";
import { createHash, isValidPassword } from "../utils.js";


const router = Router();

router.post('/register', passport.authenticate("register", {failureRedirect: "/failureredirect"}), async(req,res) => {    
    res.send({status:"success", message: "Usuario registrado"});
})

router.post('/login', passport.authenticate("login", {failureRedirect: "/failurelogin"}), async(req,res)=>{
    if(!req.user) return res.status(400).send({ status: "error", error: "Credenciales invalidades"})
    req.session.user = {
        first_name: req.user.first_name,
        last_name: req.user.last_name,
        email: req.user.email,
    }
    res.send({ status: "success", payload: req.user});
})

export default router;