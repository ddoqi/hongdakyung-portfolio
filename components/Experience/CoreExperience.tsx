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
                팀 리더를 맡아 팀 리딩시 간트 차트를 도입하여 업무 분배를 하였고
                팀 프로세스를 체계화하여 팀의 생산성 향상
                <br /> 팀 리딩시 디자이너와 소통 담당
                <br />
                백엔드와의 협업 프로젝트 진행
              </p>
            </div>
            <div className="core-experience-container">
              <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">
                실사용자 200여명의 서비스 개발 & 유저 피드백 보완
              </h2>
              <p className="leading-relaxed text-base mb-4">
                사용자 중심의 개발 방법론을 실제로 경험하면서, 사용자들의 니즈를
                파악하고 서비스를 개선하는 방법 습득
                <br />웹 개발 프로세스에서의 기획, 디자인, 개발, 배포,
                유지보수의 전 과정을 경험
              </p>
            </div>
            <div className="core-experience-container">
              <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">
                Lighthouse 측정 지수 개선
              </h2>
              <p className="leading-relaxed text-base mb-4">
                Recoil을 사용하여 상태를 전역 상태관리하여 불필요한 렌더링을
                줄이고 컴포넌트 랜더링 속도를 86ms 에서 60ms로 개선
                <br />
                이미지 최적화 작업을 통해 초기 랜더링 속도를 1.8s에서 0.3s 으로
                개선
              </p>
            </div>
            <div className="core-experience-container">
              <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">
                chatGPT API를 사용한 프로젝트 해커톤 참여
              </h2>
              <p className="leading-relaxed text-base mb-4">
                인공지능과 웹 기술을 접목시키는 방법을 학습하고, ChatGPT API와
                같은 인공지능 기술을 활용한 실제 서비스 개발 참여 참여
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CoreExperience;
