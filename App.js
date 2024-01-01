import Header from "./components/Header";
import Footer from "./components/Footer";
import {Route, Routes} from "react-router-dom";
import WelcomePage from "./components/WelcomePage";


function App() {
    return (<div>
            <Header/>
                <Routes>
                    <Route path={'/'} element={<WelcomePage/>}/> 
                </Routes>
            <Footer/>
        </div>);
}

export default App;
