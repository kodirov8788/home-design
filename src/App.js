import './App.css';
import FooterTop from './components/footerTop/FooterTop';
import Latest from './components/Latest/Latest';
import Footer from './components/footer/Footer';
import Our from './components/our/Our';


function App() {
  return (
    <div className="La">
      <Latest />
      <FooterTop />
      <Footer />
      <Our />
    </div>
  );
}

export default App;
