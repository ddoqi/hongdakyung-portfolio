import React from "react";

const SelfIntroduce = () => {
  return (
    <div className="h-full justify-center items-center">
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center lg:mt-0 mt-[15%]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="inline-block w-8 h-8 text-gray-400 mb-8"
              viewBox="0 0 975.036 975.036"
            >
              <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
            </svg>
            <p
              data-aos="zoom-in"
              className="leading-relaxed text-3xl lg:text-[32px]"
            >
              한번 더, 보고싶은 개발자
            </p>
            <span className="inline-block h-1 w-10 rounded bg-blue-500 mt-8 mb-6"></span>
            <h2 className="text-gray-800 font-medium title-font tracking-wider text-lg">
              HONG DA KYUNG
            </h2>
            <p className="text-gray-600 text-lg">
              <b className="text-xl text-blue-400">프론트엔드 개발자</b> 홍다경
              입니다.
            </p>

            <div>
              <div
                data-aos="zoom-in"
                data-aos-duration="2000"
                className="p-2 mt-10"
              >
                <div className="flex content-evenly justify-evenly h-full bg-gray-200  bg-opacity-95 px-8 p-10 rounded-lg overflow-hidden text-center">
                  <div className="title-font sm:text-2xl text-xl w-[20%] font-medium text-black ">
                    한번
                    <span className="text-[#3C82F6] md:text-3xl lg:ml-1">
                      ‘더’
                    </span>
                  </div>
                  <div className="text-md flex flex-col text-left ml-5 w-[80%]">
                    <p className="self-introduce-title">
                      ✔️ 사용자 관점에서 생각합니다.
                    </p>
                    <div className="self-introduce-content">
                      사용자 경험을 고려하여 ‘더 나은 선택’을 고민합니다.
                    </div>
                    <p className="self-introduce-title">
                      ✔️ 깊게 들여다봅니다.
                    </p>
                    <div className="self-introduce-content">
                      새로운 지식 습득 후 기존 코드에 적용하며 더 나은 코드에
                      대해 늘 고민합니다.
                    </div>
                    <p className="self-introduce-title">
                      ✔️ 이야기하고 싶은 개발자입니다.
                    </p>
                    <div className="self-introduce-content">
                      해외 회사에서 외국인과 협업 경험, 팀 프로젝트 리더,
                      디자이너 협업 경험을 바탕으로 원만한 의사결정을 이끌어낼
                      수 있습니다.
                    </div>
                    <p className="self-introduce-title">
                      ✔️ 확인하여 개선합니다.
                    </p>
                    <div className="self-introduce-content">
                      성능 최적화를 고민하며 코드 스플리팅 , 디바운싱 적용한
                      리팩토링 경험이 있습니다.
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-4xl mt-10">&#8595;</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SelfIntroduce;
