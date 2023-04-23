import React from "react";
import Image from "next/image";
import imgSrc from "../../public/images/tackuTable.jpeg";

const TackuTable = () => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col text-center w-full mb-5 mt-[5%]">
        <h2 className="text-xs text-blue-500 tracking-widest font-medium title-font mb-1">
          MAIN PROJECT
        </h2>
        <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">
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
      <div className="mx-auto">
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
                    <li>- 팀장 역할을 맡아 팀 리딩 & 디자이너 소통 담당</li>
                    <li>
                      - 간트 차트 도입하여 개발 프로세스 체계화하여 팀 생산성
                      향상 기여
                    </li>
                    <li>
                      - Recoil 사용하여 데이터를 전역 상태로 관리하여 불필요한
                      렌더링을 줄이고 컴포넌트 랜더링 속도를 86ms 에서 60ms로
                      개선
                    </li>
                    <li>
                      - 디바운싱 적용 : setTimeout 함수를 사용하여 0.5초(500ms)
                      이후에 검색어를 업데이트시켜 서버에 부담을 줄이고, 사용자
                      경험 향상
                      <span className="font-bold"></span>
                    </li>
                    <li>
                      - useQuery의 자동 캐싱기능 활용하여 동일한 검색어에 대한
                      불필요한 API 반복 호출을 줄여 성능 최적화
                    </li>
                    <li>
                      - 실시간 유저 닉네임, 프로필 사진을 조회하는 로직을
                      커스텀훅으로 작성하여 중복되는 코드를 제거하여 재사용성과
                      유지보수성을 높임
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
