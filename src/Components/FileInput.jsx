import { useContext, useState } from "react";
import { FuncContext } from "../ContextProvider/Context";
import { FiUpload } from "react-icons/fi";

const FileInput = ({ title, reference, id }) => {
    const { handleInput } = useContext(FuncContext)
    const [file, setFile] = useState(null)

    return (
        <div className="flex flex-col">
            <label className='cursor-pointer font-semibold' htmlFor={id}>{title}</label>
            <div onClick={() => handleInput(reference)} className='mt-3 border border-dashed cursor-pointer rounded-xl bg-[#F4F4F4] py-3 flex items-center justify-center'>
                <p className='flex items-center gap-2'>{file ? file.name.toString().slice(0, 15) : <><FiUpload />PDF files only</>}</p>
                <input onChange={e => e.target.files && setFile(e.target.files[0] || null)} ref={reference} type="file" accept="application/pdf" className='hidden' name={id} id={id} />
            </div>
        </div>
    );
};

export default FileInput;