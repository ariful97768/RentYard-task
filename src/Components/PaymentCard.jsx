import { CiCreditCard1 } from 'react-icons/ci';

const PaymentCard = ({isMain}) => {
    return (
        <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
                <CiCreditCard1 className="text-xl" />
                <p>Alex jones (Amex card)</p>
                <p className="text-[#6F6C6A]">*******8565</p>
            </div>
            <button className={`btn ${isMain?'bg-[#316EED] text-white':'bg-white border-[#316EED] text-[#316EED]'} rounded-xl`}>Select</button>
        </div>
    );
};

export default PaymentCard;