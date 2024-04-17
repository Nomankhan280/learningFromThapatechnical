const enddate = "27 March 2024 01:24 PM";
document.getElementById("clock").innerHTML = enddate;
const inputs = document.querySelectorAll("input");

function clock(){
    const end = new Date(enddate)
    const now = new Date()
    const diff = (end - now)/1000;
    if (diff<0) {
        return diff
    }
    inputs[0].value = Math.floor((diff/3600/24))
    inputs[1].value = Math.floor((diff/3600)%24)
    inputs[2].value = Math.floor((diff/60)%60)
    inputs[3].value = Math.floor((diff) % 60)



    console.log(diff/60%60);
    console.log();

    // console.log(diff);
    
}


setInterval(
    ()=>{
        clock()
    },1000
)