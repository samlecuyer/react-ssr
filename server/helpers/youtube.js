//-----------------------------------------------------------------------------------
//GET YOUTUBE playlist
/*Input: Artist Name
  Output: videosArray with videoId
*/
import Promise from 'bluebird';
import { youtube_key } from './config';
let request = Promise.promisify(require('request'));

export default function(query){
  let artist = query.split(' ').join('+');
  let url = 'https://www.googleapis.com/youtube/v3/search?part=snippet&q=' + artist + '&type=video&videoEmbeddable=true&key=' + youtube_key;

  return request(url).then(function(result){
    return result;
  })
}
