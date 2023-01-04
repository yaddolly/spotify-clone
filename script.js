console.log("Welcome to spotify");

//initialize the variables
let songindex=0;
let audioElement= new Audio('songs/1.mp3');
let masterplay=document.getElementById('masterplay');
let myprogressBar=document.getElementById('myprogressBar');
let gif=document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let SongItems=Array.from(document.getElementsByClassName('SongItem'));


let songs=[
     {songName:"Jhoome Jo Pathaan ",filepath:"songs/1.mp3",coverPath:"covers/1.jpg"},
     {songName:"Aashiqui",filepath:"songs/2.mp3",coverPath:"covers/2.jpg"},
     {songName:"Govinda Naam Mera ",filepath:"songs/3.mp3",coverPath:"covers/3.jpg"},
     {songName:"Dil Jisse Zinda Hain",filepath:"songs/4.mp3",coverPath:"covers/4.jpg"},
     {songName:"Saath Hum Rahein",filepath:"songs/5.mp3",coverPath:"covers/5.jpg"},
     {songName:"Sun Zara",filepath:"songs/6.mp3",coverPath:"covers/6.jpg"},
     {songName:"Sahi Galat",filepath:"songs/7.mp3",coverPath:"covers/7.jpg"},
     {songName:"Bas Tujhse Pyaar Ho",filepath:"songs/8.mp3",coverPath:"covers/8.jpg"},
     {songName:"Aashiqui",filepath:"songs/2.mp3",coverPath:"covers/9.jpg"},
   ]
  
   SongItems.forEach((element, i)=>{
    // console.log(element, i);
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
     })
// audioElement.play();

//Handle play/pause click
masterplay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0)
    {
        audioElement.play();
        masterplay.classList.remove('fa-circle-play');
        masterplay.classList.add('fa-circle-pause');
        gif.style.opacity= 1;
    }
    else{ 
        audioElement.pause();
        masterplay.classList.remove('fa-circle-pause');
        masterplay.classList.add('fa-circle-play');
        gif.style.opacity= 0;
     }
})

//listen to events
audioElement.addEventListener('timeupdate',()=>{
    
    //update seekbar
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    myprogressBar.value=progress;
})

    myprogressBar.addEventListener('change',()=>{
    audioElement.currentTime=myprogressBar.value * audioElement.duration/100;
})


 const makeAllPlays = ()=>{
       Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
       element.classList.remove('fa-circle-pause');
       element.classList.add('fa-circle-play');
 })

}

    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        // console.log(e.target);
        songindex = parseInt(e.target.id);
        makeAllPlays();
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        masterSongName.innerText = songs[songindex].songName;
        audioElement.src = `songs/${songindex+1}.mp3`;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity= 1;
        masterplay.classList.remove('fa-circle-play');
        masterplay.classList.add('fa-circle-pause');

    })
 })

 //for next and previous button

 document.getElementById(`next`).addEventListener('click',  ()=>{
    if(songindex>=8){
    songindex =0;
 }
 else{
    songindex += 1;
 }
 audioElement.src = `songs/${songindex+1}.mp3`;
 masterSongName.innerText = songs[songindex].songName;
 audioElement.currentTime = 0;
 audioElement.play();
 masterplay.classList.remove('fa-circle-play');
 masterplay.classList.add('fa-circle-pause');

})

document.getElementById(`previous`).addEventListener('click',  ()=>{
    if(songindex<=0){
    songindex = 0;
 }
 else{
    songindex -= 1;
 }
 audioElement.src = `songs/${songindex+1}.mp3`;
 masterSongName.innerText = songs[songindex].songName;
 audioElement.currentTime = 0;
 audioElement.play();
 masterplay.classList.remove('fa-circle-play');
 masterplay.classList.add('fa-circle-pause');

})