import Homepage from '../pages/Homepage';
import { Routes, Route } from 'react-router-dom';

const Main = () => {
    return (
        <Routes>
            <Route exact path='/' element={<Homepage />} />
        </Routes>
    )
};

export default Main;