const page = async ({ params }) => {
  const { slug } = await params;
  return (
    <div>
      <h1>product slug : {slug.join("/")}</h1>
    </div>
  );
};

export default page;
