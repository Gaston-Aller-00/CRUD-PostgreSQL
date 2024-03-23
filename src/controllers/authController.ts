import  { Request, Response } from "express";
import { comparePasswords, hashPassword } from "../services/password.service";
import prisma from "../models/user";
import { generateToken } from "../services/auth.service";

export const register = async (req: Request, res: Response): Promise<void> => {
}

//////login
export const login = async (req: Request, res: Response): Promise<void> => {

        const { email, password } = req.body
    
        try {
    
            if (!email) {
                res.status(400).json({ message: 'El email es obligatorio' })
                return
            }
            if (!password) {
                res.status(400).json({ message: 'El password es obligatorio' })
                return
            }
    
            const user = await prisma.findUnique({ where: { email } })
            if (!user) {
                res.status(404).json({ error: 'Usuario no encontrado' })
                return
            }
    
            const passwordMatch = await comparePasswords(password, user.password);
            if (!passwordMatch) {
                res.status(401).json({ error: 'Usuario y contraseñas no coinciden' })
            }
    
            const token = generateToken(user)
            res.status(200).json({ token })
    
    
        } catch (error: any) {
            console.log('Error: ', error)
        }
    
    }
