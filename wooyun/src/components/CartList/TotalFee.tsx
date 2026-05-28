import useCartStore from "../../pages/Store/useCartStore";
import TotalPrice from "../UI/TotalPrice";

const TotalFee = () => {
  const menus = useCartStore((state) => state.menus);

  const totalPrice = menus.reduce((acc, cur) => acc + cur.price * cur.count, 0);

  const deliveryFee = 2000;
  const TotaldeliveryFee = totalPrice + deliveryFee;

  return (
    <div>
      <div className="pt-[16px]"></div>
      <div className="flex flex-col pt-[8px] px-[24px] gap-[24px]">
        <TotalPrice label="주문금액" price={totalPrice} />
        <TotalPrice label="배달요금" price={deliveryFee} />
        <TotalPrice label="총 결제금액" price={TotaldeliveryFee} variant="bold" />
      </div>
    </div>
  );
};

export default TotalFee;
