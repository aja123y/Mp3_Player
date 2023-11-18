const music = document.querySelector("#music");
const play = document.querySelector("#play");
const progress = document.querySelector(".length");
// music.play();
music.onloadedmetadata = function(){
    progress.max = music.duration;
    progress.value = music.currentTime;
 }

 
let isplaying = 0;
const playMusic = ("click",() => {
    music.play();
    isplaying = 1;
    play.classList.replace("fa-play","fa-pause");
    play.style.backgroundImage = "radial-gradient(circle ,#4096ae,#1a6d87)";
    setInterval(()=>{
        progress.value = music.currentTime;
    },100);
}); 
const pauseMusic = ("click",()=>{
    isplaying = 0;
    music.pause();
    play.classList.replace("fa-pause","fa-play");
    play.style.backgroundImage = "linear-gradient(to right, #262a2e,#111316)";
});

play.addEventListener("click",()=>{
    if(isplaying)
    {
        pauseMusic();
    }
    else
    {
        playMusic();
    }
});

const  img = document.querySelector("img");
const title = document.querySelector(".title");
const artist = document.querySelector(".artist");


const songs = [
    {
        name : "TUM_PREM_HO",
        title : "Tum prem ho",
        artist : "Aishwarya Anand",
    },
    {
        name : "Agam_Madhurashtakam",
        title : "Agam Madhurashtakam",
        artist : "Agam Aggarwal",
    },
    {
        name : "Har_Har_Mahadev",
        title : "Har Har Mahadev",
        artist : "Parampara Tandon",
    },
    {
        name : "Keejo_Kesari_Ke_Laal",
        title : "Keejo Kesari Ke Laal",
        artist : "Lakhbir Singh",
    },
    {
        name : "Ram_Siya_Ram",
        title : "Ram Siya Ram",
        artist : "Sachet Tandon",
    },
    {
        name : "Shree_Hari",
        title : "Shree Hari",
        artist : "G. Gayathri Devi",
    },
    {
        name : "Shri_Krishna_Govind",
        title : "Shri Krishna Govind",
        artist : "Raaj Aashoo",
    },
    {
        name : "soja_zara",
        title : "Soja Zara",
        artist : "Madhushre",
    },
];


const changSonge = (songs)=>{
    title.textContent = songs.title;
    artist.textContent = songs.artist;
    music.src = "./"+songs.name+".mp3";
    img.src = "./"+songs.name+".jpg";
}

const previous = document.querySelector("#previous");
const next = document.querySelector("#next");


index = 0;
const nextSong = () =>{
    index = ( index + 1) % songs.length;
    changSonge(songs[index]);
    playMusic();
};
 const previousSong = () =>{
    index = (index - 1 + songs.length) % songs.length;
    changSonge(songs[index]);
    playMusic();
 };

 next.addEventListener("click",nextSong);
 previous.addEventListener("click",previousSong);

 progress.onchange = function(){
    music.play();
    music.currentTime = progress.value;
    play.classList.replace("fa-play","fa-pause");
    play.style.backgroundImage = "radial-gradient(circle ,#4096ae,#1a6d87)";
 }

