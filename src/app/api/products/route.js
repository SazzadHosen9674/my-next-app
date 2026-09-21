export async function GET() {
  const products = [
    {
      id: 1,
      name: "iPhone",
      price: 50000,
    },
    {
      id: 2,
      name: "Laptop",
      price: 70000,
    },
    {
      id: 3,
      name: "Headphone",
      price: 3000,
    },
  ];
  return Response.json(products);
}
