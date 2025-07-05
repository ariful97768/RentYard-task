import { GoPlus } from "react-icons/go";

const InfoBar = ({ title, handleModal, modalId, isRequired = false, label }) => {
    return (
        <div className="flex justify-between p-5 border rounded-2xl brdr-primary">
            <h3 className="text-lg font-semibold">{title}<span className={isRequired ? 'text-[#FF6A62]' : 'text-[#6F6C6A]'}>({label})</span></h3>
            <button onClick={() => handleModal(modalId)} className="flex cursor-pointer items-center text-[#316EED]"><GoPlus className="text-xl" /><span className="underline">Add</span></button>
        </div>
    );
};

export default InfoBar;