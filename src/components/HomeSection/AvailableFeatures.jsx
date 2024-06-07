import React from 'react'
import { FaShippingFast, FaRedo, FaLock, FaHeadset } from 'react-icons/fa';

const AvailableFeatures = () => {
    
  return (
    <>
    <div className="container mx-auto my-8 flex justify-center items-center space-x-10">
      <div className="flex items-center space-x-4">
        <FaShippingFast className="text-green-600" size={32} />
        <div>
          <h3 className="font-bold">FREE DELIVERY</h3>
          <p className="text-gray-600">For all orders over Ksh.1000</p>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <FaRedo className="text-green-600" size={32} />
        <div>
          <h3 className="font-bold">90 DAYS RETURN</h3>
          <p className="text-gray-600">If goods have problems</p>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <FaLock className="text-green-600" size={32} />
        <div>
          <h3 className="font-bold">SECURE PAYMENT</h3>
          <p className="text-gray-600">100% secure payment</p>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <FaHeadset className="text-green-600" size={32} />
        <div>
          <h3 className="font-bold">24/7 SUPPORT</h3>
          <p className="text-gray-600">Dedicated support</p>
        </div>
      </div>
    </div>
    <hr className='w-3/4 mx-auto' />
    </>

  )
}

export default AvailableFeatures