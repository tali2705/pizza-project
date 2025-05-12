import { Outlet, useNavigation } from "react-router-dom";
import CartOverview from "../features/cart/CartOverview";
import Header from "./Header";
import Spinner from "./Spinner";

function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";
  console.log(navigation);
  return (
    <div className="layout">
      {isLoading && <Spinner />}
      <Header />

      <main>
        <Outlet />
      </main>
      <CartOverview />
    </div>
  );
}

export default AppLayout;
