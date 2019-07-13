/* QuickSort */

export default class QuickSort {
    constructor() {        
    }

    quickSort = (arr) => {
        if(arr.length <=1){
            return arr;
        }
        let pivotPosition = Math.floor(arr.length/2);
        let pivotValue = arr[pivotPosition];
        let less = [],
            more = [],
            same = [];
        for (let i=0; i < arr.length; i++){
            if(arr[i] === pivotValue){
                same.push(arr[i]);                    
            }else if (arr[i] > pivotValue) {
                more.push(arr[i]); 
            }else {
                less.push(arr[i]); 
            }
        }
        return this.quickSort(less).concat(same, this.quickSort(more));
    }


}


