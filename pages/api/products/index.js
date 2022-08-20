import { ConnectBD } from "../../../database/";
import Product from "../../../models/Product";

export default async (req, res) => {
  try {
    await ConnectBD();
    const product = await Product.find();

    res.status(200).json(product);
  } catch (e) {
    res.status(500).json({ ConnectBD: false });
    console.log(e);
  }
};
