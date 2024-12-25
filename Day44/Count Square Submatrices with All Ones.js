var countSquares = function(matrix) {
    
    dp_table = [...matrix];
    
    let [h, w]=[matrix.length, matrix[0].length];
    
    // counter of square submatrices with all ones
    let counter = 0;
    
    // Visit each matrix cell, except for row_0 and column_0
    for( let y=0 ; y < h ; y++){
        for( let x=0 ; x < w ; x++){
            
            if( y && x && matrix[y][x] ){
              
                dp_table[y][x] = 1 + Math.min( dp_table[y][x-1], dp_table[y-1][x],dp_table[y-1][x-1] );
            } 
            
            counter += matrix[y][x];
        }
    }
    
    return counter;

};