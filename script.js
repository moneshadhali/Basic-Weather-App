window.addEventListener("load",()=>{
    let long;
    let lat;

    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition((position)=>{
            long = position.coords.longitude;
            lat = position.coords.latitude;
            // const api = `${proxy}api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=52d64dcfed45f8b90671a581df99781c`;
            // const api = `https://api.openweathermap.org/data/2.5/weather?q=peshawar&appid=52d64dcfed45f8b90671a581df99781c`;
            // const api = `https://api.openweathermap.org/data/2.5/weather?lat=57&lon=-2.15&appid=52d64dcfed45f8b90671a581df99781c`;
            const api = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=52d64dcfed45f8b90671a581df99781c`;
            fetch(api)
                .then((response)=>{
                    return response.json();
                })
                .then(data=>{
                    console.log(data);
                })
        })
    }
})