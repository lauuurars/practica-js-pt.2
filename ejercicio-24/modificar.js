function cambiarEdad (objeto){
    objeto.edad++;
    return objeto;
}
console.log(cambiarEdad({nombre: "Laura", edad: 18}));