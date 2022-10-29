const mongoose =require('mongoose')
const URLIDB='mongodb://localhost:27017/Usuarios'


module.exports = () => {
    const conn= () => {
        mongoose.connect(
            URLIDB,
            {
                keepAlive :true,
                useNewUrlParser :true,
                useUnifiedTopology :true
            },
            (err)=>{
                if(err){
                    console.log("error DB"+err)
                }else{
                    console.log("Conexion exitosa")
                }
            }
        )
    }
    conn()
}