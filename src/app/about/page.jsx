import Image from "next/image";
import React from "react";

const AboutPage = () => {
  return (
    <div>
      <h1>this is about section </h1>
      <Image
        src="https://images.unsplash.com/photo-1789924171795-e68f735b90ce"
        width={500}
        height={500}
        alt="img"
      />
      <Image
        src="https://images.unsplash.com/photo-1789234350520-841478d6e6e3"
        width={500}
        height={500}
        alt="img"
      />
      <Image src="/hero-img.jpg" width="600" height="400" alt="img"></Image>
    </div>
  );
};

export default AboutPage;
