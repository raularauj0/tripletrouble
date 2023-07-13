function reagroup (one, two, three){
    
//  if ( one === 'abc' && two === 'abc' && three === 'abc' ){
//     return 'aaabbbccc'
//  }
//  if ( one === 'aa' && two === 'bb' && three === 'cc' ){
//     return one + two + three
//  }
 
let i = 0
let texto = ""
 while (i < one.length ){
  texto += one[i] + two[i] + three[i]
  i++
  }
  return texto
}

module.exports = reagroup