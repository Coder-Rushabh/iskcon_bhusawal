import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Screens/Home';
import About from './Screens/About';
import Contact from './Screens/Contact';
import NotFound from './Screens/NotFound';
import Darshan from './components/Darshan';
import Shop from './Screens/Shop';
import NewTemple from './Screens/NewTemple';
import IskconBhusawal from './Screens/IskconBhusawal';
import IskconSociety from './Screens/IskconSociety';
import SrilaPrabhupada from './Screens/SrilaPrabhupad';
import WeeklyPrograms from './Screens/WeeklyPrograms';
import Activities from './Screens/Activities';

function App() {
    return (
            <div className="App">
                <Routes>
                    <Route path="/" element={<Home />} /> 
                    <Route path="/about" element={<About />} /> 
                    <Route path="/contact" element={<Contact />} /> 
                    <Route path="/darshan" element={<Darshan />} /> 
                    <Route path="/shop" element={<Shop />} /> 
                    <Route path="/new-temple" element={<NewTemple />} /> 
                    <Route path="/iskcon-bhusawal" element={<IskconBhusawal />} />
                    <Route path="/iskcon-society" element={<IskconSociety />} />
                    <Route path='/srila-prabhupada' element={<SrilaPrabhupada />} />
                    <Route path='/weekly-programs' element={<WeeklyPrograms />} />
                    <Route path="/activities" element={<Activities />} />
                    <Route path="*" element={<NotFound />} /> 
                </Routes>
            </div>
    );
}

// AIzaSyARwxR9sgcK42llVP6S3ggf54opOqOl6H0

export default App;
