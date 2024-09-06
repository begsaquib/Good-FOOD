import { lazy, Suspense } from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import Header from "./component/Header";
import Contact from "./component/Contact";
import Body from "./component/Body";
import RestaurantMenu from "./component/Restaurantmenu";

const Grocery = lazy(() => import("./component/Grocery"));
const About = lazy(() => import("./component/About"));

// Define Layout with Outlet for nested routes
const Layout = () => (
  <div>
    <Header />
    {/* This will render the lazy-loaded pages */}
    <Suspense fallback={<div>Loading page...</div>}>
      <Outlet />
    </Suspense>
  </div>
);

function App() {
  return (
    <Routes>
      {/* Layout route */}
      <Route path="/" element={<Layout />}>
        {/* Nested routes inside the layout */}
        <Route path="/" element={<Body />} />
        <Route path="/about" element={<About />} />
        <Route path="/grocery" element={<Grocery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/restaurants/:resId" element={<RestaurantMenu />} />
      </Route>
    </Routes>
  );
}

export default App;
