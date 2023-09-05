import axios from "axios";

const KEY = 'AIzaSyCDL9td-y455Sg59BmHr8wLfmDM2ynxVTc'

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
     params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
     }
})