import Sidebar from "./components/Sidebar.jsx";
import HomePage from "./pages/HomePage.jsx";
import {Route, Routes} from "react-router-dom";
import FavouritesPage from "./pages/FavouritesPage.jsx";

function App() {

  return (
      <div className='flex'>
          <Sidebar />
          <Routes>
          <Route path='/' element={<HomePage />} />
              <Route path='/favorites' element={<FavouritesPage/>} />
          </Routes>
      </div>
  )
}

export default App
