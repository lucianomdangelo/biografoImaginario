import { withSession, saveSession } from "../../lib/session";

import nextConnect from 'next-connect'; /// to use middlewares in nextjs
import multer from 'multer'; // to manage the video file on the request

// config multer
const upload = multer({
  storage: multer.diskStorage({
    destination: '/tmp/uploads',
    filename: (req, file, cb) => cb(null, file.originalname),
  }),
});

// "handling erros"
const apiRoute = nextConnect({
  onError(error, req, res) {
    res.status(501).json({ error: `Sorry something Happened! ${error.message}` });
  },
  onNoMatch(req, res) {
    res.status(405).json({ error: `Method '${req.method}' Not Allowed` });
  },
});

apiRoute.use(upload.single('video')); // using the multer to save the video

/// TODO: get information about the user, the object and the video and save it to DB.
apiRoute.post((req, res) => {
  res.status(200).json({ data: 'success' });
});

export default apiRoute;

export const config = {
  api: {
    bodyParser: false, // Disallow body parsing, consume as stream
  },
};






