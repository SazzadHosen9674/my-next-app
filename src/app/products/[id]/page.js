import { notFound } from "next/navigation";

const Page = async ({ params }) => {
  const { id } = await params;
  await new Promise((res) => setTimeout(res, 3000));
  throw new Error("something is wrong");
  if (id !== "123") {
    notFound()
  }
  return (
    <div>
      <p>products id: {id}</p>
    </div>
  );
};

export default Page;
