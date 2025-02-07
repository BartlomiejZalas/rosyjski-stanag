import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Layout } from './ui/Layout';
import { Words } from './pages/Words';
import { Conjugation } from './pages/Conjugation';
import { ConjugationNoun } from './pages/ConjugationNoun';

function App() {
    return (
        <Routes>
            <Route path="/" element={<Layout/>}>
                <Route index element={<Home/>}/>
                <Route path="slowka" element={<Words/>}/>
                <Route path="odmiana" element={<Conjugation/>}/>
                <Route path="odmiana-rzeczownik" element={<ConjugationNoun/>}/>
            </Route>
        </Routes>
    )
}

export default App
