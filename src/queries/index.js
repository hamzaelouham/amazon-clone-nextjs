export const getProductById = async (id) =>
  await (
    await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products/${id}`)
  ).json();

export const getProducts = async () =>
  await (await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products`)).json();
