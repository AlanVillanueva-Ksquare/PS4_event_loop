function destroyer(){
    let array=arguments[0] //the array is the first argument
    const n=arguments.length //number of arguments

    for (let i=1;i<n;i++){ //iterate through all the arguments besides the array in the first space of the array
        const tobeDestroyed=arguments[i] //number to be destroyed
        while(array.includes(tobeDestroyed)){ //while the tobedestroyed number is still in the array...
            for (let j=0;j<array.length;j++){ //iterate through the array
                if (array[j]===tobeDestroyed){ //if we find the number we want to destroy in the array...
                    array.splice(j,1) //we take the number out of the array
                    break

                }
            }
        }
    }
    return array
}
