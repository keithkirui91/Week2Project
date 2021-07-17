
    
    function dayOfTheWeek(){
        confirm("Continue")

        var date = new Date(document.getElementById("date").value);
        var gender= document.getElementById("gender").value;
        
        var s = date.getDay();
    

    if(s === 0 && gender === 'M'){
        document.write("YOUR NAME IS KWASI  ");
        document.write("You were born on a SUNDAY");
    }
    if(s === 0 && gender === 'F'){
        document.write("YOUR NAME IS AKOSUA  ");
        document.write("You were born on a SUNDAY");
    }
    if(s === 1 && gender === 'M'){
        document.write("YOUR NAME IS KWADWO  ");
        document.write("You were born on a MONDAY");
    }
    if(s === 1 && gender === 'F'){
        document.write("YOUR NAME IS ADOWA  ");
        document.write("You were born on a MONDAY");
    }
    if(s === 2 && gender ==='M'){
        document.write("YOUR NAME IS KWABENA  ");
        document.write("You were born on a TUESDAY");
    }
    if(s === 2 && gender === 'F'){
        document.write("YOUR NAME IS ABENAA  ");
        document.write("You were born on a TUESDAY");
    }
    if(s === 3 && gender === 'M'){
        document.write("YOUR NAME IS KWAKU  ");
        document.write("You were born on a WEDNESDAY");
    }
    if(s === 3 && gender === 'F'){
        document.write("YOUR NAME IS AKUA  ");
        document.write("You were born on a WEDNESDAY");
    }
    if(s === 4 && gender === 'M'){
        document.write("YOUR NAME IS YAW  ");
        document.write("You were born on a THURSDAY");
    }
    if(s === 4 && gender === 'F'){
        document.write("YOUR NAME IS YAA  ");
        document.write("You were born on a THURSDAY");
    }
    if(s === 5 && gender ===  'M'){
        document.write("YOUR NAME IS KOFI  ");
        document.write("You were born on a FRIDAY");
    }
    if(s === 5 && gender === 'F'){
        document.write("YOUR NAME IS AFUA  ");
        document.write("You were born on a FRIDAY");
    }
    if(s === 6 && gender === 'M'){
        document.write("YOUR NAME IS KWAME  ");
        document.write("You were born on a SATURDAY");
    }
    if(s === 6 && gender === 'F'){
        document.write("YOUR NAME IS AMA  ");
        document.write("You were born on a SATURDAY");
    }

};
