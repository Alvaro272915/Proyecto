class validarUsuario{
    constructor (nombre,contrasena,email){
        this.nombre = nombre ;
        this.contrasena = contrasena;
        this.email = email;
    }
    validaNombre(){
        return this.nombre !== "" ;
    }
    ValidaContrasena(){
        return this.contrasena !== "" ;
    }
    validacionEmail(){
        const regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
        if(regexEmail.test(this.email)){
            return this.email ;
        }
    }
}

class GestionUsuarios {
    constructor(){
        this.usuarios = []
        /*this.contrasena = []*/
        /*this.email*/
    }
    agregarUsuario(nombre,contrasena,email){
        const nuevoUsuario = new validarUsuario(nombre,contrasena,email);
        if(nuevoUsuario.validaNombre() &&  nuevoUsuario.ValidaContrasena() && nuevoUsuario.validacionEmail()){
            this.usuarios.push(nuevoUsuario)
        }
    }
}

let agregarUsuario = new GestionUsuarios();
agregarUsuario.agregarUsuario('Daniel','123456','correo@gmail.com')
agregarUsuario.agregarUsuario('Catalina','123456','correo@gmail.com')
agregarUsuario.agregarUsuario('Pedro','123456','pedro@gmail.com')
agregarUsuario.agregarUsuario('')


console.log(agregarUsuario.usuarios, 'Ver la clase GestionUsuarios')








