import { Route, Routes } from 'react-router-dom';
import { HomePage } from './pages/Home';
import { AboutPage } from './pages/About';
import { TeamPage } from './pages/Team';
import { RetreatsPage } from './pages/Retreats';
import { ContactPage } from './pages/Contact';
import { DonatePage } from './pages/Donate';


export const Main = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/retreats" element={<RetreatsPage />} />
            <Route path="/donate" element={<DonatePage />} />
            <Route path="/contact" element={<ContactPage />} />
        </Routes>
    )
}