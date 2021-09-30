import './scss/styles.scss';
import Navbar from './sections/navbar';
import { ComponentStateProvider } from './Contexts/ComponentStateContext';
import MainBody from './sections/mainBody';
import Footer from './sections/footer';


function App() {

  return (
    <div className="App" >
      <ComponentStateProvider>
        <Navbar />
        <MainBody />
        <Footer />
      </ComponentStateProvider>
    </div>
  );
}

export default App;