import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './i18n/index.js'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop.jsx';
import InstallPrompt from './components/InstallPrompt.jsx';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Header />
      <ScrollToTop>
        <App />
      </ScrollToTop>
      <Footer />
      <InstallPrompt />
    </BrowserRouter>
  </StrictMode>,
)
