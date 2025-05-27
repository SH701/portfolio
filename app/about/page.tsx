import SectionContainer from "@/components/sectioncontainer";
import Image from "next/image"

export default function About() {
  return (
    <SectionContainer id="about" title="About Me" count={"01."}>
      <div className="flex flex-col gap-8 md:flex-row">
        {/* 텍스트 영역 */}
        <div className="basis-[60%] sm:space-y-16 lg:text-lg text-sm space-y-10">
          <div>
            <h3 className="mb-3 text-2xl text-lightest-slate">[첫인상을 주는 프론트엔드]</h3>
             <p >
              처음 마주치는 화면이 전부가 아니라는 마음으로 프론트를 만들고 있습니다.
              </p>
              <p>
              어떻게 보여줄지가 아니라, 어떻게 느껴질지를 먼저 고민합니다.
            </p>
          </div>
          <div>
            <h3 className="mb-3 text-2xl text-lightest-slate">[어쩌구 저쩌구]</h3>
            <p>어쩌구 저쩌구</p>
            <p>어쩌구 저쩌구</p>
          </div>
          <div>
            <h3 className="mb-3 text-2xl text-lightest-slate">[스스로 해결하는 사람]</h3>
            <p>
              인터넷 강의를 보며 개발을 처음 접했고,
              강의만 따라가는 데서 그치지 않고,
              </p>
              <p>
              배운 걸 바탕으로 혼자 힘으로 프로젝트를 만들어보며 연습했습니다.
              </p>
              <p>
              모르는 건 직접 검색하고 문서를 찾아보는 습관이 생기면서
              문제도 스스로 해결할 수 있게 됐고,
              </p>
              <p>
              그 과정에서 개발에 대한 자신감도 점점 쌓였습니다.
            </p>
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
