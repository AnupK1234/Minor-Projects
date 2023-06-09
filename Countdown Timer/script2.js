const endDate = "9 June 2023 18:38";
document.getElementById("end-date").innerHTML = endDate;
const inputs = document.querySelectorAll("input");

function clock()
{
    
    const end = new Date(endDate);
    const current = new Date();
    
    // we will get the difference in milliseconds
    let diff = (end - current)/1000;   //  converting ms to seconds by / by 1000

    if(diff < 0) return;    // Countdown Ends

    inputs[0].value = Math.floor(diff/3600/24); // Days

    inputs[1].value = Math.floor((diff/3600)%24); // Hours

    inputs[2].value = Math.floor((diff/60)%60); // Minutes
    
    inputs[3].value = Math.floor(diff%60);  // Seconds
}

clock();

/* 
    1day = 24hr
    1hr = 60min
    60min = 3600s
*/

setInterval(clock, 1000);