function randomNumber(n,m){
    return Math.floor(Math.random()*(m-n+1)+n);
    
  }
  var randomColor16 = function(){
      var arr = ['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f'];
     var a =[];
     color='#';
    for(i=0;i<6;i++){
        
        a[i]=  arr[randomNumber(0,arr.length)];
        color+=a[i];
    }
      // var a0 = arr[randomNumber(arr.length)];
      // var a1 = arr[randomNumber(arr.length)];
      // var a2 = arr[randomNumber(arr.length)];
      // var a3 = arr[randomNumber(arr.length)];
      // var a4 = arr[randomNumber(arr.length)];
      // var a5 = arr[randomNumber(arr.length)];
      
     
      return color;
  }//获得16位颜色