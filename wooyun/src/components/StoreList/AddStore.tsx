import { useState } from "react";

interface AddStoreProps {
  addStore: (name: string) => Promise<void>;
}

export const AddStore = ({ addStore }: AddStoreProps) => {
  const [name, setName] = useState("");
  const [isAdding, setIsAdding] = useState(false);

  const handleSave = async () => {
    if (!name.trim()) return;
    await addStore(name);
    setName("");
    setIsAdding(false);
  }

  const handleCancel = () => {
    setName("");
    setIsAdding(false);
  };

  if (!isAdding) {
    return (
      <div className="flex justify-center px-2 pt-6">
        <button
          onClick={() => setIsAdding(true)}
          className="w-full bg-[#3182f6] px-30 py-2 rounded-[8px] cursor-pointer text-white"
          type="button"
        >
          가게 추가
        </button>
      </div>
    );
  }

  return (
    <div className="grid w-full max-w-full grid-cols-[3fr_1fr_1fr] px-2 pt-6 gap-2 justify-center">
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="매장 이름을 입력하시오"
        className="w-full min-w-0 border border-gray-300 rounded-[8px] py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <button
        onClick={handleSave}
        className="w-full min-w-0 bg-[#3182f6] px-0 py-2 rounded-[8px] cursor-pointer text-white"
        type="button"
      >
        저장
      </button>
      <button
        onClick={handleCancel}
        className="w-full min-w-0 bg-[#3182f6] px-0 py-2 rounded-[8px] cursor-pointer text-white"
        type="button"
      >
        취소
      </button>
    </div>
  );
};
