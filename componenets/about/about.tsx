"use client";

import Image from "next/image";
import ScrollAnimation from "../etc/scrollAnimation";
import SectionContainer from "../etc/sectioncontainer";

export default function About() {
  return (
    <ScrollAnimation>
      <SectionContainer id="about" title="About Me" count={"01."}>
        <ScrollAnimation
          delay={0.5}
          className="flex flex-col md:flex-row items-start justify-start"
        >
          <div className="w-full md:basis-[40%] relative aspect-square">
            <div className="relative aspect-square w-full h-[400px]  *:text-white *:md:text-2xl">
              <Image
                src="/profile.png"
                fill
                alt="프로필"
                className="z-10  h-[400px] w-[300px] max-w-[300px] md:mt-[5%] mx-auto -translate-x-2  rounded-xl"
              />
              <p className="md:absolute md:bottom-[-4.5rem] md:left-45 transform  text-center translate-y-105 md:translate-y-0">
                김수환
              </p>
              <p className="md:absolute md:bottom-[-7.5rem] md:left-38 transform  text-center translate-y-105 md:translate-y-0">
                2000.07.01
              </p>
              <p className="md:absolute md:bottom-[-10.5rem] md:left-26 transform  text-center translate-y-105 md:translate-y-0">
                rkrk7636@gmail.com
              </p>
            </div>
          </div>
          <div className="basis-[60%] sm:space-y-16 lg:text-xl text-sm space-y-10 mt-30 md:mt-0">
            <div>
              <h3 className="mb-3 lg:text-3xl text-xl text-lightest-slate">
                [첫인상을 주는 프론트엔드]
              </h3>
              <div className="flex flex-col gap-2 *:text-[15px] md:*:text-[20px]">
                <div className="leading-relaxed ">
                  <p className="">
                    처음 마주치는 화면이 전부가 아니라는 마음으로 프론트를
                    만들고 있습니다. 겉으로 보이는 디자인보다 사용자가 어떻게
                    느낄지를 먼저 고민합니다.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <h3 className="mb-3 lg:text-3xl text-xl text-lightest-slate">
                [몰입하는 순간의 즐거움]
              </h3>
              <div className="flex flex-col gap-2 *:text-[15px] md:*:text-[20px]">
                <div className="leading-relaxed ">
                  <p className="m-0">
                    기능 하나를 구현하다 보면 시간이 훌쩍 지나가곤 합니다. 저는
                    그 몰입의 순간을 즐깁니다. 작은 애니메이션 효과부터 상태
                    관리 구조까지, 사용자가 더 편리하게 느낄 수 있도록 끝까지
                    고민합니다. 그때 작업이 완성됐다고 느낍니다.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <h3 className="mb-3 lg:text-3xl text-xl text-lightest-slate">
                [스스로 해결하는 사람]
              </h3>
              <div className="flex flex-col gap-2  ">
                <div className="leading-relaxed text-[15px] md:text-[20px]">
                  <p className="m-0 ">
                    처음엔 인터넷 강의를 보며 개발을 배웠습니다. 하지만 강의만
                    따라가는 데서 멈추지 않고, 배운 내용을 바탕으로 직접
                    프로젝트를 만들며 연습했습니다. 막히는 부분이 있으면 검색해
                    해결하는 습관이 생겼고, 그 과정에서 개발에 대한 자신감도
                    점점 쌓였습니다.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </ScrollAnimation>
      </SectionContainer>
    </ScrollAnimation>
  );
}
