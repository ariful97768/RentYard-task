const PropertyTypeCard = ({ icon, title, dsc, isActive = false }) => {
    return (
        <div className={`flex ${isActive ? "border-[#316EED] bg-[#F9FBFF]" : "border-[#E0E0E0] bg-[#ffffff]"} gap-4 p-5 rounded-xl border transition-all duration-300`}>
            <div className="p-3 rounded-lg bg-[#F9FBFF] max-w-max">
                {icon}
            </div>
            <div>
                <h3 className="font-semibold">{title}</h3>
                <p className="text-sm font-medium text-[#777980]">{dsc}</p>
            </div>
        </div>
    );
};

export default PropertyTypeCard;