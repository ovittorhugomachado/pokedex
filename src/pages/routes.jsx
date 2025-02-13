import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './home';
import { Details } from './details';


export const AppRoutes  = () => (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/pokemon/:name" element={<Details />} />
    </Routes>
  </BrowserRouter>
  );


