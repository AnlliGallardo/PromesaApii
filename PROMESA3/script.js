let edad = (prompt('ingrese su edad'))
let peso = (prompt('ingrese su peso'))


const promesa = new Promise((resolve, reject) =>{
    if (peso >= 100){
    resolve('su edad es '  + edad + ' años su peso es ' + peso + ' KG ')
}else{
    reject('su edad es '  + edad + ' años su peso es ' + peso + ' KG ')

}
})


promesa.then(res =>{
    console.log('usted tiene sobrepeso', res)
})
.catch(error => {
    console.log('su peso es normal', error)
})