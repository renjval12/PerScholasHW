import './App.css';
import TopContent from './topContentComp';
import NavSideBar from './navSideBar';
import BottomComp from './bottomContent';

function App() {
  return (
    <div className="App">
      <TopContent />
      <NavSideBar />
      <BottomComp />
    </div>
  );
}

export default App;
