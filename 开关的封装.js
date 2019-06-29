
           function switchOnOff(buttonId,valAddition){  //第一个参数放控制按钮的id，第二个放开关的默认状态
               var valaddition = valAddition;//true or false
               document.getElementById(buttonId).onclick = function(){
                   if(valaddition == false) {
                        console.log('状态\:关');
                        console.log('状态\:灯黑');
                        valaddition = true;
                   }else{
                    console.log('状态\:开');
                    console.log('状态\:灯亮');
                    valaddition = false;
                   }
               }
           }     