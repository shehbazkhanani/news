import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from '../Screen/Home'
import Detail from '../Screen/Detail';

function appRoutes () {
    return (
       <>

       <Router>
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='Detail' element={<Detail/>} />
        </Routes>
       </Router>

       </>
    )   
   }
   
   export default appRoutes