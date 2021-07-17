
    
    function dayOfTheWeek(){

        var date = new Date(document.getElementById("date").value);
        var gender= document.getElementById("gender").value;
        
        var s = date.getDay();
    

    if(s === 0 && gender === 'M'){
        alert("YOUR NAME IS KWASI");
        alert("SUNDAY");
    }
    if(s === 0 && gender === 'F'){
        alert("YOUR NAME IS AKOSUA");
        alert("SUNDAY");
    }
    if(s === 1 && gender === 'M'){
        alert("YOUR NAME IS KWADWO");
        alert("MONDAY");
    }
    if(s === 1 && gender === 'F'){
        alert("YOUR NAME IS ADOWA");
        alert("MONDAY");
    }
    if(s === 2 && gender ==='M'){
        alert("YOUR NAME IS KWABENA");
        alert("TUESDAY");
    }
    if(s === 2 && gender === 'F'){
        alert("YOUR NAME IS ABENAA");
        alert("TUESDAY");
    }
    if(s === 3 && gender === 'M'){
        alert("YOUR NAME IS KWAKU");
        alert("WEDNESDAY");
    }
    if(s === 3 && gender === 'F'){
        alert("YOUR NAME IS AKUA");
        alert("WEDNESDAY");
    }
    if(s === 4 && gender === 'M'){
        alert("YOUR NAME IS YAW");
        alert("THURSDAY");
    }
    if(s === 4 && gender === 'F'){
        alert("YOUR NAME IS YAA");
        alert("THURSDAY");
    }
    if(s === 5 && gender ===  'M'){
        alert("YOUR NAME IS KOFI");
        alert("FRIDAY");
    }
    if(s === 5 && gender === 'F'){
        alert("YOUR NAME IS AFUA");
        alert("FRIDAY");
    }
    if(s === 6 && gender === 'M'){
        alert("YOUR NAME IS KWAME");
        alert("SATURDAY");
    }
    if(s === 6 && gender === 'F'){
        alert("YOUR NAME IS AMA");
        alert("SATURDAY");
    }

};
