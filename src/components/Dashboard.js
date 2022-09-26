import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import Cartcard from './Cartcard';
import { setIsOpen } from '../slice/modalSlice';

const Dashboard = () => {
    const dispatch = useDispatch();
    const { cartItems, total, amount, isLoading } = useSelector((store) => store.cart);

    if(isLoading){
      return (
        <h1 className='mt-2 font-semibold text-center text-gray-900 text-2xl'>loading...</h1>
      )  
    }

    if(amount < 1){
        return (
            <div>
                <h1 className='mt-2 font-semibold text-center text-red-600 text-2xl'>Your cart is Empty :(</h1>
                <div className='flex justify-around items-center mb-3'>
                    <h2 className='font-semibold'>Total</h2>
                    <p className='font-semibold'>${total}</p>
                </div>
                <hr />
                <div className='text-center pb-5'>
                    <button 
                        className='px-2 py-3 bg-green-900 rounded-md text-white ml-auto mt-5'
                        >clear cart
                    </button>
                </div>
            </div>
            
        )
    } 

  return (
    <div>
        {cartItems.map((item) => {
            return <Cartcard key={item.id} {...item} />
        })}

        <div className='flex justify-around items-center'>
            <h2 className='font-semibold'>Total</h2>
            <p className='font-semibold'>${total}</p>
        </div>
        <div className='text-center pb-5'>
            <button 
                className='px-2 py-3 bg-green-900 rounded-md text-white mt-5'
                onClick={() => dispatch(setIsOpen())}>clear cart
            </button>
        </div>
    </div>
  )
}

export default Dashboard;