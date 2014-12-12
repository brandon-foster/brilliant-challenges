/*
    Given a 2D square Array, write a method that finds the product of all 
    elements in column x. Also write a method that returns the sum of all
     elements in row x.

    In the 10x10 matrix below, let S be the sum of all column products and let 
    T be the sum of all row sums. What are the last three digits of S + T?

    {5, 10, 10, 1, 6, 4, 3, 9, 6, 4},
    {2, 10, 9, 4, 9, 5, 1, 10, 1, 5},
    {1, 3, 7, 3, 10, 7, 5, 1, 7, 5},
    {5, 1, 2, 7, 3, 2, 4, 2, 1, 3},
    {7, 6, 6, 6, 4, 10, 5, 1, 5, 5},
    {3, 1, 10, 5, 8, 1, 9, 10, 2, 7},
    {1, 7, 1, 10, 5, 10, 5, 3, 3, 3},
    {6, 3, 10, 2, 5, 1, 6, 7, 10, 9},
    {1, 7, 9, 6, 2, 7, 10, 1, 9, 6},
    {10, 9, 6, 10, 4, 7, 6, 3, 4, 7}
 */

/*
 * Return the product of all elements in the column col of the specified two 
 * dimensional square array, matrix.
 */
function multiplyElemsInCol(matrix, col) {
    var product = 1;
    
    for (var i = 0; i < matrix.length; i++) {
        product *= matrix[i][col];
    }
    
    return product;
}

function sumElemsInRow(matrix, row) {
    var sum = 0;
    
    for (var i = 0; i < matrix.length; i++) {
        sum += matrix[row][i];
    }
    
    return sum;
}

/*
 * Return the sum of all column products for the specified square matrix
 */
function sumColumnProducts(matrix) {
    var sum = 0;
    
    for (var i = 0; i < matrix.length; i++) {
        sum += multiplyElemsInCol(matrix, i);
    }
    
    return sum;
}

/*
 * Return the sum of all row sums
 */
function sumRowSums(matrix) {
    var sum = 0;
    
    for (var i = 0; i < matrix.length; i++) {
        sum += sumElemsInRow(matrix, i);
    }
    
    return sum;
}

var matrix = [
  [5, 10, 10, 1, 6, 4, 3, 9, 6, 4],
  [2, 10, 9, 4, 9, 5, 1, 10, 1, 5],
  [1, 3, 7, 3, 10, 7, 5, 1, 7, 5],
  [5, 1, 2, 7, 3, 2, 4, 2, 1, 3],
  [7, 6, 6, 6, 4, 10, 5, 1, 5, 5],
  [3, 1, 10, 5, 8, 1, 9, 10, 2, 7],
  [1, 7, 1, 10, 5, 10, 5, 3, 3, 3],
  [6, 3, 10, 2, 5, 1, 6, 7, 10, 9],
  [1, 7, 9, 6, 2, 7, 10, 1, 9, 6],
  [10, 9, 6, 10, 4, 7, 6, 3, 4, 7]
];

var answer = sumColumnProducts(matrix) + sumRowSums(matrix);

// print the last three digits of the answer
console.log(answer % 1000);
