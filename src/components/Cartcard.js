import React from 'react';
import { useDispatch } from 'react-redux';
import { removeItem, increaseItem, decreaseItem } from '../slice/cartSlice';
import { PlusIcon, MinusIcon } from '@heroicons/react/outline';

const Cartcard = ({ name, price, amount, id }) => {
  const dispatch = useDispatch();
    
  return (
    <div className='container mx-auto pt-2'>
        <div className='mb-2 border-b-2 border-gray-200 pb-2'>
            <h1 className='font-semibold text-2xl'>{name}</h1>
            <p className='mb-2'>${price}</p>
            <div className='flex space-x-1 mb-3'>
                <PlusIcon 
                    className='h-5 border-2 border-gray-900 cursor-pointer' 
                    onClick={() => dispatch(increaseItem( {id} ))}
                />
                <p>{amount}</p>
                <MinusIcon 
                className='h-5 border-2 border-gray-900 cursor-pointer'
                onClick={() => {
                    if(amount === 1){
                        dispatch(removeItem(id));
                    }
                    dispatch(decreaseItem( {id} ));
                }}
                />
            </div>
            <button 
                className='px-2 py-2 rounded-md bg-red-900 text-white'
                onClick={() => dispatch(removeItem(id))}
                >remove product
            </button>
        </div>
    </div>
  )
}

export default Cartcard;