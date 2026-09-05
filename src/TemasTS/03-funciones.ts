function sumar(a:number,b:number):number {
    let res= a+b
    console.log(res)
    return res
}

const resultado=sumar(3,5)
console.log(sumar(7,3))

function multiplicar(n1:number=2,base?:number,n2:number=4)number {
    return n1*n2base;
}
Console.log(multiplicar())
Console.log(multiplicar(3))
Console.log(multiplicar(3,2))

interface Mascotas{
    nombre:string,
    edad:number,
    raza:string,
    sexo?:string,
    vacunado:boolean,
    mostrarEdad:()=>void
}

function  mostrarMascota(mascota:Mascotas, x:number):void{
    mascota.edad+=x;
    console.log(mascota)
    console.log(mascota.mostrarEdad())
}

const nuevaMascota:Mascotas={
    nombre:"firulais",
    edad:5,
    raza: "Pastor Aleman",
    vacunado:true,
    mostrarEdad(){
        console.log(`La edad de ${this.nombre} es ${this.edad}`)
    }
}

mostrarMascota(nuevaMascota,3)