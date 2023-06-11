import {API_URL} from "./config.js";
const dotenv = require('dotenv');
dotenv.config();
const apiKey = process.env.OMDB_API_KEY

export const film = async function(){
    try{
        const res = await fetch(`${API_URL}?apikey=${apiKey}&i=tt13045890`);
        const data = await res.json();
        // console.log(res,data);
        if(!res.ok) throw new Error(`${data.Error} (${res.status})`);

        let {Title: title,Writer: writer, Country: country,
            Genre: genre,Language: language,Plot: plot,Poster:poster,
            Runtime: runtime,imdbRating: rating  } = data;
        let film = {title, writer,country,genre,language, plot,poster,runtime,rating};
        // console.log(film);
        // console.log(film.rating > 7 ? film.rating : 'Fuck you');
        let detailMovie =
            `<img alt="${film.title}" src="${film.poster}">
             <div class="title" >
                <p>${film.title}</p>
             </div>
             <div class="review">
             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
             </svg>
                ${film.rating}
             </div>`;
        document.getElementById('single-detail').innerHTML = detailMovie;

        document.getElementById('reminder-container').style.backgroundImage = `url(<img src="${film.poster}" alt="${film.title}">)`;
    }
    catch (err){
        alert(err);
    }
};


