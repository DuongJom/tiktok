window.onload = function(){
    for(var i=1;i<=20;i++){
        document.getElementById("body").innerHTML += ' \
        <div> \
            <video controls> \
            <source src="videos/video-'+i.toString()+'.mp4" type="video/mp4"> \
            <source src="videos/video-'+i.toString()+'.ogg" type="video/ogg"> \
            Your browser does not support HTML video. \
            </video> \
            <p>Video '+i.toString()+'</p> \
        </div>';
    }
}