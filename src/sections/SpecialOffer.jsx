import { offer } from '../assets/images'
import Button from '../components/Button'  
import arrowRight from '../assets/icons/arrow-right.svg'     

const SpecialOffer = () => {
  return (
    <section className="flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container"> 
<div className="flex-1 ">
<img src={offer} width={773} height={687} 
className='object-contain w-full' />

</div>
<div className="flex flex-1 flex-col">
<h2 className='font-palanquin text-4xl capitalize font-bold lg:max-w-lg'>
  <span className='text-coral-red'> Special</span> Offer
  </h2>
  <p className='mt-4 lg:max-w-lg info-text'>Embark on a shopping journey that redefines your experiance with unbeatable deals. From premier selections to incredible savings, we offer unparalleled value that sets us apart.</p>
  <p className="mt-6 lg:max-w-lg info-text">Navigate a realm of possibilities designed to fullfill your unique desires, surpassing the loftiest expectations. Your journey with us is nothing short of exceptional.</p>
  <div className="mt-11 flex flex-wrap gap-4">
 <Button label="View Details" />
 <Button label="Learn More"
 borderColor="border-slate-gray"
 backgroundColor="bg-white"
 textColor="text-slate-gray"
 /> 
  </div>
 
</div>
    </section>
  )
}

export default SpecialOffer