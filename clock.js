var inc = 1000

clock()
function clock() {
    let date = new Date();

    let Hours = ((date.getHours() +11) % 12 + 1);
    let Minutes = date.getMinutes();
    let Seconds = date.getSeconds();

    let hours = Hours * 30;
    let minutes = Minutes * 6;
    let seconds = Seconds * 6

    document.querySelector(".hour").style.transform = `rotate(${hours}deg)`;
    document.querySelector(".minute").style.transform = `rotate(${minutes}deg)`;
    document.querySelector('.seconde').style.transform = `rotate(${seconds}deg)`
}

setInterval(clock , inc)


function clock2() {

    let date = new Date();

    let h = date.getHours();
    let min = date.getMinutes();
    let s = date.getSeconds();

    h = (h < 10) ? "0" + h : h;
    min = (min < 10) ? "0" + min : min;
    s = (s < 10) ? "0" + s : s;

    document.querySelector(".setTime").innerHTML = h + " : " + min;
    document.querySelector(".second2").innerHTML = s;

    let d = date.getDate()
    let m = parseInt((date.getMonth() + 1))
    let y = date.getFullYear();

    d = (d < 10) ? "0" + d : d;
    m = (m < 10) ? "0" + m : m;
    y = (y < 10) ? "0" + y : y;

    document.querySelector(".setDate").innerHTML = d + " / " + m + " / " + y;






    setInterval(clock2, 1000)
}
clock2()

class Theme{
    constructor(){

        this.moon = document.querySelector(".moon")
        this.moon.addEventListener(
            'click',
            () => {
                this.selectTheme("darktheme")
            }
        )
        this.sunny = document.querySelector(".sunny")
        this.sunny.addEventListener(
            'click',
            () => {  
                this.selectTheme("lighttheme")
            }
        )
        this.selectTheme(localStorage.getItem("darkTheme"))
    }
    selectTheme(theme){
        if(theme == "darktheme"){
            this.sunny.style.display ="block";
            this.moon.style.display = "none"
            document.body.style.backgroundColor = "#222629";   
            document.querySelector(".clock").style.border = "3px solid  white";
            document.querySelector(".hour").style.backgroundColor = "white";
            document.querySelector(".minute").style.backgroundColor = "white";
            document.querySelector(".clock2").style.border = "3px solid  white";
            document.querySelector(".setTime").style.color = "white";
            document.querySelector(".second2").style.color = "white";
            document.querySelector(".setDate").style.color = "white";



        }else if(theme == "lighttheme"){
            this.sunny.style.display = "none";
            this.moon.style.display = "block";
            document.body.style.backgroundColor = "#edf2f7";
            document.querySelector(".clock").style.border = "3px solid  black";
            document.querySelector(".hour").style.backgroundColor = "black";
            document.querySelector(".minute").style.backgroundColor = "black";
            document.querySelector(".clock2").style.border = "3px solid  black";
            document.querySelector(".setTime").style.color = "black";
            document.querySelector(".second2").style.color = "black";
            document.querySelector(".setDate").style.color = "black";

        }
        localStorage.setItem("darkTheme", theme)
    }
}
onload = new Theme();