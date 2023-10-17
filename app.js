    const title = document.getElementById("title");
    const character = document.getElementById("character");
    const quote = document.getElementById("quote"); 
    const btn = document.getElementById("btn");
    btn.addEventListener("click", getQuote);
    const search = document.getElementById("search");       
    


    //function getQuote(){
    //  fetch("https://animechan.xyz/api/random")
    // .then((response) => response.json())
    // .then((data) => {
    //     title.innerHTML = `Anime: ${data.anime}`
    //     character.innerHTML = `Character: ${data.character}`
    //     quote.innerHTML = `Quote: "${data.quote}"`
    //     console.log(data)
    // });
    // }

    // async function getQuote(){
    //     const response = await fetch("https://animechan.xyz/api/random");
    //     const data = await response.json();
    //     title.innerHTML = `Anime: ${data.anime}`
    //     character.innerHTML = `Character: ${data.character}`
    //     quote.innerHTML = `Quote: "${data.quote}"`
    //     console.log(data)
    // }
    
    function getQuote(){
        fetch(`https://animechan.xyz/api/random/anime?title=${search.value}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        title.innerHTML = `Anime: ${data.anime}`;
        character.innerHTML = `Character: ${data.character}`;
        quote.innerHTML = `Quote: "${data.quote}"`;
      });
    }