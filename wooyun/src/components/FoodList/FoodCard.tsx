import { Link } from "react-router-dom";

interface FoodCardProps {
  id: number;
  name: string;
  image: string;
}

const FoodCard = ({ id, name, image }: FoodCardProps) => {
  return (
    <Link
      to={`/store/${id}`}
      className="w-[108px] h-[74px] rounded-[8px] pt-[12px] pb-[13px] bg-[#FAFAFB] flex flex-col justify-center items-center gap-[9px] cursor-pointer"
    >
      <img src={image} alt={name} className="w-[28px] h-[28px]" />
      <p className="text-[#333D4B] text-center font-['Pretendard'] text-sm not-italic font-semibold leading-[normal]">
        {name}
      </p>
    </Link>
  );
};

export default FoodCard;
