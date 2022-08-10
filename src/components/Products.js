import Product from "./Product";

function Products({ products }) {
  return (
    <div className="grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:-mt-52 mx-auto">
      {products
        .slice(0, 4)
        .map(({ id, title, price, image, description, rating, category }) => (
          <Product
            key={id}
            id={id}
            title={title}
            price={price}
            image={image}
            description={description}
            category={category}
            rating={rating}
          />
        ))}
      <img
        src="https://links.papareact.com/dyz"
        className="col-span-full"
        alt="dyz"
      />

      <div className="md:col-span-2 ">
        {products
          .slice(4, 5)
          .map(({ id, title, price, image, description, rating, category }) => (
            <Product
              key={id}
              id={id}
              title={title}
              price={price}
              image={image}
              description={description}
              category={category}
              rating={rating}
            />
          ))}
      </div>
      {products
        .slice(5, products.length)
        .map(({ id, title, price, image, description, rating, category }) => (
          <Product
            key={id}
            id={id}
            title={title}
            price={price}
            image={image}
            description={description}
            category={category}
            rating={rating}
          />
        ))}
    </div>
  );
}

export default Products;
