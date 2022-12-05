import { Login } from "@mui/icons-material";

import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from "./pages/home/Home";
import List from "./pages/list/List"
import New from "./pages/new/New"
import Single from "./pages/singlepage/Single";
function App() {
  return (
    <div>
   <BrowserRouter>
   <Routes>

    <Route path="/">

      <Route index element={<Home/>}/>
      <Route path="login" element={<Login/>}/>

      <Route path="user">
       <Route index element={<List/>}/>
        <Route path=":userId" element={<Single/>}/>
      <Route path="new" element={<New/>}/>
      </Route>

      <Route path="products">
      <Route index element={<List/>}/>
        <Route path=":productId" element={<Single/>}/>
      <Route path="new" element={<New/>}/>
      </Route>


       </Route>
   </Routes>
   
   </BrowserRouter>
    </div>
  );
}

export default App;
