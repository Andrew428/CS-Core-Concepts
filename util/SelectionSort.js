/* SelectionSort */

export default class SelectionSort {
    constructor() {}

    swap(arr, i, j) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }

    selectionSort(arr) {
        for (let i = 0; i < arr.length; i++) {
            let min = i;
            for (let j = i + 1; j < arr.length; j++) {
                if (arr[j] < arr[min]) {
                    min = j;
                }
            }
            if (i !== min) {
                this.swap(arr, i, min);
            }
        }
        return arr;
    }
}