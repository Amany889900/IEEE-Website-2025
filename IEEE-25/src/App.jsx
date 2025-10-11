import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Workshops from "./Pages/Workshops/Workshops";
import EventTimeline from "./Pages/Events/EventTimeline";
import OurTeam from "./Pages/OurTeam/OurTeam";
import ContactUs from "./Pages/ContactUs/ContactUs";
import Footer from "./Components/Footer";
import Details from "./Pages/Details/Details"; // ✅ Import your new component

// ✅ Main layout with all sections (your original one-page design)
function MainLayout() {
  return (
    <div className="bg-[#00396B] w-full">
      <Navbar />
      <section id="home" name="home">
        <Home />
      </section>
      <section id="about" name="about">
        <About />
      </section>
      <section id="workshops" name="workshops">
        <Workshops />
      </section>
      <section id="events" name="events">
        <EventTimeline />
      </section>
      <section id="team" name="team">
        <OurTeam />
      </section>
      <section id="contact" name="contact">
        <ContactUs />
      </section>
      <Footer />
    </div>
  );
}

// ✅ Separate page for Analog Workshop Details
function DetailsLayout({ children }) {
  return (
    <div className="bg-[#00396B] w-full min-h-screen">
      <Navbar />
      <div className="py-10">{children}</div>
      <Footer />
    </div>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />, // the main single-page layout
  },
  {
    path: "/details/:id",
    element: (
      <DetailsLayout>
        <Details />
      </DetailsLayout>
    ),
  },
  {
    path: "*",
    element: (
      <div className="text-white text-center py-20 text-3xl bg-[#00396B] h-screen flex justify-center items-center">
        404 - Page Not Found
      </div>
    ),
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
