function twoNumberSum(array, targetSum) {
    let resultado = []
    for(let i=0; i < array.length; i++) {
        let number1 = array[i]
        let number2 = targetSum-number1
        let arraySinNumber1 = array.filter((num)=>num!=number1)
        for(let j=0; j < arraySinNumber1.length; j++) {
            if (arraySinNumber1[j] == number2){
                resultado = [number1,number2]
                console.log("El array resultante es: ["+resultado+"]")
                return 1
            }
        }
    }
    if(resultado = []){
        console.log("No hay coincidencia")
        return []
    }

}
twoNumberSum([1,2,3,4,5],1)