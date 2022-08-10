import useUser from "../lib/useUser";
import WebCamRecorder from "../components/WebCamRecorder";

export default function Video() {
    const { user, mutateUser } = useUser({
        redirectTo: "/login",
        redirectIfFound: false,
    });

    return <div>
        <span>Subir video aca</span>
        <WebCamRecorder /> 
    </div>;
}