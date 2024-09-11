function prueba(text){

}


const funcionOneLine = () => {
    let i = "hola mundo"
    //arrays
    var boots = [1,2,3,4, 'hola', {'hola' :1, 'mundo' : 2},{' hola' :1, 'mundo' : 2}, i]
    //prueba indice
    //console.log(boots[5].mundo)
    /*console.log(boots[5]['hola'])
    console.log(boots[6]['mundo'])*/
    for (let i = 0; i < boots.length; i++) {
        console.log(boots[i])
    }

    while( i < boots.length){
        console.log(boots[i])
        i++
    }

    boots.forEach(function (boots, i) {
        console.log(boots)
        console.log(i);
        
    })    

    let recoidoBoot = boots.map(function (boots, i) {
        console.log(boots);
        console.log(i);    
    })
    
    console.log(recoidoBoot)

    //objetos
    let camp = {'hola' : 1, 'mundo' : boots, saludar: function () { return "hola bienbenidos"}}
        
    let personas = { nombres: 'andres rivas', edad : 26, ciudad : 'Bogota', sexo : "aveces"}

    for(let clave in personas){
        console.log(clave + ":" +personas[clave]);
    }

    Object.keys(personas).forEach(function(clave){
        console.log(clave + ":" +personas[clave]);
    });

    Object.values(personas).forEach(function(valor) {
        console.log(clave + ":"+valor);
    });

    const bootcamps = () => {
        return "hola este es mi valor"
    }
 
    const notas = () => {
        var info = [{nombre : 'andres', edad : 22, grado: 'quinto', nota1: 33, nota2: 44}, {nombre : 'camilo', edad : 18, grado: 'tercero', nota1: 23, nota2: 94}, {nombre : 'jorge', edad : 26, grado: 'sexto', nota1: 23, nota2: 94} ]
    }
}