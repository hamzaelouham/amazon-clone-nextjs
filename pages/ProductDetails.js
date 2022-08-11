import React, { useEffect, useState } from "react";
import Preview from "../components/Preview";
import Details from "../components/Details";
import CartDetails from "../components/CartDetails";
import { useParams } from "react-router-dom";
import "../globle.css";
import axios from "axios";
import Loading from "../components/Loading";
import loadingGif from "./loader.gif";
import { getCountyInfo } from "../redux/actions/getCountryInfo";
import { useSelector, useDispatch } from "react-redux";

function ProductDetails() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(false);

  const { title, price, description, image, rating, category } = product;
  const country = useSelector((state) => state.country.info.country);

  const getProductDetails = async (id) => {
    try {
      setLoading(true);
      const { data } = await axios.get(
        `https://fakestoreapi.com/products/${id}`
      );

      setProduct(data);
      //  console.log(data.rating);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProductDetails(id);

    dispatch(getCountyInfo());
  }, [dispatch, id]);

  return (
    <div className="container mx-auto">
      {loading ? (
        <Loading loadingGif={loadingGif} />
      ) : (
        <div className="grid lg:grid-cols-3 md:grid-cols-1 sm:grid-cols-1 my-6">
          <Preview imageUrl={image} title={title} />
          <Details
            title={title}
            price={price}
            description={description}
            rating={rating === undefined ? null : rating}
            category={category}
            country={country}
          />
          <CartDetails product={product} country={country} />
        </div>
      )}
    </div>
  );
}

export default ProductDetails;
