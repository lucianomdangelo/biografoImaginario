import { withIronSession } from "next-iron-session";

function withSession(handler) {
  return withIronSession(handler, {
    password: process.env.SECRET_COOKIE_PASSWORD,
    cookieName: "app_auth_session",
    cookieOptions: {
      // the next line allows to use the session in non-https environments like
      // Next.js dev mode (http://localhost:3000)
      secure: process.env.NODE_ENV === "production",
    },
  });
}

async function saveSession(user, request) {
  request.session.set("user", user);
  await request.session.save();
}

module.exports = { withSession, saveSession };
