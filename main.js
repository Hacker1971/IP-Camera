 function stremVideo(){
    const video = document.querySelector('video');
    const option = { video : true};
    navigator.mediaDevices.getUserMedia(option)
    .then(stream => video.srcObject= stream)
    .catch(err => console.error(err));
    
 }

 function stopVideo() {
    const video = document.querySelector('video');
    video.pause();
    video.srcObject = null;
    this.stream.getTracks().forEach(track => track.stop());
}