import pizza from "../../assets/pizza.svg";
import salad from "../../assets/salad.svg";
import burger from "../../assets/burger.svg";
import koreafood from "../../assets/koreafood.svg";
import firefood from "../../assets/firefood.svg";
import chicken from "../../assets/chicken.svg";
import sushi from "../../assets/sushi.svg";
import sandwich from "../../assets/sandwich.svg";
import pasta from "../../assets/pasta.svg";
import dessert from "../../assets/dessert.svg";
import coffee from "../../assets/coffee.svg";
import extra from "../../assets/extra.svg";
import FoodCard from "./FoodCard";

export const foods = [
  { id: 1, name: "피자", image: pizza },
  { id: 2, name: "샐러드", image: salad },
  { id: 3, name: "햄버거", image: burger },
  { id: 4, name: "한식", image: koreafood },
  { id: 5, name: "분식", image: firefood },
  { id: 6, name: "치킨", image: chicken },
  { id: 7, name: "초밥", image: sushi },
  { id: 8, name: "샌드위치", image: sandwich },
  { id: 9, name: "파스타", image: pasta },
  { id: 10, name: "디저트", image: dessert },
  { id: 11, name: "커피", image: coffee },
  { id: 12, name: "더보기", image: extra },
];

const CardList = () => {
  return (
    <div className="grid grid-cols-3 gap-[10px]">
      {foods.map((food) => (
        <FoodCard
          key={food.id}
          id={food.id}
          name={food.name}
          image={food.image}
        />
      ))}
    </div>
  );
};

export default CardList;
