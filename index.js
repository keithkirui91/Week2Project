
    function dayOfTheWeek(){

    var day = document.getElementById("day").value;
    var month = document.getElementById("month").value;
    var year = document.getElementById("year").value;
    var gender= document.getElementById("gender").value;
    var result = document.getElementById("result").value;

    var c = year.slice(0, 2);
    
    var y = year.slice(2);
    
    if(c === '15' || c==='19' || c==='23')
    {
        weekDayNo = (3 + (y/12) + (y%12) + ((y%12)/(y/12)));
    }
    if(c === '16' || c==='20' || c==='24')
    {
        weekDayNo = (2 + (y/12) + (y%12) + ((y%12)/(y/12)));
    }
    if(c === '17' || c==='21' || c==='25')
    {
        weekDayNo = (0 + (y/12) + (y%12) + ((y%12)/(y/12)));
    }
    if(c === '18' || c==='22' || c==='26')
    {
        weekDayNo = (5 + (y/12) + (y%12) + ((y%12)/(y/12)));
    }

    alert("weekday number is "+weekDayNo)

    if( weekDayNo >6)
    {
        var finalResult = (weekDayNo%7);
    }
    else{
        var finalResult = (weekDayNo);
    }


    alert("Weekday is" +finalResult);

    if(finalResult === 0 || gender === male);{
        alert("YOUR NAME IS KWASI");
    }
    if(finalResult === 0 || gender === female);{
        alert("YOUR NAME IS AKOSUA");
    }
    if(finalResult === 1 || gender === male);{
        alert("YOUR NAME IS KWADWO");
    }
    if(finalResult === 1 || gender === female);{
        alert("YOUR NAME IS ADOWA");
    }
    if(finalResult === 2 || gender === male);{
        alert("YOUR NAME IS KWABENA");
    }
    if(finalResult === 2 || gender === female);{
        alert("YOUR NAME IS ABENAA");
    }
    if(finalResult === 3 || gender === male);{
        alert("YOUR NAME IS KWAKU");
    }
    if(finalResult === 3 || gender === female);{
        alert("YOUR NAME IS AKUA");
    }
    if(finalResult === 4 || gender === male);{
        alert("YOUR NAME IS YAW");
    }
    if(finalResult === 4 || gender === female);{
        alert("YOUR NAME IS YAA");
    }
    if(finalResult === 5 || gender === male);{
        alert("YOUR NAME IS KOFI");
    }
    if(finalResult === 5 || gender === female);{
        alert("YOUR NAME IS AFUA");
    }
    if(finalResult === 6 || gender === male);{
        alert("YOUR NAME IS KWAME");
    }
    if(finalResult === 6 || gender === female);{
        alert("YOUR NAME IS AMA");
    }

    

};