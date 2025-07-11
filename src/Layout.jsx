import { useState } from "react";
import Navbar from "./Components/Navbar";
import App from "./Pages/App";
import Condominiums from "./Pages/Condominiums";
import Payment from "./Pages/Payment";

const Layout = () => {
    const [page, setPage] = useState(3)
    console.log(page);
    return (
        <>
            <Navbar />
            {page === 1 && <App />}
            {page === 2 && <Condominiums />}
            {page === 3 && <Payment />}
            <div className='flex max-w-[1440px] mx-auto w-full justify-between py-5 mt-28'>
                <button onClick={() => page <= 1 ? "" : setPage(page - 1)} className='btn underline'>Back</button>
                <button onClick={() => page >= 3 ? "" : setPage(page + 1)} className='btn text-white bg-[#316EED]'>Get started</button>
            </div >
        </>
    );
};

export default Layout;