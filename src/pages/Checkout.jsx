import { useSelector } from 'react-redux';
import { CheckoutForm, SectionTitle, CartTotals } from '../components';
import { Fragment } from 'react';
import { redirect } from 'react-router-dom';
import { toast } from 'react-toastify';

export const loader = (store) => async () => {
  const user = store.getState().userState.user;

  if (!user) {
    toast.warn('You must be logged in to checkout');
    return redirect('/login');
  }
  return null;
};

const Checkout = () => {

  const cartItems = useSelector((state) => state.cartState.cartTotal);

  // if(cartItems === 0) {
  //   return <p>Your cart is empty</p>
  // }

  return (
    <Fragment>
      <SectionTitle title="Place your order" />
      <div className='mt-8 grid gap-8  md:grid-cols-2 items-start'>
        <CheckoutForm />
        <CartTotals />
      </div>
    </Fragment>
  )
}

export default Checkout