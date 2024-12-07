
var generateParenthesis = function(n) {
    let ans = []
    generate( n , 0 , 0 , "" , ans )
    return ans ;
};

const generate = ( n , open , close , str , ans ) =>{
     if( open === n && open === close ){
         let arr= [...str]
         ans.push( arr.join("") )
         return
     }

     if( open < n && close < open ){
           generate( n , open+1 , close , str+"(" , ans )
           generate( n , open , close + 1 , str+")" , ans )
     }
     else if( open < n && close === open ){
          generate( n , open+1 , close , str+"(" , ans )
     }
     else if( open === n && close < n ){
           generate( n , open , close + 1 , str+")" , ans )
     }




}