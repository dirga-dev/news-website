import 'bootstrap/dist/css/bootstrap.min.css'
import { Route, Routes } from 'react-router-dom';
import Navigation from './components/Navbar';
import SidebarLeft from './components/SidebarLeft';
import SidebarRight from './components/SidebarRight';
import CovidNews from './pages/Covid/Covid';
import ProgrammingNews from './pages/Programming/Programming';
import Saved from './pages/Saved/Saved'
import Footer from './components/Footer/Footer';
import IndonesiaPage from './pages/Indonesia/Indonesia';
import AllPage from './pages/All/All';


function App() {
  return (
    <div className="App">
      <Navigation/>
      <SidebarLeft/>
      <SidebarRight />
      <Routes>
        <Route path="/all" element={<AllPage />} />
        <Route path="/" element={<IndonesiaPage />} />
        <Route path="/programming" element={<ProgrammingNews />} />
        <Route path="/covid19" element={<CovidNews />} />
        <Route path="/saved" element={<Saved/>} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
