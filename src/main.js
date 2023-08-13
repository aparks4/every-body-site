import { Route, Routes } from 'react-router-dom';
import { HomePage } from './pages/Home';
import { AboutPage } from './pages/About';
import { RetreatsPage } from './pages/Retreats';
import { ContactPage } from './pages/Contact';
import { DonatePage } from './pages/Donate';
import { EventsPage } from './pages/Events';
import { RetreatDetailPage } from './pages/RetreatDetail';


export const Main = (props) => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/retreats" element={<EventsPage />} />
            <Route path="/donate" element={<DonatePage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/events" element={<EventsPage />} />
            {/* <Route path="/events/" element={<RetreatDetailPage />} /> */}
        </Routes>
    )
}