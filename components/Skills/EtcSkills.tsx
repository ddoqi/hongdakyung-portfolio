import React from "react";

const EtcSkills = () => {
  return (
    <div>
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="-my-8 divide-y-2 divide-gray-100">
            <div className="flex flex-col text-center w-full mb-[5%]">
              <h2 className="text-xs text-blue-500 tracking-widest font-medium title-font mb-1">
                ETC SKILLS
              </h2>
              <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">
                SKILLS
              </h1>
            </div>

            <div className="etc-skills-container">
              <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                <span className="font-semibold title-font text-gray-700">
                  STYLE
                </span>
              </div>
              <div className="md:flex-grow">
                <h2 className="text-xl font-medium text-gray-900 title-font mb-2">
                  Styled-Component, Tailwind, emotion
                </h2>
                <p className="leading-relaxed">
                  - 스타일링 라이브러리 사용하여 컴포넌트 기반의 스타일링 &
                  반응형 디자인 구현
                </p>
              </div>
            </div>
            <div className="etc-skills-container">
              <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                <span className="font-semibold title-font text-gray-700">
                  ETC
                </span>
              </div>
              <div className="md:flex-grow">
                <h2 className="text-xl font-medium text-gray-900 title-font mb-1">
                  ReactNative
                </h2>
                <p className="leading-relaxed mb-2">
                  - ReactNative,Vercel를 사용한 애플리케이션 개발 경험
                  <br />
                </p>
                <h2 className="text-xl font-medium text-gray-900 title-font mb-2">
                  Firebase, Supabase
                </h2>
                <p className="leading-relaxed">
                  - Firebase의 인증, Storage, DB 기능 사용한 프로젝트 작업
                  <br />- Supabase의 관계형 데이터베이스 구조 활용하여 데이터
                  중복 개선
                </p>

                <h2 className="mt-2 text-xl font-medium text-gray-900 title-font mb-2">
                  Git, Github
                </h2>
                <p className="leading-relaxed">
                  - 버전 관리 & 다수의 협업 경험
                  <br />- 개발 프로세스 버그 추적 & 이슈 해결 경험
                </p>
                <h2 className="mt-2 text-xl font-medium text-gray-900 title-font mb-2">
                  Vercel
                </h2>
                <p className="leading-relaxed">- 다수의 프로젝트 배포 경험</p>
                <h2 className="mt-2 text-xl font-medium text-gray-900 title-font mb-2">
                  Notion, Slack, Figma
                </h2>
                <p className="leading-relaxed">
                  - Notion, Slack을 적극 활용 프로젝트 관리 & 팀원 간의 소통을
                  원할하게 수행
                  <br />- Figma를 활용하여 UI 디자인 & 프로토타이핑을 할 수
                  있습니다. <br />- Figma 사용하여 디자이너,팀원과 디자인 시안
                  공유 & 피드백 경험
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EtcSkills;
