        var setTime;
        var returnTime = {};//对象
        //returnTime.way1实现利用浏览器的input标签输入时间然后将结果保存在全局变量setTime中;
        returnTime.way1 = function(btnID,inputID){
            var btn = document.getElementById(btnID);
            btn.onclick=function(){
                var keep =document.getElementById(inputID);
                setTime = keep.value;
                // returnTime.way2(setTime);
            }
            
        }
        //returnTime.way2实现输入一个时间点便返回距现在相差时间
        returnTime.way2 =function(inputDate){
                               
                // console.log(inp);
                // console.log(inp.value);
                // return new Date(inp.value);
                var date1 = new Date();
                // console.log(date);
                var time1 = date1.getTime();
                // console.log(time1);
                // var date1 = new Date('2019-06-29 09:00:00');
                var date2 = new Date(inputDate);
                // console.log(date1);
                var time2 = date2.getTime();
                // console.log(time2);
                var timebetween =Math.abs(time1 - time2);
                // console.log(timebetween);
                var seconds = timebetween/1000;     //秒数
                // var reSeconds = timebetween%1000;
                // console.log(reSeconds);
                var minutes = seconds/60;
                var reseconds = Math.floor(seconds%60);
                var reminutes = Math.floor(minutes%60);
                var hours = minutes/60; 
                var rehours = Math.floor(hours%24); 
                var days = Math.floor(hours/24);
                // console.log('相差'+days+'天');  //差天数
                // console.log(rehours+'个小时');   //余小时
                // console.log(reminutes+'分钟'); //余分钟
                // console.log(+reseconds+'秒');   //余秒数
                console.log('相差'+days+'天'+rehours+'个小时'+reminutes+'分钟'+reseconds+'秒'); 
                alert('相差'+days+'天'+rehours+'个小时'+reminutes+'分钟'+reseconds+'秒');
        }    
       
        // returnTime.way1("subMit","setTime");    //第一个是提交按钮的id，第二个是input设置时间的按钮id
        // console.log(typeof(returnTime.way));
        // 通过调用对象returnTime的way1和way2方法实现计算两个时间相差点
        var btnResult = document.getElementById("showResult");
        returnTime.way1("subMit","setTime");    //先提交时间
        btnResult.onclick= function(){           //然后返回答案
            returnTime.way2(setTime);
        }