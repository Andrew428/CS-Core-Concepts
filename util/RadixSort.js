/* RadixSort */

export default class RadixSort {
    constructor() {        
    }

    getMax(arr) {
        let max = 0;
        for (let num of arr) {
            if (max < num.toString().length) {
                max = num.toString().length
            }
        }
        return max
    }

    getPosition(num, place){
        return  Math.floor(Math.abs(num)/Math.pow(10,place))% 10
    }

    radixSort(arr) {
        const max = this.getMax(arr); // length of the max digit in the array    
        for (let i = 0; i < max; i++) {
            let buckets = Array.from({ length: 10 }, () => [ ]); // creating 10 empty arrays
            for (let j = 0; j < arr.length; j++) {
                let position = this.getPosition(arr[ j ], i);
                buckets[position].push(arr[ j ]); // pushing into buckets
            }
            arr = [ ].concat(...buckets); 
        }
        return arr;
    }
}


