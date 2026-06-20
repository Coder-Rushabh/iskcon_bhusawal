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
import PrivacyPolicy from './Screens/PrivacyPolicy';
import TermsConditions from './Screens/TermsConditions';
import IYSDetailPage from './Screens/IYS';
import SpiritualStudyCenter from './Screens/SpiritualStudyCenter';
import NewTempleConstruction from './Screens/NewTempleConstruction';
import Donation from './Screens/Donation';
import ContentMedia from './Screens/ContentMedia';

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
                    <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                    <Route path="/terms-n-conditions" element={<TermsConditions />} />
                    <Route path="/iys" element={<IYSDetailPage />} />
                    <Route path="/spiritual-study-center" element={<SpiritualStudyCenter />} />
                    <Route path="/nav-mandir-nirman" element={<NewTempleConstruction />} />
                    <Route path="/donation" element={<Donation />} />
                    <Route path="/content" element={<ContentMedia />} />

                    <Route path="*" element={<NotFound />} /> 
                </Routes>
            </div>
    );
}

// AIzaSyARwxR9sgcK42llVP6S3ggf54opOqOl6H0

export default App;
