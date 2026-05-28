import Button from "../Button";
import useCartStore from "../../pages/Store/useCartStore";
import { useNavigate } from "react-router-dom";

const OrderBar = () => {
  const navigate = useNavigate();
  const handleOrder = () => {
    navigate("/cart");
  };

  const menus = useCartStore((state) => state.menus)

  const totalPrice = menus.reduce((acc, cur) => acc + cur.price * cur.count, 0);

  return (
    <div className="w-full h-[77px] shrink-0 flex justify-between px-[24px] rounded-t-[16px] bg-white shadow-[0_-8px_16px_0_rgba(0,0,0,0.10)]">
      <div className="flex flex-col py-[14px]">
        <p className="text-[#6B7684] font-['Pretendard'] text-lg font-normal not-italic leading-[normal]">
          총 주문금액
        </p>
        <p className="text-[#4E5968] font-['Pretendard'] text-[17px] font-normal font-semibold leading-[normal]">
          {totalPrice.toLocaleString()}원
        </p>
      </div>
      <div className="py-[19px]">
        <Button onClick={handleOrder} type="button" size="lg">
          주문하기
        </Button>
      </div>
    </div>
  );
};

export default OrderBar;
