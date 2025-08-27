import React, { useState } from 'react';
import EcoLandingPage from './components/EcoLandingPage';
import EcoLoginPage from './components/EcoLoginPage';
import EcoCadastroPage from './components/EcoCadastroPage';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('landing');

  const renderPage = () => {
    switch(currentPage) {
      case 'login':
        return <EcoLoginPage />;
      case 'cadastro':
        return <EcoCadastroPage />;
      default:
        return <EcoLandingPage />;
    }
  };

  return (
    <div className="App">
      {renderPage()}
      
      {/* Navigation Controls */}
      <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50">
        <div className="bg-black/50 backdrop-blur-sm rounded-2xl p-2 flex space-x-2">
          <button
            onClick={() => setCurrentPage('landing')}
            className={`px-4 py-2 rounded-xl font-medium transition-all duration-300 ${
              currentPage === 'landing' 
                ? 'bg-green-500 text-white' 
                : 'text-white/70 hover:text-white hover:bg-white/10'
            }`}
          >
            Landing
          </button>
          <button
            onClick={() => setCurrentPage('login')}
            className={`px-4 py-2 rounded-xl font-medium transition-all duration-300 ${
              currentPage === 'login' 
                ? 'bg-green-500 text-white' 
                : 'text-white/70 hover:text-white hover:bg-white/10'
            }`}
          >
            Login
          </button>
          <button
            onClick={() => setCurrentPage('cadastro')}
            className={`px-4 py-2 rounded-xl font-medium transition-all duration-300 ${
              currentPage === 'cadastro' 
                ? 'bg-green-500 text-white' 
                : 'text-white/70 hover:text-white hover:bg-white/10'
            }`}
          >
            Cadastro
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;