export default async function Home() {
  // const res = await fetch("http://localhost:3000/api/products", {
  //   cache: "no-store",
  // });
  // const data = await res.json();

  return (
    <div>
      <h1>Homr page </h1>
      {/* {data.map((product) => (
        <div key={product.id}>
          <h2>{product.name}</h2>
          <p>Price: {product.price} টাকা</p>
        </div>
      ))} */}
    </div>
  );
}
