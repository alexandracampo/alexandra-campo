import '../styles/App.scss';
import Landing from './Landing';
import Principal from './Principal';

import { Route, Routes } from 'react-router-dom'



function App() {


  return (


    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/Principal" element={<Principal />} />
      </Routes>


    </>


  );
};

export default App;