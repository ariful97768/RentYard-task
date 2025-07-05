const Checkbox = ({id, title, ref}) => {
    return (
        <div className='flex max-w-max items-center gap-2 mt-7'>
            <input ref={ref} type="checkbox" name="" id={id} />
            <label htmlFor={id}>{title}</label>
        </div>
    );
};

export default Checkbox;