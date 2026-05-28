import { useParams } from "react-router-dom";
import { foods } from "../FoodList/CardList";

const Menutitle = () => {
  const { FoodId } = useParams();

  const food = foods.find((food) => food.id === Number(FoodId));

  if (!food) {
    return <div></div>;
  }

  return (
    <div className="flex w-full pt-[26px] pb-[2px] pl-[24px] items-center">
      <span className="text-[#191F28] font-['Pretendard'] text-[26px] font-[700] leading-[normal]">
        {food.name}
      </span>
    </div>
  );
};

export default Menutitle;
