function reagroup (one, two, three){
    
let i = 0
let texto = ""
 while (i < one.length ){
  texto += one[i] + two[i] + three[i]
  i++
  }
  return texto
}

module.exports = reagroup