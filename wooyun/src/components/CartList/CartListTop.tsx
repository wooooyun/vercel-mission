import { useNavigate } from "react-router-dom";
import useCartStore from "../../pages/Store/useCartStore";
import Top from "../FixedBar/Top";
import arrow from "../../assets/arrow.svg";

const CartListTop = () => {
  const navigate = useNavigate();
  const initializeMenu = useCartStore((state) => state.initializeMenu);

  const handleCancelOrder = () => {
    initializeMenu();
    navigate(-2);
  } 

  const handleBack = () => {
    navigate(-1);
  }

  return (
    <div>
      <Top />
      <div className="py-[10px] pl-[10px] pr-[15px] flex justify-between">
        <img onClick={handleBack} src={arrow} alt="뒤로가기" className="w-[24px] h-[24px] cursor-pointer" />
        <button
          type="button"
          onClick={handleCancelOrder}
          className="text-[#333D4B] font-['Pretendard'] text-[16px] font-[600] leading-[normal] cursor-pointer"
        >
          주문취소
        </button>
      </div>
      <div className="mt-[16px] h-[16px] bg-[#F2F4F6]"></div>
    </div>
  );
};

export default CartListTop;
