import Navbar from "./components/header/Navbar";
import {Routes,Route} from "react-router-dom";
import AppMaster from "./components/AppMaster";
import Integrations from "./components/Integrations";
import DataFlow from "./components/DataFlow";
import Reports from "./components/Reports";
import Contact from "./components/Contact";
import Help from "./components/Help";

function App() {
  return (
    <>
  <Navbar/>
    <Routes>
    {/* <Route path="/" element={<Navbar/>}/> */}
    <Route path="/app-master" element={<AppMaster/>}/>
    <Route path="/integrations" element={<Integrations/>}/>
    <Route path="/data-flow" element={<DataFlow/>}/>
    <Route path="/reports" element={<Reports/>}/>
    <Route path="/contacts" element={<Contact/>}/>
    <Route path="/help" element={<Help/>}/>

    </Routes>
      
    </>
  );
}

export default App;
