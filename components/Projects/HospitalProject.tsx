import React from "react";
import Image from "next/image";
import imgSrc from "../../public/images/hospitalIntroduce.jpg";

const HospitalProject = () => {
  return (
    <div className="flex flex-col">
      <div className="bg-white mx-auto lg:flex items-center justify-center">
        <div className="p-3 lg:project-container">
          <h2 className="text-sm title-font text-gray-500 tracking-widest">
            PROJECT NAME
          </h2>
          <div className="flex">
            <div className="text-gray-900 text-3xl title-font font-medium mb-1">
              천지인 한의원
            </div>
          </div>

          <div className="leading-relaxed mt-2">
            <h3 className="project-detail-title">프로젝트 설명</h3>
            <p className="project-detail-content">
              천지인 한의원 소개 홈페이지
            </p>
          </div>

          <div className="leading-relaxed">
            <h3 className="project-detail-title"> 프로젝트 기간 </h3>
            <p className="project-detail-content">23.04.07 ~ 23.04.14</p>
          </div>
          <div className="leading-relaxed">
            <h3 className="project-detail-title"> 기술스택 </h3>
            <p className="project-detail-content">
              NEXT.JS , React,AOS, Vercel, Tailwind,
            </p>
          </div>
          <div className="leading-relaxed">
            <h3 className="project-detail-title"> 참여인원 </h3>
            <p className="project-detail-content">개인 프로젝트입니다.</p>
          </div>
          <div className="flex items-center pb-5 border-b-2 border-gray-100 mb-5"></div>
          <div className="flex space-x-2">
            <button
              onClick={() => {
                window.open("https://daddy-present-homepage.vercel.app/");
              }}
              className="hospital-button"
            >
              홈페이지 바로가기
            </button>
            <button
              onClick={() => {
                window.open("https://github.com/ddoqi/daddy-homepage");
              }}
              className="hospital-button"
            >
              깃허브 바로가기
            </button>
          </div>
        </div>
        <Image
          src={imgSrc}
          width={500}
          height={300}
          alt="hospital-photo"
          className="object-fill bg-white lg:ml-5"
        />
      </div>

      <div className="border border-gray-200 w-full mt-5"></div>
      {/* 핵심 역할  */}
      <div data-aos="zoom-in" data-aos-duration="1000" className="mx-auto">
        <section className="text-gray-600 body-font overflow-hidden">
          <div className="container px-5 py-10 mx-auto">
            <div className="flex flex-wrap -m-12">
              <div className="p-12 flex flex-col items-start">
                <span className="inline-block py-1 px-2 rounded bg-blue-50 text-blue-500 text-xs font-medium tracking-widest">
                  Key responsibilities
                </span>
                <h2 className="sm:text-2xl text-xl title-font font-medium text-gray-900 mt-4 mb-4">
                  핵 심 작 업
                </h2>
                <div className="leading-relaxed mb-8">
                  <ol>
                    <li>
                      - <span className="font-bold">이미지 최적화</span> 작업 :
                      페이지 초기 랜더링 속도
                      <span className="font-bold text-blue-800">
                        &nbsp; 1.8s &#8594; 0.3s &nbsp;
                      </span>
                      개선
                    </li>
                    <li>
                      - 검색 노출되는 것이 유리한 홈페이지의 특징 고려하여
                      NEXT.js 채택 &#8594; SEO에 유리한 SSR 방식 선택
                    </li>
                    <li>
                      - 모바일 반응형 UI/UX 작업을 통해 모바일 기기에서 웹사이트
                      이용하는 사용자에게 더 나은 사용자 경험 제공
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="border border-gray-200 w-full mb-5"></div>
    </div>
  );
};

export default HospitalProject;
