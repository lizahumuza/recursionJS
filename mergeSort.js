function mergeSort(arr) {
    // Base case
    if (arr.length <= 1) {
      return arr;
    }
  
    // Split the array into two halves
    const mid = Math.floor(arr.length / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);
  
    // Recursively sort the two halves
    const sortedLeft = mergeSort(left);
    const sortedRight = mergeSort(right);
  
    // Merge the two sorted halves
    return merge(sortedLeft, sortedRight);
  }
  
  function merge(left, right) {
    const result = [];
  
    // Merge the two arrays while they both have elements
    while (left.length && right.length) {
      if (left[0] <= right[0]) {
        result.push(left.shift());
      } else {
        result.push(right.shift());
      }
    }
  
    // Concatenate any remaining elements in the left or right array
    return result.concat(left, right);
  }
console.log(mergeSort([4,6,2,1,8])) 