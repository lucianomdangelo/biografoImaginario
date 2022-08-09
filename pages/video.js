import useUser from "../lib/useUser";
import WebCamRecorder from "../components/WebCamRecorder";
import {videoServiceFactory} from "../clientServices/videoService";

const videoService = videoServiceFactory();

export default function Video() {
    const { user, mutateUser } = useUser({
        redirectTo: "/login",
        redirectIfFound: false,
    });

    const send = (video) => {
        videoService.uploadVideo(video);
    }

    return <div>
        <span>Subir video aca</span>
        <WebCamRecorder sumbit={send}/>
    </div>;
}