import Head from "next/head";
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import MainIntroduce from "@/components/Introduce/MainIntroduce";
import SelfIntroduce from "@/components/Introduce/SelfIntroduce";
import CoreExperience from "@/components/Experience/CoreExperience";
import MainSkills from "@/components/Skills/MainSkills";
import EtcSkills from "@/components/Skills/EtcSkills";
import Projects from "@/components/Projects/Projects";
import TackuTable from "@/components/Projects/TackuTable";
import HospitalProject from "@/components/Projects/HospitalProject";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Home({ projects }) {
  useEffect(() => {
    AOS.init({
      offset: 120, // offset (in px) from the original trigger point
      delay: 200, // values from 0 to 3000, with step 50ms
      duration: 700, // values from 0 to 3000, with step 50ms
      mirror: true,
    });
  }, []);
  return (
    <>
      <Head>
        <title>홍다경 포트폴리오</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Header />
        {/* 자기소개 */}
        <SelfIntroduce />
        <MainIntroduce />

        {/* 핵심경험 */}
        <CoreExperience />

        {/* 스킬 */}
        <MainSkills />
        <EtcSkills />

        <hr />

        {/* 프로젝트  */}

        <TackuTable />
        <HospitalProject />

        {/* 기타 프로젝트 */}
        <div className="flex flex-col text-center w-full mb-10 mt-[5%]">
          <h2 className="text-xs text-blue-500 tracking-widest font-medium title-font mb-1">
            ETC
          </h2>
          <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">
            PROJECT
          </h1>
        </div>
        <div className="grid grid-cols-3 gap-4">
          {projects.results.map((project) => (
            <Projects key={project.id} data={project} />
          ))}
        </div>

        <Footer />
      </div>
    </>
  );
}

// notion API 데이터 불러오기
export async function getStaticProps() {
  const options = {
    method: "POST",
    headers: {
      accept: "application/json",
      "Notion-Version": "2022-06-28",
      "content-type": "application/json",
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_NOTION_TOKEN}`,
    },

    body: JSON.stringify({
      sorts: [{ property: "이름", direction: "ascending" }],
      page_size: 100,
    }),
  };

  const res = await fetch(
    `https://api.notion.com/v1/databases/${process.env.NEXT_PUBLIC_NOTION_DATABASE_ID}/query`,
    options
  );

  const projects = await res.json();
  console.log("projects", projects);

  const projectNames = projects.results.map(
    (project) => project.properties.이름.title[0].plain_text
  );

  console.log("projectNames : ", projectNames);

  return {
    props: { projects },
  };
}
