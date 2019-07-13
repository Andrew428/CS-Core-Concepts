/* BinarySearch */

export default class BinarySearch {
    constructor() {        
    }

    binarySearch(arr, value){
        let start = 0;
        let end = arr.length - 1;
        while(start <= end) {
          let mid = Math.floor((start + end) / 2);
          if(value === arr[mid]) {
            return arr[mid]         // searching found
          }
          if(value > arr[mid]) {            
            start = mid + 1;   // searching the right side of arr
          }
          if(value < arr[mid]) {
            end = mid - 1;     // searching the left side of arr
          }
        }        
        return "Seach value not found in arr";
      }
}


