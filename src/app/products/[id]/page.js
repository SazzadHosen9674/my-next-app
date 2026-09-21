const Page = async ({ params }) => {
  const { id } = await params;
  await new Promise((res) => setTimeout(res, 3000));
  return (
    <div>
      <p>products id: {id}</p>
    </div>
  );
};

export default Page;
