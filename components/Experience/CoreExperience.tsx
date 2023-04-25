import React from "react";

const CoreExperience = () => {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-20 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h2 className="text-xs text-blue-500 tracking-widest font-medium title-font mb-1">
              CORE EXPERIENCE
            </h2>
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              핵심 경험
            </h1>
          </div>
          <div className="flex flex-wrap">
            <div className="core-experience-container">
              <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">
                팀 리딩 & 6개의 팀 프로젝트 협업 경험
              </h2>
              <p className="leading-relaxed text-base mb-4">
                팀 리딩시 간트 차트 도입 &#8594; 개발 프로세스 체계화 (생산성
                향상)
                <br /> 디자이너 소통 담당 & 백엔드 협업
                <br />
                프로덕트 매니지먼트
              </p>
            </div>
            <div className="core-experience-container">
              <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">
                실사용자 200여명의 서비스 개발 & 유저 피드백 보완
              </h2>
              <p className="leading-relaxed text-base mb-4">
                유저 사용성 고려한 모바일 UI/UX 구축 경험
                <br />웹 개발 프로세스 기획, 디자인, 개발, 배포, 유지보수 전
                과정 경험
              </p>
            </div>
            <div className="core-experience-container">
              <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">
                Lighthouse 측정 지수 개선
              </h2>
              <p className="leading-relaxed text-base mb-4">
                전역상태관리 :컴포넌트 랜더링 속도 86ms &#8594; 60ms 개선
                <br />
                이미지 최적화 작업 : 초기 랜더링 속도 1.8s&#8594; 0.3s 개선
              </p>
            </div>
            <div className="core-experience-container">
              <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">
                chatGPT API를 사용한 프로젝트 해커톤 참여
              </h2>
              <p className="leading-relaxed text-base mb-4">
                인공지능과 웹 기술 접목시키는 방법 학습, ChatGPT API와 같은
                인공지능 기술을 활용한 실제 서비스 개발 참여
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CoreExperience;
