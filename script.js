console.log("Welcome to Spotify");

//Initialize the variables
let songIndex=0;
let audioElement=new Audio('1.mp3');
let masterPlay=document.getElementById('masterPlay');
let myProgessBar=document.getElementById('myProgessBar');
let gif=document.getElementById('gif');

let songs=[
    { songName:"Salam-E-Ishq",filePath:"song/1.mp3",coverPath:"cover/1.jpg"},
    { songName:"Salam-E-Ishq",filePath:"song/1.mp3",coverPath:"cover/1.jpg"},
    { songName:"Salam-E-Ishq",filePath:"song/1.mp3",coverPath:"cover/1.jpg"},
    { songName:"Salam-E-Ishq",filePath:"song/1.mp3",coverPath:"cover/1.jpg"},
    { songName:"Salam-E-Ishq",filePath:"song/1.mp3",coverPath:"cover/1.jpg"},
    { songName:"Salam-E-Ishq",filePath:"song/1.mp3",coverPath:"cover/1.jpg"},
    { songName:"Salam-E-Ishq",filePath:"song/1.mp3",coverPath:"cover/1.jpg"},
    { songName:"Salam-E-Ishq",filePath:"song/1.mp3",coverPath:"cover/1.jpg"},
      
    ]

    console.log(masterPlay);

// audioElement.play();

//handle play/pause click 
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle') ;
        masterPlay.classList.add('fa-pause-circle') ;
gif.style.opacity=1 ;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle') ;
        masterPlay.classList.add('fa-play-circle') ;
        gif.style.opacity=0 ;
    }
})
//Listen to events
audioElement.addEventListener('timeupdate',()=>{
console.log('timeupdate');

//update seekbar
let progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
console.log(progress);
myProgessBar.value = progress;
})



myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime=myProgressBar.value*audioElement.duration/100;
})