function tenZero(number){
    if(number<10){
        number = '0'+ number;
    }
    return number;
}
function getTime(){
    let dateAll = new Date();
    let dates = new Object();
    dates.year = dateAll.getFullYear();
    dates.month = dateAll.getMonth()+1;
    dates.date = dateAll.getDate();
    dates.hour = dateAll.getHours();
    dates.minute= dateAll.getMinutes();
    dates.second = dateAll.getSeconds();
    dates.month=tenZero(dates.month);
    dates.date=tenZero(dates.date);
    dates.hour=tenZero(dates.hour);
    dates.minute=tenZero(dates.minute);
    dates.second=tenZero(dates.second);
    dates.total = function(){
        return (dates.year+'-'+dates.month+'-'+dates.date+' '+dates.hour+':'+dates.minute+':'+dates.second);

    }
return dates.total();
}