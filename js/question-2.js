 const url = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=9339867cf32440a391721b99037e384c";

const contCont = document.querySelector(".content");

async function getGames() {
    
    try {
    const response = await fetch(url);
    const data = await response.json();
    const info = data.results;
 
    contCont.innerHTML ="";
    for (let i = 0; i < info.length; i++) {
        console.log(info[i].name);
        console.log(info[i].rating);
        console.log(info[i].tags.length);
        if (i === 7) {
            break;
        }
        contCont.innerHTML += `<div class = "apiCall">
        Name of Game = ${info[i].name}. 
        Rating= ${info[i].rating}.
        Number of tags = ${info[i].tags.length}.
        </div>`
    }

    }
    catch (error) {
        contCont.innerHTML = "Error Occured";
    }
}

getGames();

