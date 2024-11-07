import React, { useState, useEffect } from 'react'; // Inclua useState e useEffect
import Header from '../../components/header/header.jsx';
import AboutUs from '../../components/aboutUs/aboutUs.jsx';
import Footer from '../../components/footer/footer.jsx';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Error caught in Error Boundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong with the Header.</h1>;
    }

    return this.props.children; 
  }
}

const Home = () => {
  const [loading, setLoading] = useState(true); // Estado de carregamento

  useEffect(() => {
    // Simula o carregamento da página (ajuste conforme necessário)
    setTimeout(() => setLoading(false), 1000); // Tempo de carregamento simulado de 1 segundo
  }, []);

  return (
    <>
      {loading ? (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50">
          <div className="spinner-border animate-spin rounded-full border-t-4 border-yellow-500 w-16 h-16"></div>
        </div>
      ) : (
        <>
          <ErrorBoundary>
            <Header />
          </ErrorBoundary>
          <AboutUs />
          <Footer />
        </>
      )}
    </>
  );
};

export default Home;
