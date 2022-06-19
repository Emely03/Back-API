const {Router} = require ("express");
const router = Router();
const apiRoute = '/api'
const empleadosControllers= require('../Controllers/Empleados')

//Crear los routes para los cursos COURSE

//selecciona getAll  y clic y te lleva al metodo
router.get(apiRoute+'/empleados',empleadosControllers.getAll)
router.post(apiRoute+'/empleados',empleadosControllers.create)



//expotar la variable router
module.exports = router;
