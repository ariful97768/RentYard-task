const Textarea = ({ placeholder, id }) => {
    return (
        <textarea className="p-4 border min-w-96 rounded-xl brdr-primary" placeholder={placeholder} name={id} id={id}></textarea>
    );
};

export default Textarea;