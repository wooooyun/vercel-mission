import type { ReactNode } from "react";

interface InfoRowProps {
    label: string;
    value: string;
    icon?: ReactNode;
    className?: string;
}

const InfoRow = ({ label, value, icon, className="" }:InfoRowProps) => {
  return (
    <div className={`flex items-center ${className}`}>
        {icon}
        <p className="text-[#4E5968] font-['Pretendard'] text-[17px] font-[600] leading-[normal]">
            {label}
        </p>
        <p className="text-[#4E5968] font-['Pretendard'] text-[17px] font-[600] leading-[normal]">
            {value} 
        </p>
    </div>
  )
}

export default InfoRow;