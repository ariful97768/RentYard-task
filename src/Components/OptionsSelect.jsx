const OptionsSelect = ({ id, title, options, optionTitle }) => {
    return (
        <div className="flex flex-col">
            <label className='cursor-pointer font-semibold' htmlFor={id}>{title}</label>
            <select className='outline-none mt-3 w-full border brdr-primary rounded-xl py-3 pl-3 mr-10' defaultValue={'none'} name="country" id="country">
                <option disabled value="none">{optionTitle}</option>
                {
                    options.map(option => <option value={option}>{option}</option>)
                }
            </select>
        </div>
    );
};

export default OptionsSelect;