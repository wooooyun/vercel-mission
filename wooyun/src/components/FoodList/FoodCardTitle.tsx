const FoodCardTitle = () => {
  return (
      <div className="flex flex-col items-start gap-[13px]">
        <h1 className="text-[#191F28] font-['Pretendard'] text-[26px] font-bold leading-[normal]">
          오늘은 무엇을 먹을까요?
        </h1>
        <span className="text-[#333D4B] font-['Pretendard'] text-[17px] font-medium leading-[normal]">
          한남중앙로 40길 (한남 빌리지)(으)로 배달 {">"}
        </span>
      </div>
  );
};

export default FoodCardTitle;
