//Bubble sort data

const test = [1,9,12,]

const bubbleSort = array => {
    for(let i =0; i < array.length; i++) {
        for(let d = 0; d < array.length - i; d++) {
            if(array[d] > array[d+1]) {
                let temp = array[d];
                array[d] = array[d+1];
                array[d+1] = temp;
            }
        }
    }return array
}

console.log(bubbleSort(test));