import { useState } from "react";
import PaymentCard from "../Components/PaymentCard";
import PaymentForm from "../Modal/PaymentForm";

const Payment = () => {
    const [isSelected, setIsSelected] = useState(false)
    const [ isMonthly, setIsMonthly] = useState(true)
    return (
        <section className="max-w-7xl space-y-5 mx-auto">
            <div className="p-4 mt-10">
                <h2 className="font-bold text-xl">Chose a plan for after 30-days free trial</h2>
                <div className="p-2 mt-8 mb-6 max-w-max text-sm font-bold border brdr-primary rounded-xl flex items-center">
                    <p onClick={()=>setIsMonthly(true)} className={`px-5 py-3 ${isMonthly?'bg-[#E2EBFF] text-[#316EED]':''} transition-all duration-300 rounded-lg`}>Monthly</p>
                    <p onClick={()=>setIsMonthly(false)} className={`px-5 py-3 ${isMonthly?'':' bg-[#E2EBFF] text-[#316EED]'} transition-all duration-300 rounded-lg`}>Annually(save 57%)</p>
                </div>
                <div className="grid grid-cols-3 gap-6">
                    <div onClick={() => setIsSelected('regular')} className={`${isSelected === 'regular' ? 'border-[#316EED] bg-[#F5F8FF]' : 'brdr-primary'} transition-all duration-300 max-w-[400px] space-y-6 border rounded-md p-6`}>
                        <div className="flex justify-between">
                            <button className="px-4 py-3 border brdr-primary rounded-lg text-xl !active:scale-100">Regular</button>
                            {
                                isSelected === 'regular' && <button className="px-4 py-3 border brdr-primary rounded-lg text-[#316EED] flex items-center gap-2"> <input type="checkbox" name="checkbox" id="checkbox" /><label htmlFor="checkbox">Auto pay</label></button>
                            }
                        </div>
                        <div>
                            <h2 className="font-bold text-5xl text-[#272B35]">$99.99/mo</h2>
                            <p className="text-[#4C4A54]">Price for 1-50 unit</p>
                        </div>
                    </div>
                    <div onClick={() => setIsSelected('platinum')} className={`${isSelected === 'platinum' ? 'border-[#316EED] bg-[#F5F8FF]' : 'brdr-primary'} transition-all duration-300 max-w-[400px] space-y-6 border rounded-md p-6`}>
                        <div className="flex justify-between">
                            <button className="px-4 py-3 border brdr-primary rounded-lg text-xl !active:scale-100">Regular</button>
                            {
                                isSelected === 'platinum' && <button className="px-4 py-3 border brdr-primary rounded-lg text-[#316EED] flex items-center gap-2"> <input type="checkbox" name="checkbox" id="platinum" /><label htmlFor="platinum">Auto pay</label></button>
                            }
                        </div>
                        <div>
                            <h2 className="font-bold text-5xl text-[#272B35]">$99.99/mo</h2>
                            <p className="text-[#4C4A54]">Price for 1-50 unit</p>
                        </div>
                    </div>
                    <div onClick={() => setIsSelected('enterprize')} className={`${isSelected === 'enterprize' ? 'border-[#316EED] bg-[#F5F8FF]' : 'brdr-primary'} transition-all duration-300 max-w-[400px] space-y-6 border rounded-md p-6`}>
                        <div className="flex justify-between">
                            <button className="px-4 py-3 border brdr-primary rounded-lg text-xl !active:scale-100">Regular</button>
                            {
                                isSelected === 'enterprize' && <button className="px-4 py-3 border brdr-primary rounded-lg text-[#316EED] flex items-center gap-2"> <input type="checkbox" name="checkbox" id="enterprize" /><label htmlFor="enterprize">Auto pay</label></button>
                            }
                        </div>
                        <div>
                            <h2 className="font-bold text-5xl text-[#272B35]">$99.99/mo</h2>
                            <p className="text-[#4C4A54]">Price for 1-50 unit</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="p-4">
                <div className="flex justify-between items-center py-4">
                    <h3 className="text-xl font-bold">Payment option</h3>
                    <button onClick={() => document.getElementById('my_modal_2').showModal()} className="underline cursor-pointer text-[#316EED]">Add new card</button>
                </div>
                <div className="space-y-4">
                    <PaymentCard isMain={true} />
                    <PaymentCard />
                    <PaymentCard />
                </div>
            </div>
            <PaymentForm />
        </section>
    );
};

export default Payment;