const Modal = ({ modalData }) => {

    return (
        <dialog id="my_modal_1" className="modal">
            <div className="modal-box !p-0 max-w-max">
                <button onClick={() => document.getElementById('my_modal_1').close()} className="btn btn-sm btn-circle absolute right-3 top-3">✕</button>
                <h3 className="font-semibold txt-secondary px-4 py-5 bg-[#F4F4F4]">{modalData?.title}</h3>
                <div className=" px-4 py-5">
                    <div className={`${modalData.flex ? 'flex flex-wrap' : 'grid'} ${modalData?.col === 2 ? "grid-cols-2" : (modalData?.col === 3 ? "grid-cols-3" : 'grid-cols-1')} gap-4 max-w-3xl`}>
                        {modalData?.data?.map(data => data)}
                    </div>
                    {/* if there is a button in form, it will close the modal */}
                    <div className="modal-action">
                        <form method="dialog">
                            <button className="btn text-white bg-[#316EED]">Add</button>
                        </form>
                    </div>
                </div>
            </div>
        </dialog>
    );
};

export default Modal;