// web page where user is prompted to enter their last.fm username in order to view current song playing
// refresh to show new song
$(window).load(function() {
var username = prompt('Please enter your last.fm username');



/* Create a LastFM object */
var lastfm = new LastFM({
  apiKey    : 'dce9f37981e80ccbbd09423180845092',
  apiSecret : 'd6dcc91e2d57a5090b2025a4513f26ef'
});

//connects to user profile

function currentTrack() {
lastfm.user.getRecentTracks({user: username}, {success: function(data){ 
//outputs current track and artist
 document.getElementById("info").innerHTML = data.recenttracks.track[0].name + ' - ' +  data.recenttracks.track[0].artist['#text'];



// get lyrics using musixmatch
$.getJSON("http://api.musixmatch.com/ws/1.1/matcher.track.get?apikey=105305da3eb9047cf95bcd5d2c38672a&q_track=" +
    data.recenttracks.track[0].name + "&q_artist=" +
    data.recenttracks.track["0"].artist["#text"],
    function(data) {
        // url of lyrics
        var js = data.message.body.track.track_share_url;
        var xhr = new XMLHttpRequest();
        xhr.open('GET', js, true);
        xhr.responseType = 'document';
        xhr.send();
        xhr.onload = function(e) {
            var doc = e.target.responseXML;
            var lyrics = doc.getElementsByClassName("mxm-lyrics__content")[0].innerHTML + "<br>" +
                doc.getElementsByClassName("mxm-lyrics__content")[1].innerHTML;
            lyrics = lyrics.replace(/\n/g, "<br>");
            document.getElementById('lyrics').innerHTML = '<br><center><h2>Lyrics:</h2><br>' + lyrics + '<br><br>';

        };

    });


}, error: function(code, message){
  /* Show error message. */
 document.getElementById("info").innerHTML = 'Nothing Currently Playing';

}});
};


function refreshTrack(){
    //setInterval(currentTrack, 300);
    
    currentTrack();
};

refreshTrack();



                
            
        
});