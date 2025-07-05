import { useRef } from "react";
import InfoBar from "../Components/InfoBar";
import InputPhoto from "../Components/InputPhoto";

const Condominiums = () => {
    const largeImageRef = useRef(null)
    const imageRef2 = useRef(null)
    const imageRef3 = useRef(null)
    const imageRef4 = useRef(null)
    const imageRef5 = useRef(null)
    const imageRef6 = useRef(null)
    const imageRef7 = useRef(null)
    const imageRef8 = useRef(null)
    const imageRef9 = useRef(null)
    const imageRef10 = useRef(null)
    const imageRef11 = useRef(null)
    const imageRef12 = useRef(null)
    const imageRef13 = useRef(null)
    const data = [
        { data1: ['ss'] },
        { data2: [] },
        { data3: [] },
        { data4: [] },
        { data5: [] },
        { data6: [] },
        { data7: [] },
        { data8: [] },
        { data9: [] },
        { data10: [] },
        { data11: [] },
        { data12: [] },
        { data13: [] },
    ]

    const handleModal = (id) => {
        const modalData = data.find(d => d[id])
        console.log(modalData);
        document.getElementById('my_modal_1').showModal()
    }
    return (
        <section className="max-w-7xl mx-auto ">
            <div className="pb-8 pt-10 font-bold text-2xl txt-primary">Condominiums information</div>
            <div className="grid mb-6 grid-cols-2 gap-6">
                <InfoBar handleModal={handleModal} modalId={'data1'} title={'Property address'} label={'Required'} isRequired={true} />
                <InfoBar handleModal={handleModal} title={'Pet fees'} label={'Optional, add fees if you allow pet'} isRequired={false} />
                <InfoBar handleModal={handleModal} title={'Leasing info'} label={'Required'} isRequired={true} />
                <InfoBar handleModal={handleModal} title={'Parking'} label={'Optional'} isRequired={false} />
                <InfoBar handleModal={handleModal} title={'Charges'} label={'Required'} isRequired={true} />
                <InfoBar handleModal={handleModal} title={'Nearest educational institution'} label={'Optional but recommended'} isRequired={false} />
                <InfoBar handleModal={handleModal} title={'Rent frequency & payment reminder'} label={'Required'} isRequired={true} />
                <InfoBar handleModal={handleModal} title={'Nearest stations'} label={'Optional but recommended'} isRequired={false} />
                <InfoBar handleModal={handleModal} title={'Application agreement'} label={'Optional'} />
                <InfoBar handleModal={handleModal} title={'Nearest landmark'} label={'Optional but recommended'} />
                <InfoBar handleModal={handleModal} title={'About the property'} label={'Optional'} />
                <InfoBar handleModal={handleModal} title={'Utilities provider'} label={'Optional but recommended'} />
                <InfoBar handleModal={handleModal} title={'Community’s amenity/features'} label={'Optional but recommended'} />
            </div>
            <div>
                <div className="font-semibold text-lg p-5 border rounded-t-xl brdr-primary">Property gallery <span className="txt-secondary">(Its not unit photo)*</span></div>
                <div className="flex gap-6 border p-5 rounded-b-xl brdr-primary">
                    <div>
                        <h3 className="font-semibold mb-3">Featured photos*</h3>
                        <div className="grid grid-cols-4 gap-3 max-w-max">
                            <InputPhoto imageRef={largeImageRef} isLarge={true} />
                            <InputPhoto imageRef={imageRef2} />
                            <InputPhoto imageRef={imageRef3} />
                            <InputPhoto imageRef={imageRef4} />
                            <InputPhoto imageRef={imageRef5} />
                        </div>
                    </div>
                    <div>
                        <h3 className="font-semibold mb-3">More photos <span className="txt-secondary">(optional)</span></h3>
                        <div className="grid grid-cols-4 gap-3 max-w-max">
                            <InputPhoto imageRef={imageRef6} />
                            <InputPhoto imageRef={imageRef7} />
                            <InputPhoto imageRef={imageRef8} />
                            <InputPhoto imageRef={imageRef9} />
                            <InputPhoto imageRef={imageRef10} />
                            <InputPhoto imageRef={imageRef11} />
                            <InputPhoto imageRef={imageRef12} />
                            <InputPhoto imageRef={imageRef13} />
                        </div>
                    </div>
                </div>
            </div>
            {/* <div>
                <div><h3>Property gallery(it'snot unit photo)*</h3></div>
                <div>
                    <div>
                        <h4>Featured photos<span className="text-red-400">*</span></h4>
                        <div>

                        </div>
                    </div>
                    <div>

                    </div>
                </div>
            </div> */}
            {/* modal */}
            <dialog id="my_modal_1" className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Hello!</h3>
                    <p className="py-4">Press ESC key or click the button below to close</p>
                    <div className="modal-action">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </section>
    );
};

export default Condominiums;