
const transpose = function(matrix) {
    // Put your solution here
   let newArray = [];
   for(let i = 0; i < matrix[0].length; i++){
    //console.log(matrix[i])
    newArray.push([]);
    for(let j=0; j < matrix.length; j++){
      newArray[i][j] = matrix[j][i]
    }
    // newArray;
   }
   return newArray;
  };

  // Do not edit this function.
  const printMatrix = (matrix) => {
      for (const row of matrix) {
          for (const el of row) {
              process.stdout.write(el + " ");
          }
          process.stdout.write('\n')
      }
  }

  printMatrix(transpose([
    [1, 2, 3, 4],
    [1, 2, 3, 4],
    [1, 2, 3, 4],
    [1, 2, 3, 4]
  ]));

  console.log('----')

  printMatrix(transpose([
    [1, 2],
    [3, 4],
    [5, 6]
  ]));

  console.log('----')

  printMatrix(transpose([
    [1, 2, 3, 4, 5, 6, 7]
  ]));

  const arr = [[1, 5, 6],[2, 0] , [3]];

