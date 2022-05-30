const validator = {
    // el objeto validador tiene dos propiedades isValid y maskify
  
    isValid:(cardNumber)=>{
      //convertir en array y revertir
      let arr = cardNumber.split('').reverse()
      let suma = 0;
      let n = 0;
    for(let i=0; i<arr.length; i++){
      if(i%2 === 1){
        n= Number(arr[i])*2;
        //sumar los dos digitos si excede a 9 
        if(n>=10){
          n= (n-10)+1
        }
    } else{
      n= Number(arr[i])
    }
    suma = suma + n
    } //retornar si la suma es divisible de 10 
    return suma % 10 === 0 ? true : false
    },
  
       
  
   maskify : (cardNumber)=>{
      let arr = cardNumber.split('')
      let string = ''
      const recorrido= (cardNumber.length) -4;
      for(let i=0; i < arr.length; i++){
        if(i < recorrido){
          string += '#'
        }else{
          string = string + arr[i]
        }
      } 
      
      return string
    }
  };
    
  export default validator;