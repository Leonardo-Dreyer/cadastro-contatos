import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ListContacts from './pages/List';
export default function Routers() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/list-contacts' element={<ListContacts/>} />
            </Routes>
        </BrowserRouter>
    );
}