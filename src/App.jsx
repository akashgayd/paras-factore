
import Home from "./componant/Home/home";
import ContactForm from "./componant/pages/contact_us/contact";
import { Routes, Route } from "react-router-dom";
import MainAbout from "./componant/pages/about/About";
import Services from "./componant/pages/servieces/servies";
const App = () => {
  return (
    <>
    <Routes>
      <Route path="/contact" element={<ContactForm />} />
      <Route path="/About" element={<MainAbout />} />
      <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
    </Routes> 


     

    </>
  )
}

export default App;