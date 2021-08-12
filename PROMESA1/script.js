let nombre = (prompt('ingrese su nombre'))

const promesa = new Promise((resolve, reject) =>{
    if (nombre !== ''){
    resolve(nombre)
}else{
    reject('ingrese un nombre')

}
})


promesa.then(res =>{
    console.log('su nombre es', res)
})
.catch(error => {
    console.log(error)
})
