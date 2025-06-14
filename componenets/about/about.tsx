"use client";

import Image from "next/image";
import ScrollAnimation from "../scrollAnimation";
import SectionContainer from "../sectioncontainer";

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
                className="z-10  h-[400px] w-[300px] max-w-[300px] md:mt-[10%] mx-auto -translate-x-2  rounded-xl"
              />
              <p className="md:absolute md:bottom-[-6.5rem] md:left-45 transform  text-center translate-y-105 md:translate-y-0">
                김수환
              </p>
              <p className="md:absolute md:bottom-[-9.5rem] md:left-38 transform  text-center translate-y-105 md:translate-y-0">
                2000.07.01
              </p>
              <p className="md:absolute md:bottom-[-12.5rem] md:left-26 transform  text-center translate-y-105 md:translate-y-0">
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
                    만들고 있습니다. 어떻게 보여줄지가 아니라, 어떻게 느껴질지를
                    먼저 고민합니다.
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
                    하나의 기능을 구현하다 보면 시간이 순식간에 지나갈 때가
                    있습니다. 저는 그런 몰입의 순간을 좋아합니다. 작은
                    애니메이션 효과, 상태 관리 구조에도 더 나은 방향을 계속
                    고민합니다. 사용자가 더 편하게 느낄 수 있게 만들어낼 때
                    비로소 그 작업이 완성됐다고 느낍니다.
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
                    인터넷 강의를 보며 개발을 처음 접했던 저는, 강의만 따라가는
                    데서 그치지 않고 배운 걸 바탕으로 혼자 힘으로 프로젝트를
                    만들어 연습했습니다. 모르는 건 바로 검색해 해결하는 습관이
                    생기면서 개발에 대한 자신감도 점점 쌓였습니다.
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
