import axios from 'axios';

const videoServiceFactory = () => {
    function uploadVideo(video) {
        return axios.post(`/api/upload_video`, video);
    }

    return { uploadVideo };
};

module.exports = {
    videoServiceFactory
};