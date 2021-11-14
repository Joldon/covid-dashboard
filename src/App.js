import 'bootstrap/dist/css/bootstrap.min.css';

import ControlledTabs from './ControlledTabs';
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
          <ControlledTabs />
        </div>
      </div>
    </div>
  );
}

export default App;
