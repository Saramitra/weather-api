var getweatherbtn = document.querySelector("#x-btn");
var outputres = document.getElementById("container");
var apikey = "dbee732f0b3a278beaa3583e8f1c3f42";
var output=
{
    temperature: " ",
    maxtemp: " ",
    mintemp: " ",
};
var url="https://api.openweathermap.org/data/2.5/weather?q="
const newLocal = "&APPID=apikey";
function getcityandcount()
{
    return url+city_name+","+country_name+newLocal;
}
function outputweather()
{   
    var city_name = document.getElementById("enterurcity").value;
    var country_name = document.getElementById("enterurcountry").value;
    fetch(getcityandcount(city_name,country_name))
    .then(response=>response.json())
    .then(response=>
        {
            if(response.message==="city not found")
            {
                outputres.innerText = message;
            }
            else
            {
                output.temperature = response.main.temp+"°F";
                output.maxtemp = response.main.temp_max+"°F";
                output.mintemp = response.main.temp_min+"°F";
                outputres.innerText = output.temperature +"\n"+ output.mintemp +"\n"+ output.maxtemp;
            }
        }
    )
}
getweatherbtn.addEventListener("click", function()
{
    outputweather();
})
