import Button from "../Button";
import useCartStore from "../../pages/Store/useCartStore";

interface Menu {
  id: number;
  storename: string;
  name: string;
  price: number;
  ingredients: string;
  isBest: boolean;
}

const MenuItem = ({ id, storename, name, price, ingredients, isBest }: Menu) => {
  const addMenu = useCartStore((state) => state.addMenu);
  const handleAddMenu = () => {
    addMenu({ id, storename, name, price, ingredients })
  };

  return (
    <div className="w-full h-[110px] flex gap-[19px]">
      <div className="flex gap-[16px] pt-[28px] pl-[24px]">
        <div className="w-[54px] h-[54px] rounded-[27px] bg-[#ECECEC]"></div>
      </div>

      <div className="flex flex-col gap-[5px] pt-[16px]">
        <div className="flex gap-[6px]">
          <h3 className="text-[#333D4B] font-['Pretendard'] text-[17px] font-[600] leading-[normal]">
            {name}
          </h3>
          {isBest && (
            <span className="text-[#3182F6] font-['Pretendard'] text-[17px] font-[600] leading-[normal]">
              BEST
            </span>
          )}
        </div>
        <span className="text-[#6B7684] font-['Pretendard'] text-[13px] font-[500] leading-[normal]">
          {price.toLocaleString()}원
        </span>
        <p className="w-[201px] text-[#6B7684] font-['Pretendard'] text-[13px] font-[500] leading-[normal]">
          {ingredients}
        </p>
      </div>
      <div className="pt-[48px] pr-[24px] whitespace-nowrap">
        <Button
          onClick={handleAddMenu}
          type="button"
          size="sm"
          className="text-[#FFF] font-['Pretendard'] text-[13px] font-[500] leading-[normal]"
        >
          담기
        </Button>
      </div>
    </div>
  );
};

export default MenuItem;
