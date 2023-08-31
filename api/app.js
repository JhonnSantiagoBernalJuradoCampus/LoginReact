import Express  from "express";
import cors from "cors";
const app = Express();

app.use(cors())

app.get("/pruebas", (req,res)=>{
    res.status(200).json({saludo: "Hola"})
})

app.listen(5010,()=>{
    console.log(`http://localhost:5010`);
})