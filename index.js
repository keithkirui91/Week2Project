function dayOfTheWeek(){
    var day = document.getElementById("day").value;
    var month = document.getElementById("month").value;
    var year = document.getElementById("year").value;
    
    const c = year.slice(0, 2)
    const y = year.slice(2)
    alert("here it is "+y);
    
    alert("here it is "+c);

};