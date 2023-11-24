import { Link } from "react-router-dom";
import { Routes, Route, Navigate }
   from "react-router";
import Assignment3 from "./a3";
import Nav from "../Nav";
import Assignment4 from "./a4";
import { Provider } from "react-redux";
import store from "./store";
import Assignment5 from "./a5";
import Assignment6 from "./a6";
function Labs() {
   return (
      <Provider store={store}>
         <div>
            <Nav />
            <Routes>
               <Route path="/" element={<Navigate to="a3" />} />
               <Route path="a3" element={<Assignment3 />} />
               <Route path="a4" element={<Assignment4 />} />
               <Route path="a5" element={<Assignment5/>}/>
               <Route path="a6/*" element={<Assignment6/>}/>
            </Routes>
         </div>
      </Provider>

   )
}
export default Labs;