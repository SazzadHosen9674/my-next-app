import next from "next";
import React, { cache } from "react";

const aip = () => {
  const dataFach = async () => {
    // const res = await ("API", { cache: "no-store" }); //! cache jodi kono data mai store kore na rakhte cahi
    const res = await ("API", { next: { revalidate: 60 } });
  };
  return <div></div>;
};

export default aip;
