import { useDispatch, useSelector } from 'react-redux';
import { deleteItem, getCart } from './cartSlice';
import Button from '../../ui/Button';

function DeleteItem({ pizzaId }) {
  const dispatch = useDispatch();

  return (
    <Button type="small" onClick={() => dispatch(deleteItem(pizzaId))}>
      Delete
    </Button>
  );
}

export default DeleteItem;
