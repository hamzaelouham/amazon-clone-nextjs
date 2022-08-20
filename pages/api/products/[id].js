import { ConnectBD } from "../../../database";
import Product from "../../../models/Product";

export default async (req, res) => {
  const id = req.query.id;

  try {
    await ConnectBD();
    const product = await Product.findById(id);

    res.status(200).json(product);
  } catch (error) {
    console.log(error);
    res.redirect(201, "/");
  }
};
