console.log("Welcome to spotify")
//intialize the variable
let songIndex=0;
let audioElement = new Audio('song.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let songs=[
    {songName:"sanam teri kasam " ,filePath:"song.mp3",coverPath:"covers/1.jpg"},
    {songName:"sanam teri kasam " ,filePath:"song.mp3",coverPath:"covers/1.jpg"},
    {songName:"sanam teri kasam " ,filePath:"song.mp3",coverPath:"covers/1.jpg"},
    {songName:"sanam teri kasam " ,filePath:"song.mp3",coverPath:"covers/1.jpg"},
    {songName:"sanam teri kasam " ,filePath:"song.mp3",coverPath:"covers/1.jpg"},
    {songName:"sanam teri kasam " ,filePath:"song.mp3",coverPath:"covers/1.jpg"},
]

//audioElements.play();
//handle play/ pause click
masterPlay.addEventListener('click',()=>{
    if (audioElement.paused ||audioElement.currentTime<=0)
    {
        audioElement.play();
    }
    // setTimeout(function() {
    //     audioElement.pause();
    // }, 2000);
     // 1000 milliseconds = 1 second
    
})

// masterPlay.addEventListener('click',()=>{
//     if (audioElement.played ||audioElement.currentTime>0)
//     {
//         audioElement.pause();
//     }
// })

//Listen to events
// myProgressBar.addEventListener('timeupdate',()=>{
//     console.log('timeupdate');
//     //update seekbar
// })