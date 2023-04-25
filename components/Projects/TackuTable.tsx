import React from "react";
import Image from "next/image";
import imgSrc from "../../public/images/tackuTable.jpeg";

const TackuTable = () => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col text-center w-full mb-5 mt-[5%]">
        <h2 className="text-xs text-gray-500 tracking-widest font-medium title-font mb-1">
          MAIN PROJECT
        </h2>
        <h1 className="sm:text-3xl text-2xl font-medium title-font text-brand100">
          PROJECT
        </h1>
      </div>
      <div className="bg-white mx-auto lg:flex items-center justify-center">
        <Image
          src={imgSrc}
          width={500}
          height={300}
          alt="tacku-table"
          className="object-fill bg-white"
        />
        <div className="p-3 lg:project-container">
          <h2 className="text-sm title-font text-gray-500 tracking-widest">
            PROJECT NAME
          </h2>
          <div className="flex">
            <div className="text-gray-900 text-3xl title-font font-medium mb-1">
              타쿠의 식탁
            </div>
          </div>

          <div className="leading-relaxed mt-2">
            <h3 className="project-detail-title">프로젝트 설명</h3>
            <p className="project-detail-content">
              애니메이션 속 음식 레시피 공유 + 유저들간의 커뮤니티 기능의
              홈페이지
            </p>
          </div>

          <div className="leading-relaxed">
            <h3 className="project-detail-title"> 프로젝트 기간 </h3>
            <p className="project-detail-content">23.02.06~23.03.06</p>
          </div>
          <div className="leading-relaxed">
            <h3 className="project-detail-title"> 기술스택 </h3>
            <p className="project-detail-content">
              NEXT.JS , React, TypeScript,React-query,Firebase, Vercel
            </p>
          </div>
          <div className="leading-relaxed">
            <h3 className="project-detail-title"> 참여인원 </h3>
            <p className="project-detail-content">FE 4명, 디자이너 1명</p>
          </div>
          <div className="flex items-center pb-5 border-b-2 border-gray-100 mb-5"></div>
          <div className="flex space-x-2">
            <button
              onClick={() => {
                window.open("https://tacku-table-v1.vercel.app/");
              }}
              className="tacku-table-button"
            >
              홈페이지 바로가기
            </button>
            <button
              onClick={() => {
                window.open("https://github.com/tacku-table/tacku-table");
              }}
              className="tacku-table-button"
            >
              깃허브 바로가기
            </button>
          </div>
        </div>
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
                  핵 심 역 할
                </h2>
                <div className="leading-relaxed mb-8">
                  <ol>
                    <li>- 팀 리딩(팀장) & 디자이너 담당 소통</li>

                    <li>
                      - 데이터 전역 상태관리 : 불필요한 랜더링 개선 &#8594;
                      컴포넌트 랜더링 속도
                      <span className="text-blue-800 font-bold">
                        86ms에서 60ms
                      </span>
                      개선
                    </li>
                    <li>
                      -
                      <span className="text-blue-800 font-bold">
                        디바운싱 적용
                      </span>{" "}
                      : setTimeout을 사용 0.5초(500ms) 이후 검색어 업데이트
                      &#8594; 서버 부담 감소, 사용자 경험 향상
                    </li>
                    <li>
                      - useQuery 자동 <span>캐싱 기능</span> 활용 : 동일한
                      검색어에 대한 API 호출 반복 제거 &#8594; 불필요한 네트워크
                      요청 감소,
                      <span className="text-blue-800 font-bold">
                        성능 최적화
                      </span>
                    </li>
                    <li>
                      -<span className="font-bold">&nbsp;커스텀훅 작성</span> :
                      중복되는 코드 제거 &#8594; 재사용성, 유지보수성 높임
                    </li>
                    <li>
                      - Tailwind를 사용하여 일관된 디자인 시스템을 구축하여
                      반응형 UI/UX 작업
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

export default TackuTable;
