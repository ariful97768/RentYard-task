const NumberInput = ({ title, id, placeholderText }) => {
    return (
        <div className="flex flex-col">
            <label className='cursor-pointer font-semibold' htmlFor={id}>{title}</label>
            <input placeholder={placeholderText} className='mt-3 placeholder:text-[#6F6C6A] w-full border brdr-primary rounded-xl p-3' type="number" name={id} id={id} />
        </div>
    );
};

export default NumberInput;