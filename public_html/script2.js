//
////var MusixmatchApi = require('../javascript-client/src/index.js');
//var MusixmatchApi = requirejs(['/javascript-client/src/index.js'], function(index){} );
//var defaultClient = MusixmatchApi.ApiClient.instance;
//var key = defaultClient.authentications['key'];
//key.apiKey = "105305da3eb9047cf95bcd5d2c38672a"; // {String}
//
//var albumId= 14250417; // {String}
//var opts = { 
//    'format': "jsonp", // {String} output format: json, jsonp, xml.
//    'callback': "callback" // {String} jsonp callback
//};
//
//var callback = function(error, data, response) {
//    if (error) {
//        console.error(error);
//    } else {
//        console.log('API called successfully. Returned data:' ,JSON.stringify(data,null,2));
//    }
//};
//(new MusixmatchApi.AlbumApi()).albumGetGet(albumId, opts, (error, data, response) => {
//    callback(error, data, response, "albumGetGet"); 
//}
//);



//var MusixmatchApi = require('javascript-client/src/index.js');
//var defaultClient = MusixmatchApi.ApiClient.instance;
//var key = defaultClient.authentications['key'];
//key.apiKey = "YOUR_API_KEY"; // {String} 
//var opts = {
//    format: "json", // {String} output format: json, jsonp, xml.
//};
//trackId= 15445219; // {number}
//(new MusixmatchApi.TrackApi()).trackGetGet(trackId, opts, (error, data, response) => {
//    if (error) {
//        console.error(error);
//    } else if(response.text) {
//        data = JSON.parse(response.text);
//        console.log('Returned data:\n%s' ,JSON.stringify(data,null,2));
//    }
//    else {
//        throw new Error('bad response')   
//    }
//} );





