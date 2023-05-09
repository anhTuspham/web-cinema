import dotenv from 'dotenv';
dotenv.config();

const apiKey = process.env.OMDB_API_KEY;

export const wrapper = function(elementItem){
    const wraps = document.querySelectorAll(elementItem);
    wraps.forEach(wrap =>{
        wrap.addEventListener('click',e => {
            e.preventDefault();
            wraps.forEach(container =>{
                container.classList.remove('selected');
            });
            wrap.classList.add('selected');
        })
    })
}
// Test api
const showFilm = async function(){
    try{
        const res = await fetch(`http://www.omdbapi.com/?t=Her&plot=full&apikey=${apiKey}`);
        const data = await res.json();
        console.log(res,data);
        if(!res.ok) throw new Error(`${data.Error} (${res.status})`);
    }
    catch (err){
        alert(err);
    }
};
showFilm();