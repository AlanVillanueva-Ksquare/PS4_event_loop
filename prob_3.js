function functionsAreFirstClass(arr,func){
    while (!func(arr[0])&&arr.length!==0){//while the passed function is false with the first element of the array and the has at least one element...
        arr.shift() //delete first element of the array
    }
    return arr
}
