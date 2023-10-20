/* eslint-disable react/no-unescaped-entities */
import {BiSun} from 'react-icons/bi'
import {BsLightningCharge} from 'react-icons/bs'
import {IoWarningOutline} from 'react-icons/io5'
export default function HomePage() {
  return (
    <main className="flex flex-col items-center justify-center text-white h-screen px-2">
      <h1 className="text-5xl font-bold mb-20">ChatGPT</h1> 
      <div className="flex space-x-2 text-center">
        <div>
          <div className="flex flex-col items-center justify-center mb-5">
            <BiSun size={28} />
            <h2>Examples</h2>
          </div>
          <div className='space-y-2'>
            <p className='infoText'>"Explain Something to me."</p>
            <p className='infoText'>"What is the difference between a dog and a cat?"</p>
            <p className='infoText'>"What is the color of the sun?"</p>
          </div>
        </div>

        <div>
          <div className="flex flex-col items-center justify-center mb-5">
          <BsLightningCharge size={28} />
            <h2>Capabilities</h2>
          </div>
          <div className='space-y-2'>
            <p className='infoText'>"Change tge ChatGPT Model to use."</p>
            <p className='infoText'>"Messages are stored in Firebase's Firestore"</p>
            <p className='infoText'>"Hot Toast notifications when ChatGPT is thinking!"</p>
          </div>
        </div>

        <div>
          <div className="flex flex-col items-center justify-center mb-5">
          <IoWarningOutline size={28} />
            <h2>Limitations</h2>
          </div>
          <div className='space-y-2'>
            <p className='infoText'>"May occasionally generate incorrect information."</p>
            <p className='infoText'>"May occasionally produce harmful instructions or biased content."</p>
            <p className='infoText'>"Limited knowledge of the world and events after 2021"</p>
          </div>
        </div>

        
      </div>
    </main>
  )
}


{/* 
<div className="flex flex-col items-center">
  

</div>
<div className="flex flex-col items-center">
  <BsLightningCharge />
  <h2>Capabilities</h2>
</div>
<div className="flex flex-col items-center">
  <IoWarningOutline />
  <h2>Limitations</h2>
</div> 
*/}