import React from 'react'
import './index.css'
import ProviderWrapper from './components/ProviderWrapper/index'
import 'react-toastify/dist/ReactToastify.min.css';
import AppRoutes from './routes'
import "./index.css";

function App() {
  return (
    <ProviderWrapper >
    <AppRoutes />
  </ProviderWrapper>
)
}

export default App;
