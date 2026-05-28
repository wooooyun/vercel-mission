import { useNavigate } from "react-router-dom";
import alert from "../../assets/alert.svg";
import plus from "../../assets/plus.svg";
import useCartStore from "../../pages/Store/useCartStore";

const SelectedMenu = ({}) => {
  const menus = useCartStore((state) => state.menus);
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div>
      <div className="flex justify-between pt-[26px] pl-[24px] pr-[25px]">
        <p className="text-[#6B7684] font-['Pretendard'] text-[17px] font-[700] leading-[normal]">
          {menus[0]?.storename}
        </p>
        <div className="flex gap-[3px] items-center">
          <p className="text-[#F04452] font-['Pretendard'] text-[15px] font-[500] leading-[normal]">
            최소금액 미달
          </p>
          <img src={alert} alt="경고" className="w-[13px] h-[13px]" />
        </div>
      </div>
      {menus.map((menu) => (
        <div key={menu.id}>
          <div className="flex pt-[19px] pl-[24px]">
            <div className="w-[54px] h-[54px] rounded-[8px] bg-[#ECECEC]"></div>
            <div className="flex flex-col gap-[5px] pl-[16px]">
              <p className="text-[#333D4B] font-['Pretendard'] text-[17px] font-[700] leading-[normal]">
                {menu.name}
              </p>
              <div className="w-[210px]">
                <p className="text-[#6B7684] font-['Pretendard'] text-[13px] font-[500] leading-[normal]">
                  {menu.ingredients}
                </p>
              </div>
              <p className="text-[#6B7684] font-['Pretendard'] text-[13px] font-[500] leading-[normal]">
                {menu.price.toLocaleString()}원
              </p>
            </div>
            <div className="pt-[40px] pl-[16px]">
              <p className="text-[#6B7684] font-['Pretendard'] text-[15px] font-[500] leading-[normal]">
                {menu.count}개
              </p>
            </div>
          </div>
        </div>
      ))}
      <div className="mt-[16px] h-[1px] bg-[#F2F4F6]"></div>
      <div
        onClick={handleBack}
        className="flex pt-[19px] pl-[160px] items-center gap-[2px] cursor-pointer"
      >
        <p className="text-[#3182F6] font-['Pretendard'] text-[17px] font-[600] leading-[normal]">
          더 담기
        </p>
        <img src={plus} alt="더 담기" className="w-[16px] h-[16px]" />
      </div>
      <div className="mt-[16px] h-[16px] bg-[#F2F4F6]"></div>
    </div>
  );
};

export default SelectedMenu;
