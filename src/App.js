import SideBar from './components/SideBar'
import MultiChart from './components/MultiChart'
import './App.css';

function App() {
  return (
    <div className="container">
      <div className='sidebar'>
        <SideBar />
      </div>
      <div className='dashboard'>
        <MultiChart />
      </div>
    </div>
  );
}

export default App;
