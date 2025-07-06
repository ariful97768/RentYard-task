import Input from "../Components/Input";

const PaymentForm = () => {
    return (
        <dialog id="my_modal_2" className="modal">
            <div className="modal-box !p-0 max-w-max">
                <button onClick={() => document.getElementById('my_modal_2').close()} className="btn btn-sm btn-circle absolute right-3 top-3">✕</button>
                <h3 className="font-semibold txt-secondary px-4 py-5 bg-[#F4F4F4]">Add new card</h3>
                <div className=" px-4 py-5">
                    <div className={`grid grid-cols-2 gap-4 max-w-3xl`}>
                        <Input title={'Name on card'} type={'text'} placeholderText={'Alex Jones'} id={'card-holder-name'} />
                        <Input title={'Card number'} type={'number'} placeholderText={'0000 0000 0000'} id={'card-number'} />
                        <Input title={'Expire date'} type={'date'} id={'card-expire-date'} />
                        <Input title={'CVC'} type={'number'} placeholderText={'123'} id={'card-cvc'} />
                    </div>
                    {/* if there is a button in form, it will close the modal */}
                    <div className="modal-action">
                        <form method="dialog">
                            <button className="btn text-white bg-[#316EED]">Save</button>
                        </form>
                    </div>
                </div>
            </div>
        </dialog>
    );
};

export default PaymentForm;