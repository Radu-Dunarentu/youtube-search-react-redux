/**
 * Created by Radu on 25.06.2017.
 */
import key from '../../../api_key';
export function youtubeSearch(query, maxResults = 5, part = 'snippet') {
  const url = `https://www.googleapis.com/youtube/v3/search?key=${key}&&part=${part}&&q=${query}&&maxResults=${maxResults}`;
  return fetch(url);
}
