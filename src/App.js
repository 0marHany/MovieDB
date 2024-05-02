
import './App.css';
import LayOuts from './components/LayOuts/LayOuts';
import Home from './components/Home/Home';
import Movies from './components/Movies/Movies';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Register from './components/Register/Register';
import People from './components/People/People';
import TV from './components/TV/TV';
import LogOut from './components/LogOut/LogOut';
import Login from './components/Login/Login';
import { useEffect, useState } from 'react';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';
import MediaDetails from './components/MediaDetails/MediaDetails';
import { Offline } from "react-detect-offline";
import MediaProvider from './components/Context/MediaContext';



function App() {

  useEffect(() => {
    if (localStorage.getItem("UserData") !== null)
      saveUserData()
  }, [])

  const [userData, setUserData] = useState(null)
  function saveUserData() {
    const data = localStorage.getItem("UserData")
    setUserData(data)
  }

  let route = createBrowserRouter([{
    path: "/", element: <LayOuts userData={userData} setUserData={setUserData} />, children: [

      { index: true, element: < ProtectedRoute><Home /></ProtectedRoute> },
      { path: 'Movies', element: <ProtectedRoute><Movies /></ProtectedRoute> },
      { path: 'People', element: <ProtectedRoute><People /></ProtectedRoute> },
      { path: 'TV', element: <ProtectedRoute><TV /></ProtectedRoute> },
      { path: 'MediaDetails/:id/:media_type', element: <MediaDetails /> },
      { path: "/Register", element: <Register saveUserData={saveUserData} /> },
      { path: 'Login', element: <Login saveUserData={saveUserData} /> }

    ]
  }
  ])


  return <>
    <div>
      <Offline><div className='offline'><p className='offlineMessage'>Only shown offline (surprise!)</p> </div></Offline>
    </div>
    <MediaProvider>
      <RouterProvider router={route} />
    </MediaProvider>
  </>;
}

export default App;


