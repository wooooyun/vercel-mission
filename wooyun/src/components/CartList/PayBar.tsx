import useCartStore from "../../pages/Store/useCartStore";
import Button from "../Button";

const PayBar = () => {
  const menus = useCartStore((state) => state.menus);

  const totalPrice = menus.reduce((acc, cur) => acc + cur.price * cur.count, 0);

  const deliveryFee = 2000;
  const totaldeliveryFee = totalPrice + deliveryFee;

  const isDisabled = totaldeliveryFee < 10000;

  return (
    <div className="flex flex-col mt-[20px] mb-[34px] items-center gap-[19px] whitespace-nowrap">
      <p className="text-[#6B7684] font-['Pretendard'] text-[17px] font-[500] leading-[normal]">
        최소 주문금액 10,000원
      </p>
      <Button
        type="button"
        size="xl"
        disabled={isDisabled}
        className="text-[#FFF] font-['Pretendard'] text-[16px] font-[600] leading-[normal]"
      >
        {totaldeliveryFee.toLocaleString()}원 결제하기
      </Button>
    </div>
  );
};

export default PayBar;
