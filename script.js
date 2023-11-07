var div=document.createElement('div');
div.style.textAlign='center';
var input=document.createElement('input');
input.setAttribute('type','text');
input.setAttribute('id','city');
input.setAttribute('placeholder','Enter Country name');

var button=document.createElement('button');
button.setAttribute('type','button');
button.innerHTML='Get Weather';
button.addEventListener('click',getWeather);
let temp=document.createElement('div');
temp.setAttribute('id','temp');
let wind=document.createElement('div');
wind.setAttribute('id','wind');
let description=document.createElement('div');
description.setAttribute('id','description');
div.append(input,button,temp,wind,description);
document.body.append(div);

async function getWeather(){
    try{
    let weather=document.getElementById('city').value;   
    let url=`https://goweather.herokuapp.com/weather/${weather}`;   

    let res=await fetch(url);  
    let res1=await res.json();     

    console.log(res1.temperature);   
    temp.innerHTML=`Temperature: ${res1.temperature}`;
    console.log(res1.wind);   
    wind.innerHTML=`Wind: ${res1.wind}`;
    console.log(res1.description);   
    description.innerHTML=`Description: ${res1.description}`;
    
        
    }
    catch(error){
        console.log('Weather not found!!!')
    }
}