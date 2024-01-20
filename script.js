console.log("Welcome to Spotify")

//inizilise the variables

let songindex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterplay = document.getElementById('masterplay');
let myprogressbar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let SongItemPlay = document.getElementsByClassName('SongItemPlay');
let songitem = Array.from(document.getElementsByClassName('songitem'));
let SongListPlayPause = Array.from(document.getElementsByClassName('SongListPlayPause'));


let songs = [
    { songName: "Smells Like Teen Spirit", filePath: "songs/1.mp3", coverPath: "covers/1.jpg" },
    { songName: "Imagine - John Lennon  ", filePath: "songs/2.mp3", coverPath: "covers/2.jpg" },
    { songName: "One - U2 (1992)", filePath: "songs/3.mp3", coverPath: "covers/3.jpg" },
    { songName: "Billie Jean - Michael", filePath: "songs/4.mp3", coverPath: "covers/4.jpg" },
    { songName: "Bohemian Rhapsody - Queen", filePath: "songs/5.mp3", coverPath: "covers/5.jpg" },
    { songName: "Hey Jude - The Beatles", filePath: "songs/6.mp3", coverPath: "covers/6.jpg" },
    { songName: "Like A Rolling Stone", filePath: "songs/7.mp3", coverPath: "covers/7.jpg" },
    { songName: "Creep - Radiohead", filePath: "songs/8.mp3", coverPath: "covers/8.jpg" },
    { songName: "Be My Baby - The Ronettes", filePath: "songs/9.mp3", coverPath: "covers/9.jpg" },
    { songName: "Yesterday - The Beatles", filePath: "songs/10.mp3", coverPath: "covers/10.jpg" }
]


songitem.forEach((element, i) => {
    // console.log(element, i)
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("SongName")[0].innerText = songs[i].songName;
});

//Hangle Play/Pause Click

masterplay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterplay.classList.remove('fa-play');
        masterplay.classList.add('fa-pause');
        gif.style.opacity = 1;
    }
    else {
        audioElement.pause();
        masterplay.classList.remove('fa-pause');
        masterplay.classList.add('fa-play');
        gif.style.opacity = 0;
    }
})



// SongItemPlay.addEventListener('click',()=>{
//     if (audioElement.paused || audioElement.currentTime <= 0) {
//         audioElement.play();
//         SongItemPlay.classList.remove('fa-pause');
//         SongItemPlay.classList.add('fa-play');
       
//     }
//     else {
//         audioElement.pause();
//         SongItemPlay.classList.remove('fa-play');
//         SongItemPlay.classList.add('fa-pause');
      
//     }
// })

//Listen To Events

audioElement.addEventListener('timeupdate', () => {
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100)
    // console.log('song sec', progress)
    myprogressbar.value = progress;

})


myprogressbar.addEventListener('change', () => {
    audioElement.currentTime = myprogressbar.value * audioElement.duration / 100;
})


const makeAllPlays = () => {
    Array.from(document.getElementsByClassName("SongItemPlay")).forEach((element) => {
        element.classList.remove('fa-pause');
        element.classList.add('fa-play');

})
}

// Array.from(document.getElementsByClassName('SongItemPlay')).forEach((element) => {
//     element.addEventListener('click',(e) =>{
//         makeAllPlays();

//     })
// })

Array.from(document.getElementsByClassName("SongItemPlay")).forEach((element) => {
    element.addEventListener('click', (e) => {
        makeAllPlays();
        songindex = parseInt(e.target.id);
        e.target.classList.remove('fa-play');
        e.target.classList.add('fa-pause');
        audioElement.src = `songs/${songindex + 1}.mp3`;
        masterSongName.innerText = songs[songindex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterplay.classList.remove("fa-play")
        masterplay.classList.add("fa-pause")
  

    })
})




document.getElementById('next').addEventListener('click', () => {
    if (songindex > 9) {
        songindex = 0;
    }
    else {
        songindex += 1;
    }
    audioElement.src = `songs/${songindex + 1}.mp3`;
    masterSongName.innerText = songs[songindex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterplay.classList.remove("fa-play")
    masterplay.classList.add("fa-pause")


})


document.getElementById('previous').addEventListener('click', () => {
    if (songindex <= 0) {
        songindex = 0;
    }
    else {
        songindex -= 1;
    }
    audioElement.src = `songs/${songindex + 1}.mp3`;
    masterSongName.innerText = songs[songindex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterplay.classList.remove("fa-play")
    masterplay.classList.add("fa-pause")


})






