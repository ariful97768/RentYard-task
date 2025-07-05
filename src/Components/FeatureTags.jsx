import { useState } from "react";

const FeatureTags = ({ icon, title }) => {
    const [select, setSelect] = useState(false)
    return (
        <div onClick={() => setSelect(!select)} className={`${select ?'border-[#316EED] bg-[#F5F8FF]':'brdr-primary'} flex gap-2 p-3 border-2 rounded-xl font-semibold txt-primary transition-all duration-300`}>
            <div className="p-1 rounded-md bg-[#F4F4F4]">
                {icon}
            </div>
            <p>{title}</p>
        </div>
    );
};

export default FeatureTags;