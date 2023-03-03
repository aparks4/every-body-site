import { Route, Routes } from 'react-router-dom';
import { HomePage } from './pages/Home';
import { AboutPage } from './pages/About';
import { TeamPage } from './pages/Team';
import { RetreatsPage } from './pages/Retreats';
import { TestPage } from './pages/Test';


export const Main = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/team" element={<TeamPage />} />
            <Route path="/retreats" element={<RetreatsPage />} />
            <Route path="/test" element={<TestPage />} />
        </Routes>
    )
}