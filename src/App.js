import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import Content from './components/Content/Content';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Sidebar/>
      <div className="contain">
        <Content/>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
