import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import star from "../../assets/star.svg";

interface StoreCardProps {
  rank: number;
  id: number;
  name: string;
  rate: number;
  reviewCnt: number;
  minDeliveryTime: number;
  maxDeliveryTime: number;
  deliveryFee: number;
  editStore: (id: string, name: string) => Promise<void>;
  deleteStore: (id: string) => Promise<void>;
}

const StoreCard = ({
  rank,
  id,
  name,
  rate,
  reviewCnt,
  minDeliveryTime,
  maxDeliveryTime,
  deliveryFee,
  editStore,
  deleteStore,
}: StoreCardProps) => {
  const { FoodId } = useParams();
  const [newName, setnewName] = useState("");
  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = async () => {
    if (!newName.trim()) return;

    await editStore(id.toString(), newName);
    setnewName("");
    setIsEditing(false);
  };

  const handleDelete = async () => {
    const confirmDelete = window.confirm("정말로 이 가게를 삭제하시겠습니까?");
    if (confirmDelete) {
      await deleteStore(id.toString());
    }
  };

  return (
    <div className="w-full flex justify-between">
      <Link
        to={`/store/${FoodId}/${id}`}
        className={`w-full flex box-border pt-[18px] pl-[24px] gap-[17px] cursor-pointer no-underline text-inherit ${rank !== undefined ? "h-[110px]" : "h-[90px]"}`}
      >
        <div className="w-[54px] h-[54px] mt-3 rounded-[8px] bg-[#ECECEC]"></div>
        <div>
          {rank !== undefined && (
            <p className="text-[#333D4B] font-['Pretendard'] text-[17px] font-[600] leading-[normal]">
              {rank}위
            </p>
          )}
          <p className="text-[#333D4B] font-['Pretendard'] text-[17px] font-[600] leading-[normal]">
            {name}
          </p>
          <span className="flex items-center">
            <img src={star} alt="별점" className="w-[13.161px] h-[13.161px]" />
            <p className="text-[#6B7684] font-['Pretendard'] text-[13px] font-[500] leading-[normal]">
              {rate} ({reviewCnt.toLocaleString()})
            </p>
          </span>
          <span className="text-[#6B7684] font-['Pretendard'] text-[13px] font-[500] leading-[normal]">
            {minDeliveryTime}분~{maxDeliveryTime}분 ∙ 배달비{" "}
            {deliveryFee.toLocaleString()}원
          </span>
        </div>
      </Link>
      <div className="flex w-[130px] shrink-0 self-center gap-2 pr-1 pt-3">
        {isEditing ? (
          <div className="flex w-29 flex-col gap-2">
            <input
              type="text"
              value={newName}
              onChange={(e) => setnewName(e.target.value)}
              className="w-full min-w-0 border border-gray-300 rounded px-2 py-1 text[12px]"
            />
            <div className="flex gap-2">
              <button
                onClick={handleEdit}
                className="bg-[#3182f6] px-3 py-2 rounded-[4px] text-white whitespace-nowrap cursor-pointer"
                type="button"
              >
                저장
              </button>

              <button
                onClick={() => setIsEditing(false)}
                className="bg-[#3182f6] px-3 py-2 rounded-[4px] text-white whitespace-nowrap cursor-pointer"
                type="button"
              >
                취소
              </button>
            </div>
          </div>
        ) : (
          <div className="flex gap-2">
            <button
              onClick={() => setIsEditing(true)}
              className="bg-[#FFC933] px-3 py-2 rounded-[4px] text-white cursor-pointer"
              type="button"
            >
              수정
            </button>

            <button
              onClick={async () => await handleDelete()}
              className="bg-[#F04452] px-3 py-2 rounded-[4px] text-white cursor-pointer"
              type="button"
            >
              삭제
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default StoreCard;
