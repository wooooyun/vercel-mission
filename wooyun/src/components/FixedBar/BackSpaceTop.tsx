import Top from "./Top";
import arrow from "../../assets/arrow.svg";
import { useNavigate } from "react-router-dom";

const BackSpaceTop = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Top />
      <div className="py-[10px] pl-[10px]">
        <img onClick={() => navigate(-1)} src={arrow} alt="뒤로가기" className="w-[24px] h-[24px] cursor-pointer" />
      </div>
    </div>
  );
};

export default BackSpaceTop;
