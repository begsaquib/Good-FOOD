import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { lazy, Suspense,  useState } from "react";
import Header from "./component/Header";
import Body from "./component/Body";
import Contact from "./component/Contact";
import RestaurantMenu from "./component/RestaurantMenu";
import Error from "./component/Error";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./component/cart";

const Grocery = lazy(() => import("./component/Grocery"));
const About = lazy(() => import("./component/About"));

const Applayout = () => {
  const [UserName, setUserName] = useState("mirzaa");

  // useEffect(() => {
  //   //API fetch
  //   const data = {
  //     name: "mirzaa",
  //   };
  //   setUserName(data.name);
  // }, []);

  return (
    <Provider store={appStore}>
    <UserContext.Provider value={{ loggedInuser: UserName,setUserName}}>
      <div className="app">
        <Header />

        <Outlet />
      </div>
    </UserContext.Provider>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Applayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/About",
        element: (
          <Suspense fallback={<h1>Loading.....</h1>}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/Contact",
        element: <Contact />,
      },
      {
        path: "/Grocery",
        element: (
          <Suspense fallback={<h1>Loading.....</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/Restaurants/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "/Cart",
        element: <Cart />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
