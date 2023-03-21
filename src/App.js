import './App.css';
import FooterTop from './components/footerTop/FooterTop';
import Latest from './components/Latest/Latest';
import Footer from './components/footer/Footer';
import Main1 from './components/main/Main1';
import Nav from './components/navbar/Nav';


function App() {
  return (
    <div className="La">
      <Nav />
      <Main1 />
      <Latest />
      <FooterTop />
      <Footer />
    </div>
  );
}

export default App;
