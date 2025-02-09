import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Layout } from './ui/Layout';
import { Words } from './pages/Words';
import { Conjugation } from './pages/Conjugation';
import { ConjugationNoun } from './pages/ConjugationNoun';
import { KeyboardMappingProvider } from './ui/KeyboardMapping';

function App() {
    return (
        <KeyboardMappingProvider>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="slowka" element={<Words />} />
                    <Route path="odmiana" element={<Conjugation />} />
                    <Route path="odmiana-rzeczownik" element={<ConjugationNoun />} />
                </Route>
            </Routes>
        </KeyboardMappingProvider>
    )
}

export default App
