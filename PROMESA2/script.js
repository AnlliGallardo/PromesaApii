let num1 = Number(prompt('ingrese un numero'))
let num2 = Number(prompt('ingrese el segundo numero'))
let num3 = Number(prompt('ingreses el tercer numero'))
let suma = num1 + num2 + num3;

const promesa = new Promise((resolve, reject) =>{
    if (suma >= 25){
    resolve(suma)
}else{
    reject('el numero es menor a 25')

}
})


promesa.then(res =>{
    console.log('el resultado es', res)
})
.catch(error => {
    console.log(error)
})