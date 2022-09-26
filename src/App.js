import React, {useEffect} from 'react';
import Dashboard from './components/Dashboard';
import Navbar from './components/Navbar';
import { useSelector, useDispatch } from 'react-redux';
import { calculate, getCartItems } from './slice/cartSlice';
import Modal from './components/Modal';

function App() {
  const {cartItems} = useSelector((store) => store.cart);
  const { isOpen } = useSelector((store) => store.modal);
  const { mode } = useSelector((store) => store.mode);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCartItems);
  }, [dispatch]);

  useEffect(() => {
    dispatch(calculate());
  }, [cartItems, dispatch]);

  return (
    <div className={`App ${mode}`}>
      {isOpen && <Modal />}
      <Navbar />
      <Dashboard />
    </div>
  );
}

export default App;
