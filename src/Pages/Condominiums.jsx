import { useRef, useState } from "react";
import InfoBar from "../Components/InfoBar";
import InputPhoto from "../Components/InputPhoto";
import Modal from "../Modal/Modal";
import Input from "../Components/Input";
import OptionsSelect from "../Components/OptionsSelect";
import Checkbox from "../Components/Checkbox";
import { IoIosInformationCircleOutline } from "react-icons/io";
import FileInput from "../Components/fileInput";
import Textarea from "../Components/Textarea";
import FeatureTags from "../Components/FeatureTags";
import { PiFanLight, PiFireExtinguisher, PiHairDryerLight, PiThermometerHotLight, PiTreeThin } from "react-icons/pi";
import { LuCable, LuCircleParking } from "react-icons/lu";
import { LiaFanSolid } from "react-icons/lia";
import { MdBalcony } from "react-icons/md";
import { CgSmartHomeRefrigerator } from "react-icons/cg";
import { GiWoodBeam } from "react-icons/gi";
import { AiOutlineFire } from "react-icons/ai";
import { RiFirstAidKitLine } from "react-icons/ri";
import EmbededOptions from "../Components/EmbededOptions";

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
  const fileRef = useRef(null)
  const inp = useRef(null)
  console.log(inp);
  const data = [
    {
      id: 1,
      title: 'Property address',
      col: 3,
      data: [
        <Input title={'Property name as identifier*'} placeholderText={'Dallas apartments complex'} id={'property-name-as-identifier'} type={'text'} />,
        <Input title={'Total apartment unit*'} placeholderText={'50'} id={'apartment-unit'} type={'text'} />,
        <Input title={'Property website(optional)'} placeholderText={'https//:'} id={'property-website'} type={'url'} />,
        <OptionsSelect id={'country'} title={'Country/Region*'} optionTitle={'Choose country'} options={['Bangladesh', 'America', 'Australia', 'Canada',]} />,
        <Input title={'Street address*'} placeholderText={'111 Austin Ave'} id={'street-address'} type={'text'} />,
        <Input title={'Apt, suite, unit (if applicable)'} placeholderText={'123'} id={'apt-suit'} type={'text'} />,
        <Input title={'City/Town*'} placeholderText={'Dallas'} type={'text'} id={'city'} />,
        <OptionsSelect id={'state'} title={'State/Territory*'} optionTitle={'Choose state'} options={['Sylhet', 'Dhaka', 'Barishal', 'Kumilla',]} />,
        <Input title={'Zip code*'} placeholderText={'75061'} type={'number'} id={'zip-code'} />

      ]
    },
    {
      id: 2,
      col: 3,
      title: 'Pet fees',
      data: [
        <OptionsSelect id={'pet-type'} title={'Pet type*'} optionTitle={'Select'} options={['Dog', 'Cat', 'Tiger', 'Dragon',]} />,
        <Input extraStyle={'grid-cols-3'} title={'Max weight(LB)*'} placeholderText={'100'} id={'pet-max-weight'} type={'number'} />,
        <Input extraStyle={'grid-cols-3'} title={'One time pet fee*'} placeholderText={'$100'} id={'pet-fee'} type={'text'} />,
        <Input title={'Pet security deposit*'} placeholderText={'$100'} id={'pet-security-deposit'} type={'text'} />,
        <Input title={'Monthly pet rent'} placeholderText={'$100'} id={'monthly-pet-rent'} type={'text'} />,
      ]
    },
    {
      id: 3,
      title: 'Leasing info',
      col: 2,
      data: [
        <Input title={'Leasing manager name*'} placeholderText={'Alex johan'} id={'leasing-manager-name'} type={'text'} />,
        <Input title={'Leasing manager Phone number*'} placeholderText={'+880'} type={'text'} id={'phone-number'} />,
        <Input title={'Leasing manager email*'} placeholderText={'leasing@rentyeard.com'} type={'email'} id={'email'} />,
        <Checkbox ref={inp} title={'Address(same as property)'} id={'address-checkbox'} />
      ]
    },
    {
      id: 4,
      title: 'Parking',
      data: [
        <EmbededOptions />,
        <Textarea placeholder={'Write parking overview'} id={'parking-overview'} />,
      ]
    },
    {
      id: 5,
      col: 2,
      title: 'Charges',
      data: [
        <OptionsSelect title={'Application fee(one-time)*'} optionTitle={'Choose fee'} options={['100$ All 18+ applicant', '150$ All 22+ applicant', '200$ All 24+ applicant', '130$ All underage applicant',]} id={'application-fee'} />,
        <Input title={'Admin fee(one-time)*'} placeholderText={'20'} type={'number'} id={'admin-fee'} />
      ],
      extra: <div className="flex items-center gap-2 font-semibold"><IoIosInformationCircleOutline /><span>Type 0 if charges not applicable</span></div>
    },
    {
      id: 6,
      title: 'Add nearest educational institution',
      col: 2,
      data: [
        <OptionsSelect id={'nearest-educational-institute'} title={'Educational Institute type*'} optionTitle={'Choose institute'} options={['High school', 'College', 'University', 'Nursery',]} />,
        <OptionsSelect id={'institute-distance'} title={'Distance from property*'} optionTitle={'Choose distant'} options={['1km', '2km', '3km', '4km',]} />,
        <Input extraStyle={'col-span-4'} title={'Educational institution name*'} placeholderText={'Enter name'} type={'text'} id={'institute-name'} />
      ]
    },
    {
      id: 7,
      col: 3,
      title: 'Rent frequency & payment reminder',
      data: [
        <OptionsSelect title={'Application fee(one-time)*'} optionTitle={'Choose'} options={['Weekly', 'Monthly', 'Yearly',]} id={'payment-reminder'} />,
        <Input title={'Rent Reminder/Statement date*'} placeholderText={'20'} type={'date'} id={'rent-reminder-date'} />,
        <Input title={'Rent due date*'} placeholderText={'20'} type={'date'} id={'rent-due-date'} />
      ]
    },
    {
      id: 8,
      col: 2,
      title: 'Add nearest stations',
      data: [
        <OptionsSelect id={'nearest-station'} title={'Nearest station type*'} optionTitle={'Select'} options={['Bus', 'Train', 'Tram',]} />,
        <OptionsSelect id={'station-distance'} title={'Distance from property*'} optionTitle={'Choose distant'} options={['1km', '2km', '3km', '4km',]} />,
        <Input extraStyle={'col-span-4'} title={'Nearest station name*'} placeholderText={'Enter name'} type={'text'} id={'station-name'} />
      ]
    },
    {
      id: 9,
      title: 'Application agreement(optional)',
      data: [
        <FileInput title={'Upload agreement'} reference={fileRef} id={'lease-agreement'} />,
        <Checkbox id={'immigrant-acceptance'} title={'Accept immigrant & international student application'} />
      ]
    },
    {
      id: 10,
      col: 2,
      title: 'Add landmark',
      data: [
        <OptionsSelect id={'nearest-landmark'} title={'Landmark type*'} optionTitle={'Select'} options={['Museum', 'Monuments', 'Waterfall',]} />,
        <OptionsSelect id={'landmark-distance'} title={'Distance from property*'} optionTitle={'Choose distant'} options={['1km', '2km', '3km', '4km',]} />,
        <Input extraStyle={'col-span-4'} title={'Landmark name*'} placeholderText={'Enter name'} type={'text'} id={'landmark-name'} />
      ]
    },
    {
      id: 11,
      title: 'About the property',
      data: [
        <Textarea placeholder={'Type message here'} id={'about-property'} />
      ]
    },
    {
      id: 12,
      col: 2,
      title: 'Utilities provider',
      data: [
        <OptionsSelect id={'utilities-provider'} title={'Utility type*'} optionTitle={'Select'} options={['Electricity', 'Gas', 'Water',]} />,
        <Input title={'Provider company name*'} placeholderText={'Enter name'} type={'text'} id={'landmark-name'} />
      ]
    },
    {
      id: 13,
      flex: 'flex-wrap',
      title: 'Community’s amenity/features',
      data: [
        <FeatureTags icon={<PiThermometerHotLight />} title={'Air conditioning'} />,
        <FeatureTags icon={<LuCable />} title={'Cable ready'} />,
        <FeatureTags icon={<PiFanLight />} title={'Ceiling fan'} />,
        <FeatureTags icon={<LiaFanSolid />} title={'High ceilings'} />,
        <FeatureTags icon={<MdBalcony />} title={'Private balcony'} />,
        <FeatureTags icon={<CgSmartHomeRefrigerator />} title={'Refrigerator'} />,
        <FeatureTags icon={<PiTreeThin />} title={'Wooded views'} />,
        <FeatureTags icon={<PiHairDryerLight />} title={'W/D hookup'} />,
        <FeatureTags icon={<GiWoodBeam />} title={'Hardwood Floor (home)'} />,
        <FeatureTags icon={<AiOutlineFire />} title={'Fireplace (home)'} />,
        <FeatureTags icon={<RiFirstAidKitLine />} title={'First aid kit'} />,
        <FeatureTags icon={<PiFireExtinguisher />} title={'Fire extinguisher'} />,
        <FeatureTags icon={<LuCircleParking />} title={'Free parking on premises'} />,
      ]
    },
  ]
  const [modalData, setModalData] = useState([])
  const handleModal = (id) => {
    const modalData = data.find(d => d.id === parseInt(id))
    setModalData(modalData)
    document.getElementById('my_modal_1').showModal()
  }
  return (
    <section className="max-w-7xl mx-auto ">
      <div className="pb-8 pt-10 font-bold text-2xl txt-primary">Condominiums information</div>
      {/* Add details section */}
      <div className="grid mb-6 grid-cols-2 gap-6">
        <InfoBar handleModal={handleModal} modalId={'1'} title={'Property address'} label={'Required'} isRequired={true} />
        <InfoBar handleModal={handleModal} modalId={'2'} title={'Pet fees'} label={'Optional, add fees if you allow pet'} isRequired={false} />
        <InfoBar handleModal={handleModal} modalId={'3'} title={'Leasing info'} label={'Required'} isRequired={true} />
        <InfoBar handleModal={handleModal} modalId={'4'} title={'Parking'} label={'Optional'} isRequired={false} />
        <InfoBar handleModal={handleModal} modalId={'5'} title={'Charges'} label={'Required'} isRequired={true} />
        <InfoBar handleModal={handleModal} modalId={'6'} title={'Nearest educational institution'} label={'Optional but recommended'} isRequired={false} />
        <InfoBar handleModal={handleModal} modalId={'7'} title={'Rent frequency & payment reminder'} label={'Required'} isRequired={true} />
        <InfoBar handleModal={handleModal} modalId={'8'} title={'Nearest stations'} label={'Optional but recommended'} isRequired={false} />
        <InfoBar handleModal={handleModal} modalId={'9'} title={'Application agreement'} label={'Optional'} />
        <InfoBar handleModal={handleModal} modalId={'10'} title={'Nearest landmark'} label={'Optional but recommended'} />
        <InfoBar handleModal={handleModal} modalId={'11'} title={'About the property'} label={'Optional'} />
        <InfoBar handleModal={handleModal} modalId={'12'} title={'Utilities provider'} label={'Optional but recommended'} />
        <InfoBar handleModal={handleModal} modalId={'13'} title={'Community’s amenity/features'} label={'Optional but recommended'} />
      </div>
      {/* Photo section */}
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

      {/* modal */}
      <Modal modalData={modalData} />
    </section>
  );
};

export default Condominiums;