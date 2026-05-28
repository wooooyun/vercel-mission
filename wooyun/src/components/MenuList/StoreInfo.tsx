import star from "../../assets/star.svg";
import InfoRow from "../UI/InfoRow";

interface StoreInfoProps {
  name: string;
  rate: number;
  reviewCnt: number;
  minDeliveryPrice: number;
  minDeliveryTime: number;
  maxDeliveryTime: number;
}

const StoreInfo = ({
  name,
  rate,
  reviewCnt,
  minDeliveryPrice,
  minDeliveryTime,
  maxDeliveryTime,
}: StoreInfoProps) => {
  return (
    <div className="flex flex-col">
      <p className="text-[#191F28] font-['Pretendard'] text-[26px] font-[700] leading-[normal] pt-[26px] pl-[24px]">
        {name}
      </p>
      <InfoRow
        icon={
          <img
            src={star}
            alt="평점"
            className="w-[18px] h-[19px] fill-[#FFD158]"
          />
        }
        label={rate.toString()}
        value={`리뷰${reviewCnt.toLocaleString()}`}
        className="pt-[7px] pl-[23px] gap-[5px]"
      />
      <InfoRow
        label="결제방법"
        value="토스결제만 현장결제 안됨"
        className="pt-[21px] pl-[24px] gap-[12px]"
      />
      <InfoRow
        label="최소주문"
        value={`${minDeliveryPrice.toLocaleString()}원`}
        className="pt-[10px] pl-[24px] gap-[12px]"
      />
      <InfoRow
        label="배달시간"
        value={`약 ${minDeliveryTime}~${maxDeliveryTime}분`}
        className="pt-[10px] pl-[24px] gap-[12px]"
      />
      <div className="mt-[14px] border-b border-[#E5E8EB]"></div>
    </div>
  );
};

export default StoreInfo;
