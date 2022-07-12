import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './styles/Layout';
import MainPage from './pages/Main';

export default function Router() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<MainPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
