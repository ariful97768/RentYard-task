const Input = ({ title, id, placeholderText, type }) => {
    return (
        <div className="flex flex-col">
            <label className='cursor-pointer font-semibold' htmlFor={id}>{title}</label>
            <input placeholder={placeholderText} className='mt-3 w-full border placeholder:text-[#6F6C6A] brdr-primary rounded-xl p-3' type={type} name={id} id={id} />
        </div>
    );
};

export default Input;