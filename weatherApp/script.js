function app(){
    var city = document.getElementById("in").value;

    let weather = {
        api_key: "22f1479849df939033182c87050daa97",
        url: "https://api.openweathermap.org/data/2.5/weather?q="+city+"&appid=22f1479849df939033182c87050daa97",
        getData: function(){
            fetch(this.url)
            .then((response)=>response.json())
            .then((data)=>this.displayData(data));
        },
        displayData: function(data){
            const details = {temp:temp, humidity:humidity} = data["main"]; 
            const city = {name:name} = data;
            const desc = {description:description, icon:icon} = data["weather"][0];

            document.querySelector("#city").innerHTML = "Weather In "+city.name;
            document.querySelector("#temp").innerHTML = (details.temp-273).toFixed(1)+"<sup>o</sup>C";
            document.querySelector("#icon").src = "https://openweathermap.org/img/wn/"+ desc.icon +"@2x.png";
            document.querySelector("#description").innerHTML =  desc.description;
        }
    }

    weather.getData();
    document.getElementById("in").addEventListener("keyup", function(event){
        if(event=="Enter"){
            weather.getData(); 
        }
       
    })
}


