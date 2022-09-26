import React from 'react';
//import setIsClose modal action
import { setIsClose } from '../slice/modalSlice';
//import clearState action
import { clearState } from '../slice/cartSlice'
import { useDispatch, useSelector } from 'react-redux';

const Modal = () => {
  const dispatch = useDispatch();
  const { mode } = useSelector((store) => store.mode);
  return (
    <div className={`fixed h-screen bg-zinc-200 opacity-80 insert-0 z-50 w-screen`}>
      <div className={`pt-24 pb-24 text-center border-2 border-gray-300 w-96 mx-auto mt-24 bg-white rounded-md App ${mode}`}>
        <h1 className='font-semibold text-2xl'>Remove all products from your cart?</h1>
          <div className='space-x-2'>
              <button 
                  className='px-2 py-2 border-2 border-green-900 rounded-md'
                  onClick={() => {
                    dispatch(clearState())
                    dispatch(setIsClose());
                  }}
                  >confirm
              </button>
              <button 
                  className='px-2 py-2 border-2 border-red-600 rounded-md'
                  onClick={() => dispatch(setIsClose())}
                  >cancel
              </button>
          </div>
        </div>
    </div>
  )
}

export default Modal;