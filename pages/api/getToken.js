export default function handler(req, res) {
  const {token, userLevel} = req.cookies;
  res.statusCode = 200;
  res.json({token: token, userLevel: userLevel});
}
