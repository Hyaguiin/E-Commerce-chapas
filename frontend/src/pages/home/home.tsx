import React from 'react'; // Certifique-se de incluir esta linha
import Header from '../../components/header/header.jsx'
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
  
  // In your Home component
  const Home = () => {
      return (
          <>
              <ErrorBoundary>
                  <Header />
              </ErrorBoundary>
              <AboutUs />
              <Footer />
          </>
      );
  };
export default Home;  