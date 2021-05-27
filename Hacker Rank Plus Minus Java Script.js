// javascript Plus Minus 

// i/p [1,1,0,-1,-1,1]
// o/p 0.50000 \n 0.333333 \n 0.166667

function CalculateDecimal(Arr){
let PositiveInteger = 0
let NegativeInteger = 0
let ZerosInteger = 0
  let arrayLength = Arr.length
  for(let i=0;i<Arr.length;i++){
    let convertToInteger = Math.sign(Arr[i])
    convertToInteger == 1 ? 
      PositiveInteger ++ :
      convertToInteger == -1 ?
      NegativeInteger ++
      :
      ZerosInteger ++
  }
  console.log((PositiveInteger/arrayLength).toFixed(6))
  console.log((NegativeInteger/arrayLength).toFixed(6))
  console.log((ZerosInteger/arrayLength).toFixed(6))
  
}


console.log(CalculateDecimal([1,1,0,-1,-1,1]))
