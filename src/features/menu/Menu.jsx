import { useLoaderData } from 'react-router-dom';
import { getMenu } from '../../services/apiRestaurant';
import MenuItem from './MenuItem';
function Menu() {
  const menu = useLoaderData();
  console.log(menu);
  return (
    <div className="mt-5">
      <h2 className="mb-4 border-b border-stone-300 pb-2 text-center text-3xl font-semibold uppercase md:pb-4 md:text-4xl">
        Menu
      </h2>
      <ul className="divide-y divide-stone-200 px-2">
        {menu.map((pizza) => (
          <MenuItem pizza={pizza} key={pizza.id} />
        ))}
      </ul>
    </div>
  );
}

export async function loader() {
  const menu = await getMenu();
  return menu;
}

export default Menu;
