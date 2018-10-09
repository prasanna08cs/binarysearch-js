let array=[1,2,4,5,6,7];

let key =7;

  function search(array,key){
         console.log(...array);
     if(!array.length){
       console.log(array.lengh);
       console.log('end of array'+key+'not found');
       return;
     }
    let mid = Math.floor(array.length/2);
     console.log('mid ' +mid);
    
    if(array[mid] == key){
      console.log('key found @ ' +mid + 'position');
      return;
    } else if(key >array[mid]){
       console.log('key > mid');
      search(array.slice(mid+1,array.length),key);
    }
    else {
             console.log('key < mid'+array.slice(0,mid));
      search(array.slice(0,mid),key);
    }
    
       
  }
search(array,key);



