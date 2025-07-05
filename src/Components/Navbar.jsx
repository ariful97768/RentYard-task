import logo from '../assets/image4.png'

const Navbar = () => {
    return (
        <div className='border-b border-black/20'>
            <div className="navbar max-w-[1440px] mx-auto bg-base-100">
                <div className="flex-1">
                    <img className='max-w-37 w-full' src={logo} alt="logo" />
                </div>
                <div className="flex-none">
                    <button className="btn btn-square px-10">
                        Exit
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;