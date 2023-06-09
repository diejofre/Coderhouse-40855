import passport from "passport"
import local from "passport-local"
import userModel from "../dao/mongo/user.js"
import { createHash, isValidPassword } from "../utils.js"

const localStrategy = local.Strategy

const initializePassport = () => {
    passport.use("register", new localStrategy(
        {passReqToCallback: true, usernameField: "email"}, async(req, username, password, done) => {
            const { first_name, last_name, email } = req.body
            try {
                let user = await userModel.findOne({ email: username})
                if(user) {
                    console.log("El usuario ya existe")
                    return done(null, false)
                }
                let newUser = {
                    first_name,
                    last_name,
                    email,
                    password: createHash(password)
                }
                let result = await userModel.create(newUser)
                return done(null, result)
            } catch(err) {
                return done("Error al obtener el usuario" + error)
            } 
        }
    ))
    
    passport.use("login", new localStrategy(
        {usernameField: "email"} , async(username, password, done) => {
            try {
            const user = await userModel.findOne({email: username})
            if(!user) {
                console.log("El usuario no existe")
                done(null, false)
            }
            if(!isValidPassword(user, password)) return done(null, false)
            done(null, user)
            } catch(err) {
                return done(err)
            }
        } 
    ))
    
    passport.serializeUser((user, done) => {
        done(null, user._id)
    })
    
    passport.deserializeUser(async(id, done) => {
        const user = userModel.findById(id)
        done(null, user)
    })
} 

export default initializePassport