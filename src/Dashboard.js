import React, { useState} from 'react';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import BarChart from './components/BarChart';

import MultiChart from './components/MultiChart';
import LineChart from './components/LineChart';


function Dashboard() {
    const [key, setKey] = useState('LineChart');
  
    return (
      <Tabs
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => setKey(k)}
        className="mb-3"
        selectedIndex={1}
      >
        <Tab eventKey="BarChart" title="BarChart">
          <BarChart />
        </Tab>
        <Tab eventKey="MultiChart" title="MultiChart">
          <MultiChart />
        </Tab>
        <Tab eventKey="LineChart" title="LineChart">
          <LineChart />
        </Tab>
      </Tabs>
    );
  }
export default Dashboard  