import { formatCurrency } from '../../utils/helpers';

function OrderItem({ item, isLoadingIngredients, ingredients }) {
  const { id, quantity, name, totalPrice } = item;
  return (
    <li className="space-y-3 py-3">
      <div className="justify=between flex items-center gap-4 text-sm">
        <p>
          <span>{quantity}&times;</span> {name}
        </p>
        <p>{formatCurrency(totalPrice)}</p>
      </div>
      <p className="text-sm capitalize italic text-stone-500">
        {isLoadingIngredients ? 'Loading...' : ingredients?.join(', ')}
      </p>
    </li>
  );
}

export default OrderItem;
