import { useContext, useState } from "react";
import { FiUpload } from "react-icons/fi";
import { FuncContext } from "../ContextProvider/Context";

const InputPhoto = ({ imageRef, isLarge = false }) => {
    const [image, setImage] = useState(null)
    const { handleInput } = useContext(FuncContext)

    return (
        <div onClick={() => handleInput(imageRef)} className={`${isLarge ? 'py-10 px-9 w-[220px] h-[170px] col-span-2 row-span-2' : 'py-6 px-9 w-[100px] h-[75px]'} border border-[#316EED] bg-[#F6F9FF] max-w-max flex flex-col items-center justify-center gap-2 rounded-2xl border-dashed`}>
            {
                image ?
                    <img className="object-cover w-full h-full" src={image} alt="" />
                    :
                    (<>
                        <div className="p-2 border border-[#316EED] rounded-lg border-dashed max-w-max max-h-max">
                            <FiUpload className="text-xl" />
                        </div>
                        {
                            isLarge && (<div className="text-center">
                                <h3 className="font-semibold txt-primary">Upload cover photo</h3>
                                <p className="text-xs txt-secondary">jpg, png only</p>
                            </div>)
                        }
                        <input onChange={(e) => e.target?.files[0] && setImage(URL.createObjectURL(e.target?.files[0]))} hidden accept="image/jpeg, image/png" type="file" ref={imageRef} />
                    </>)
            }
        </div>
    );
};

export default InputPhoto;