import 'bootstrap/dist/css/bootstrap.min.css';

import Dashboard from './Dashboard';
import SideBar from './components/SideBar'
import './App.css';

function App() {
  return (
    <div className="container">
      <div className='sidebar'>
        <SideBar />
      </div>
      <div className='dashboard'>
        <div className='tabs'>
          <Dashboard />
        </div>
      </div>
    </div>
  );
}

export default App;
