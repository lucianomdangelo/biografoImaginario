import axios from 'axios';

const videoServiceFactory = () => {
    function uploadVideo(video) {
        const formData = new FormData();
        formData.append('inputFile', video);
        return axios.post(`/api/upload_video`, formData);
    }

    return { uploadVideo };
};

module.exports = {
    videoServiceFactory
};