import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Provider from './components/provider';
import Homepage from './pages/homepage';
import Introduction from './pages/introduction';
import Monitor from './pages/monitor';
import Tracker from './pages/tracker';
import Report from './pages/report';

function App() {
  return (
    <Provider>
      <BrowserRouter>
        <Routes>
          <Route path='*' element={<Navigate to='/home' replace />}/>
          <Route path='/home' element={<Homepage />} />
          <Route path='/introduction' element={<Introduction />} />
          <Route path='/monitor' element={<Monitor />} />
          <Route path='/tracker' element={<Tracker />} />
          <Route path='/report' element={<Report />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
