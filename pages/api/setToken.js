import cookie from "cookie";

export default function handler(req, res) {
  res.setHeader(
    "Set-Cookie",
    cookie.serialize("token", req.body.token, {
      httpOnly: true,
    })
  );
  res.setHeader(
    "Set-Cookie",
    cookie.serialize("userLevel", req.body.userLevel)
  );
  res.statusCode = 200;
  res.json({token: req.body.token, userLevel: req.body.userLevel});
}
