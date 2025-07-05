const EmbededOptions = () => {
    return (
        <div className='flex items-center gap-7 max-w-max px-4 py-2 border rounded-xl brdr-primary'>
            <p className='font-semibold'>Guest vehicle parking time</p>
            <select className="border p-1 brdr-primary rounded-md" name="" id="">
                <option value="2H">2H</option>
                <option value="2H">4H</option>
                <option value="2H">6H</option>
                <option value="2H">8H</option>
                <option value="2H">10H</option>
                <option value="2H">12H</option>
            </select>
        </div>
    );
};

export default EmbededOptions;