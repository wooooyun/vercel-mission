import BackSpaceTop from "../../components/FixedBar/BackSpaceTop";
import StorePrint from "../../components/MenuList/StorePrint";
import OrderBar from "../../components/FixedBar/OrderBar";

const Stores = () => {
  return (
    <div className="h-full flex flex-col">
      <div className="flex-1 overflow-y-auto overflow-x-hidden">
        <BackSpaceTop />
        <StorePrint />
      </div>
      <OrderBar />
    </div>
  );
};

export default Stores;
