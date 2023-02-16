        //max case//
        function maximum(){
            let array = ['19','22','19','24','20','25','26','24','25','24'];
            let max= array[0];
                for(let i=0;i<array.length;i++){
                    if(array[i]>max){
                        max= array[i];
                    }
                }
                console.log(`The largest element in array is ${max}`);
               }
               maximum();

    
             //average case//
               function avg(){
                let sum=0;
                let array=[1,2,3];
                for(let i=0;i<array.length;i++){
                    sum+=array[i];
                }
                console.log(`The average is ${sum/array.length}`);
            }
            avg();
    
            //sort case//
            let ages = ['19','22','19','24','20','25','26','24','25','24'];
            console.log(ages.sort());
            
            //median case//
                function median(arr){
                let len = arr.length;
                let mid = Math.floor(len/2);
                if(len%2!=0){
                    return arr[mid];
                }else{
                    return (arr[mid-1]+arr[mid])/2.0;
                }
                }
                console.log(median(['19','22','19','24','20','25','26','24','25','24']));