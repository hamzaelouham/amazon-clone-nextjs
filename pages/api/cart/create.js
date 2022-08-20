//import cookie from "cookie";

export default (req, res) => {
  if (req.method === "POST") {
    console.log(req.body);

    res.status(200).json({ message: "hello from create cart" });
  }
};
