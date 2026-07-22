import { createBrowserRouter } from "react-router-dom";
 import AppLayout from "../layout.tsx/Applayout.tsx";
 import Home from "../pages/Home.tsx";
 import Ourteam from "../pages/Ourteam.tsx";
 import ServiceDetail from "../pages/Servicedetail.tsx";
 import AboutUs1 from "../pages/Aboutus1.tsx";
 import VenuePage from "../pages/Venue.tsx";
 import ContactUsPage from "../pages/Contact.tsx";
 import ImageSlider from "../pages/Gallery.tsx";
 
 
export const Errror404 = () => {
  return <div>Page not found</div>;
};

const routes = createBrowserRouter([
  {
    errorElement: <Errror404 />,
  },
  {
    element: <AppLayout />,
    children: [
      { path: "", element: <Home /> },
      { path: "ourteam", element: <Ourteam /> },
      { path: "aboutus1", element: <AboutUs1 /> },
      { path: "contactus", element: <ContactUsPage /> },
      { path:"/services/:serviceId", element:<ServiceDetail />},
       { path: "venue", element: <VenuePage />},
        {path: "ImageSlider", element: <ImageSlider />},
    ],
  },

 
]);
export default routes;
