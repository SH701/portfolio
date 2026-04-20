interface CloseModalProps {
  showModal: boolean;
  setShowModal: (value: boolean) => void;
}

export default function CloseModal({ showModal, setShowModal }: CloseModalProps) {
  if (!showModal) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60"
      onClick={() => setShowModal(false)}
    >
      <div
        className="bg-white rounded-2xl p-6 mx-4 max-w-sm w-full shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <p className="text-gray-900 font-semibold text-base mb-1">
          서비스 종료 안내
        </p>
        <p className="text-sm text-gray-500 mb-5">
          백엔드 서버 종료로 현재 사이트에 접속할 수 없습니다.
          <br />
          시연 영상과 이미지로 서비스를 확인해 주세요.
        </p>
        <button
          onClick={() => setShowModal(false)}
          className="w-full py-2 rounded-lg bg-gray-900 text-white text-sm font-medium hover:bg-gray-700 transition-colors cursor-pointer"
        >
          확인
        </button>
      </div>
    </div>
  );
}
