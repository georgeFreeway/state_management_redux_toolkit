import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ShoppingCartIcon, LightBulbIcon } from '@heroicons/react/outline'
import { changeMode } from '../slice/modeSlice';

const Navbar = () => {
  const { amount } = useSelector((store) => store.cart);
  const { mode } = useSelector((store) => store.mode);

  const dispatch = useDispatch();
  return (
    <div>
        <nav className='p-6 bg-gray-800 flex justify-around items-center'>
            <h1 className='text-white font-semibold text-2xl'>My Cart</h1>
            <div className='flex'>
                <LightBulbIcon className='h-5 text-white' onClick={() => dispatch(changeMode())}/>
                <ShoppingCartIcon className='h-5 text-white'/>
                <div className={`h-5 w-5 rounded-full text-center relative bottom-3 font-semibold App ${mode}`}>{amount}</div>
            </div>
        </nav>
    </div>
  )
}

export default Navbar;