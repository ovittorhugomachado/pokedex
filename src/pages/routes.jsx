import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './home';


export const AppRoutes  = () => (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/pokemon/:name" element={<Details />} />
    </Routes>
  </BrowserRouter>
  );


