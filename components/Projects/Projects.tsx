import Image from "next/image";
import React, { useEffect, useState } from "react";

const Projects = ({ data }: any) => {
  const projectName = data.properties.projectName.title[0].plain_text;
  // 배열임
  const skills = data.properties.skills.multi_select;
  const description = data.properties.description.rich_text[0].plain_text;
  const myTask = data.properties.Task.multi_select;
  const imgSrc = data.cover.file?.url;
  const projectID = data.properties.projectId.rich_text[0].plain_text;

  // useEffect(() => {
  //   console.log("data", data.properties.projectId.rich_text[0].plain_text);
  // }, []);

  const connectURL = (projectID: string | number) => {
    console.log(projectID);
    if (projectID == 1) {
      window.open("https://easygpt.ai/");
    }

    if (projectID == 2) {
      window.open("https://github.com/Jeremy-Kr/there-are");
    }

    if (projectID == 3) {
      window.open("https://github.com/ddoqi/saesuda-front");
    }
  };
  return (
    <div data-aos="zoom-in" data-aos-duration="1000">
      <section className="text-gray-600 body-font">
        <div className="px-5  mx-auto ">
          <div>
            <div className="p-4 flex">
              <div className="p-2 border-2 border-gray-300 border-opacity-60 rounded-lg">
                <Image
                  src={imgSrc}
                  className="h-48   object-contain object-center"
                  width={720}
                  height={400}
                  alt="projectPhoto"
                />
                <div className="w-full border border-gray-200"></div>
                <div className="p-6">
                  <h2 className="tracking-widest text-sm title-font font-medium text-blue-400 mb-1">
                    PROJECT
                  </h2>
                  <h1 className="title-font text-xl font-medium text-gray-900 mb-3">
                    {projectName}
                  </h1>

                  <p className="leading-relaxed mb-3 text-lg">{description}</p>
                  <h3 className="text-md mb-1 text-gray-800 font-bold">
                    🛠 SKILLS
                  </h3>
                  <div className="lg:h-[60px]">
                    {skills.map((item: any, index: any) => {
                      return (
                        <div
                          key={index}
                          className="bg-gray-200 inline-block rounded-md mr-1 mb-1 px-1"
                        >
                          {item.name}
                        </div>
                      );
                    })}
                  </div>

                  <h3 className="text-md mt-1 text-gray-800 font-bold">
                    ✔️ TASK
                  </h3>
                  {myTask.map((item: any, index: any) => {
                    return (
                      <div key={index} className="text-md">
                        {" "}
                        - {item.name}
                      </div>
                    );
                  })}

                  <div className="flex">
                    <a
                      onClick={() => {
                        connectURL(projectID);
                      }}
                      className="text-blue-400 hover:text-blue-600 cursor-pointer font-bold inline-flex items-center md:mb-2 lg:mb-0 mt-5"
                    >
                      See Project !
                      <svg
                        className="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
