import CartListTop from "../../components/CartList/CartListTop";
import PayBar from "../../components/CartList/PayBar";
import SelectedMenu from "../../components/CartList/SelectedMenu";
import TotalFee from "../../components/CartList/TotalFee";

const Cart = () => {
  return (
    <div className="h-full overflow-y-auto overflow-x-hidden">
      <CartListTop />
      <SelectedMenu />
      <TotalFee />
      <PayBar />
    </div>
  );
};

export default Cart;
