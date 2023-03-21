import './App.css';
import FooterTop from './components/footerTop/FooterTop';
import Latest from './components/Latest/Latest';
import Footer from './components/footer/Footer';
import Our from './components/our/Our';
import Nav from './components/navbar/Nav';
import Main from './components/main/Main';
import Nav from './components/navbar/Nav';


function App() {
  return (
    <div className="La">
      <Nav />
      <Main />
      <Our />
      <Latest />
      <FooterTop />
      <Footer />
    </div>
  );
}

export default App;
