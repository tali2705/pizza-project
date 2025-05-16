import { Link } from 'react-router-dom';
import LinkButton from '../../ui/LinkButton';

function EmptyCart() {
  return (
    <div className="px-4 py-3">
      <LinkButton to="/menu">&larr; Back to menu</LinkButton>

      <p className="mt-7 rounded-2xl bg-stone-200 px-4 py-3 font-semibold text-stone-700">
        Your cart is empty. Go back to menu and start adding some pizzas! :)
      </p>
    </div>
  );
}

export default EmptyCart;
