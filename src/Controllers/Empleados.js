const empleadosControllers = {};
const res = require ('express/lib/response');
const empleados = require ('../empleados.json')
//GetAll obtener todo
console.log(empleados)
empleadosControllers.getAll = (req, res)=>{
    res.json(empleados)

}
empleadosControllers.create =  (req, res)=>{
    const numempleado=empleados.length+1;
    const newempleado =req.body;
    newempleado ["numempleado"] = numempleado;
    empleados.push(newempleado );
        res.json(newempleado )
        console.log(req.body)
    
}


module.exports = empleadosControllers;