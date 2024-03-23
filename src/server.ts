import { log } from "console"
import app from "./app"

const PORT = process.env.PORT

app.listen(PORT,()=>{
    console.log(`El server se levando en el puerto ${PORT}...`);
    
})