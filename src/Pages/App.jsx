import { LuBuilding2, LuHouse } from 'react-icons/lu';
import PropertyTypeCard from '../Components/PropertyTypeCard';
import { BiBuildingHouse } from 'react-icons/bi';
import { IoKeyOutline } from 'react-icons/io5';
import { LiaUserTieSolid } from 'react-icons/lia';
import { BsBuildings } from 'react-icons/bs';
import { useRef, useState } from 'react';
import FileInput from '../Components/fileInput';
import NumberInput from '../Components/NumberInput';
import Input from '../Components/Input';
import OptionsSelect from '../Components/OptionsSelect';
import Checkbox from '../Components/Checkbox';

const App = () => {
    const [role, setRole] = useState('')
    const [propertyType, setPropertyType] = useState('')

    return (
        <div className='max-w-[1440px] mx-auto'>
            {/* home section */}
            <div className='mt-10 flex flex-col gap-8'>
                <div className='flex flex-col gap-6'>
                    <div>
                        <h2 className='text-2xl font-bold'>Property type</h2>
                    </div>
                    <div className='grid gap-6 grid-cols-3'>
                        <div onClick={() => setPropertyType('single-house')}><PropertyTypeCard isActive={propertyType === 'single-house' && true} icon={<LuHouse className="text-2xl" />} title={'Single House Property'} dsc={'Single unit house for single family'} /></div>
                        <div onClick={() => setPropertyType('apartments')}><PropertyTypeCard isActive={propertyType === 'apartments' && true} icon={<BiBuildingHouse className="text-2xl" />} title={'Apartments complex'} dsc={'Multiple unit house for families'} /></div>
                        <div onClick={() => setPropertyType('condominiums')}><PropertyTypeCard isActive={propertyType === 'condominiums' && true} icon={<LuBuilding2 className="text-2xl" />} title={'Condominiums'} dsc={'Multiple unit house for families'} /></div>
                    </div>
                </div>
                <div className='flex flex-col gap-6'>
                    <div>
                        <h2 className='text-2xl font-bold'>Select your role</h2>
                    </div>
                    <div className='grid gap-6 grid-cols-3'>
                        <div onClick={() => setRole('landlord')}><PropertyTypeCard isActive={role === 'landlord' && true} icon={<IoKeyOutline className="text-2xl" />} title={'Landlord'} dsc={'Owner of the property'} /></div>
                        <div onClick={() => setRole('realtor')}><PropertyTypeCard isActive={role === 'realtor' && true} icon={<LiaUserTieSolid className="text-2xl" />} title={'Realtor'} dsc={'Manage property on behalf on owner'} /></div>
                        <div onClick={() => setRole('company')}><PropertyTypeCard isActive={role === 'company' && true} icon={<BsBuildings className="text-2xl" />} title={'Property management company'} dsc={'For management company'} /></div>
                    </div>
                </div>
            </div>
            {
                role && <div>
                    <InfoComponent sectionTitle={role === 'landlord' ? 'Proof of ownership' : (role === 'realtor' ? "Realtor verification" : (role === 'company' && 'Company & office info'))} role={role} />
                </div>
            }
        </div>
    );
};

export default App;


export const InfoComponent = ({ sectionTitle, role }) => {
    const ownershipDoc = useRef(null)
    const additionalDoc = useRef(null)
    const agreementDocRef = useRef(null)
    const ownerAgreement = useRef(null)

    return (
        <div className='mt-8'>
            <div className='text-[#6F6C6A] border brdr-primary rounded-t-xl px-4 py-[12px] bg-[#F4F4F4]'>
                <h3>{sectionTitle}</h3>
            </div>
            <div className='p-4 border brdr-primary rounded-b-xl'>
                {/* landlord */}
                {
                    role === 'landlord' && <div className='grid grid-cols-3 gap-4 items-center'>
                        <FileInput title={'Ownership doc*'} id={'ownership-doc'} reference={ownershipDoc} />
                    </div>
                }
                {/* realtor */}
                {role === 'realtor' &&
                    <div className='grid grid-cols-3 gap-4 items-center'>
                        <NumberInput title={'Lenience number*'} placeholderText={'0000000000'} id={'lenience-number'} />
                        <FileInput title={'Additional documents for realtor'} id={'additionalDoc'} reference={additionalDoc} />
                        <FileInput title={'Agreement with landlord*'} id={'agreement-doc'} reference={agreementDocRef} />
                    </div>}

                {/* company info */}
                {role === 'company' && <div className='grid grid-cols-4 gap-4 items-center'>
                    <Input title={'Company name*'} type={'text'} placeholderText={'Runyan trade center'} id={'company-name'} />
                    <Input title={'Company Identifier(EIN/TIN)*'} placeholderText={'Name'} type={'text'} id={'company-identifier'} />
                    <Input title={'Your job title*'} placeholderText={'Manager'} type={'text'} id={'job-title'} />
                    <FileInput title={'Agreement with landlord/owner*'} reference={ownerAgreement} id={'owner-agreement'} />
                    <OptionsSelect id={'country'} title={'Country/Region*'} optionTitle={'Choose country'} options={['Bangladesh', 'America', 'Australia', 'Canada',]} />
                    <Input title={'Street address*'} placeholderText={'111 Austin Ave'} type={'text'} id={'address'} />
                    <Input title={'Apt, suit, unit (if applicable)'} placeholderText={'3050'} type={'text'} id={'apt-suit'} />
                    <Input title={'Phone number*'} placeholderText={'+880'} type={'text'} id={'phone-number'} />
                    <Input title={'Contact email*'} placeholderText={'example@email.com'} type={'email'} id={'email'} />
                    <Input title={'City/Town*'} placeholderText={'Dallas'} type={'text'} id={'city'} />
                    <OptionsSelect id={'state'} title={'State/Territory*'} optionTitle={'Choose state'} options={['Sylhet', 'Dhaka', 'Barishal', 'Kumilla',]} />
                    <Input title={'Zip code*'} placeholderText={'75061'} type={'number'} id={'zip-code'} />
                </div>}
            </div>
            <Checkbox title={'Accept RentYard property adding terms & condition'} id={'terms'}/>
        </div>
    )
}