// export async function GET(request, { params }) {
//   const { id } = await params;

//   return Response.json({
//     message: `তুমি product ${id} চেয়েছো`,
//   });
// }
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

export const GET = async (request, { params }) => {
  const { id } = await params;
  const product = products.find((item) => item.id === Number(id));
  if (!product) {
    return Response.json(
      {
        message: "products not avail abail ",
        status: 404,
      },
      { status: 404 },
    );
  }
  return Response.json(product);
};
