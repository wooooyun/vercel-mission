interface TotalPriceProps {
    label: string;
    price: number;
    variant?: "default" | "bold"
}

const TotalPrice = ({ label, price, variant = "default" }: TotalPriceProps) => {
    const labelClass =
        variant==="bold"
            ? "text-[#4E5968] font-['Pretendard'] text-[17px] font-[500] leading-[normal]"
            : "text-[#8B95A1] font-['Pretendard'] text-[17px] font-[500] leading-[normal]"

    return (
    <div className="flex justify-between">
        <p className={labelClass}>
            {label}
        </p>
        <p className="text-[#505967] font-['Pretendard'] text-[17px] font-[500] leading-[normal]">
            {price.toLocaleString()}원
        </p>
    </div>
  )
}

export default TotalPrice;