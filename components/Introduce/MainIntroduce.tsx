import Image from "next/image";
import React from "react";
import mainPhoto from "../../public/images/mainPhoto.jpeg";

const MainIntroduce = () => {
  return (
    <div>
      <section className="text-gray-600 body-font mt-[10%]">
        <div className="px-5 py-5 mx-auto lg:flex items-center justify-center">
          {/* 이미지 영역  */}
          <div
            data-aos="flip-left"
            data-aos-duration="2000"
            className="lg:w-[1/2] mb-10 lg:mb-0 rounded-lg"
          >
            <Image
              className="rounded-lg w-[95%] "
              src={mainPhoto}
              width={560}
              height={400}
              alt="mainPhoto"
            />
          </div>

          {/* 자기소개 영역 */}
          <div className="flex flex-col flex-wrap -mb-10 lg:w-1/2 lg:text-left text-center ml-3">
            <h3 className="mb-6 text-2xl text-black">
              Hello! I&#39;m Da Kyung 👋🏼
              <br />
            </h3>
            {/* contact */}
            <div
              data-aos="fade-left"
              data-aos-duration="1500"
              className="flex flex-col mb-10 lg:items-start items-center "
            >
              <div className="main-introduce-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                  />
                </svg>
              </div>
              <div className="main-introduce-container">
                <h2 className="main-introduce-title">CONTACT</h2>
                {/* <p className="leading-relaxed text-base">
                  Blue bottle crucifix vinyl post-ironic four dollar toast vegan
                  taxidermy. Gastropub indxgo juice poutine.
                </p> */}
                <div>
                  <ol>
                    <li>PH : 010-3457-6610</li>
                    <li>Email : bongbk72@naver.com</li>

                    <div className="flex space-x-1">
                      <li>채널 : </li>
                      <li
                        className="main-introudce-link"
                        onClick={() => {
                          window.open("https://warn-code.tistory.com/");
                        }}
                      >
                        기술 블로그 |
                      </li>
                      <li
                        className="main-introudce-link"
                        onClick={() => {
                          window.open("https://github.com/ddoqi");
                        }}
                      >
                        GitHub |
                      </li>
                      <li className="main-introudce-link">RESUME</li>
                    </div>
                  </ol>
                </div>
              </div>
            </div>
            {/* experience */}
            <div
              data-aos="fade-left"
              data-aos-duration="1500"
              className="flex flex-col mb-10 lg:items-start items-center"
            >
              <div className="main-introduce-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
                  />
                </svg>
              </div>
              <div className="main-introduce-container bg-white border border-gray-300">
                <h2 className="main-introduce-title">
                  Education & Certificate
                </h2>

                <div className="pl-5">
                  <ol className="text-base">
                    <li className="font-bold text-black">
                      정보처리산업기사(2022)
                    </li>
                    <li className="font-bold text-black">
                      자바(JAVA)기반 응용 SW 전문가 양성 과정 수료
                    </li>
                    <li className="font-bold text-black">
                      리액트(React) 프론트엔드 엔지니어 과정 수료
                    </li>

                    <li>HSK 6급 & HSKK 고급</li>

                    <li>TOEIC SPEAKING LV.6</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MainIntroduce;
