import CardList from "../../components/FoodList/CardList";
import FoodCardTitle from "../../components/FoodList/FoodCardTitle";
import Top from "../../components/FixedBar/Top";
import OrderBar from "../../components/FixedBar/OrderBar";

const Home = () => {
  return (
    <div className="h-full flex flex-col">
      <div className="flex-1 overflow-y-auto overflow-x-hidden pt-[70px] px-[24px]">
        <Top />
        <div className="flex flex-col gap-[74px] flex-1 overflow-y-auto overflow-x-hidden">
          <FoodCardTitle />
          <CardList />
        </div>
      </div>
      <OrderBar />
    </div>
  );
};

export default Home;
