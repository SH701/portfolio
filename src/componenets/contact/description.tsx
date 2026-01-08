export default function Description() {
  return (
    <div className="flex flex-col gap-6 text-center md:text-left md:flex-1">
      <h3 className="text-2xl md:text-3xl font-bold text-orange-550">
        Let&apos;s Work Together
      </h3>
      <p className="md:text-lg  text-gray-100">
        소통을 기반으로 배우고, 성장하는 웹 개발자가
        <br /> 필요하면 언제든지 연락해 주세요!
      </p>

      <ul className="hidden md:flex flex-col gap-3">
        <li className="flex items-start gap-2">
          <span className="text-orange-550 mt-1">✓</span>
          <span className="text-base text-gray-100">
            빠른 응답을 드리겠습니다
          </span>
        </li>
        <li className="flex items-start gap-2">
          <span className="text-orange-550 mt-1">✓</span>
          <span className="text-base text-gray-100">
            프로젝트 협업 및 제안 환영합니다
          </span>
        </li>
        <li className="flex items-start gap-2">
          <span className="text-orange-550 mt-1">✓</span>
          <span className="text-base text-gray-100">
            기술 관련 질문도 환영합니다
          </span>
        </li>
      </ul>
    </div>
  );
}
