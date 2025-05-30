import SectionContainer from "@/components/sectioncontainer";
import Image from "next/image"

export default function About() {
  return (
    <SectionContainer id="about" title="About Me" count={"01."}>
      <div className="flex flex-col gap-8 md:flex-row">
        <div className="basis-[60%] sm:space-y-16 lg:text-xl text-sm space-y-10">
          <div>
            <h3 className="mb-3 lg:text-3xl text-2xl text-lightest-slate">[첫인상을 주는 프론트엔드]</h3>
            <div className="flex flex-col gap-2">
             <p >
              처음 마주치는 화면이 전부가 아니라는 마음으로 프론트를 만들고 있습니다.
              </p>
              <p>
              어떻게 보여줄지가 아니라, 어떻게 느껴질지를 먼저 고민합니다.
            </p>
            </div>
          </div>
          <div>
            <h3 className="mb-3 lg:text-3xl text-2xl text-lightest-slate">[몰입하는 순간의 즐거움]</h3>
            <div className="flex flex-col gap-2">
            <p>하나의 기능을 구현하다 보면 시간이 순식간에 지나갈 때가 있습니다.</p>
            <p>저는 그런 몰입의 순간을 좋아합니다.</p>
            <p>작은 애니메이션 효과 하나, 상태 관리 구조 하나에도 더 나은 방향을 계속 고민합니다.</p>
            <p>사용자가 더 편하게 느낄 수 있게 만들어낼 때 비로소 그 작업이 완성됐다고 느낍니다.</p>
            </div>
          </div>
          <div>
            <h3 className="mb-3 lg:text-3xl text-2xl text-lightest-slate">[스스로 해결하는 사람]</h3>
            <div className="flex flex-col gap-2">
            <p>
              인터넷 강의를 보며 개발을 처음 접했고,
              강의만 따라가는 데서 그치지 않고,
              </p>
              <p>
              배운 걸 바탕으로 혼자 힘으로 프로젝트를 만들어보며 연습했습니다.
              </p>
              <p>
              모르는 건 직접 검색하고 찾아보는 습관이 생기면서
              문제도 해결할 수 있게 됐고,
              </p>
              <p>
              그 과정에서 개발에 대한 자신감도 점점 쌓였습니다.
            </p>
            </div>
          </div>
        </div>

        {/* 이미지 영역 */}
        <div className="relative mx-auto aspect-square h-[400px] w-[300px] max-w-[300px] lg:mt-[5%] mt-[10%]">
          <Image
            src="/profile.png"
            fill
            alt="프로필"
            sizes="300px"
            className="z-10 -translate-x-2 -translate-y-2 rounded-xl"
          />
          <p className="absolute -bottom-10 left-30 text-white">김수환</p>
          <p className="absolute -bottom-17 left-25 text-white">2000.07.01</p>
        </div>
      </div>
    </SectionContainer>
  );
}
