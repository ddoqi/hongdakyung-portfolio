import Image from "next/image";
import React, { useEffect } from "react";

const Projects = ({ data }) => {
  useEffect(() => {
    console.log("data:", data);
    console.log("url찾는중 ", data.cover.file?.url);
  }, []);
  const title = data.properties.이름.title[0].plain_text;
  // const imgSrc = data.cover.external?.url;
  const imgSrc = data.cover.file?.url;
  return (
    <div className="flex flex-col justify-center items-center">
      {title}
      <Image src={imgSrc} width={300} height={300} alt="hello" />
    </div>
  );
};

export default Projects;
