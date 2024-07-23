
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from '/home/uki-student/Documents/blog/src/commponents/Blognav.js';
import Post1 from './commponents/Post1';
import Posts
 from './commponents/Posts';

const Java = () => <div>Java</div>;
const Data = () => <div>Data stucture</div>;
const Algoritham = () => <div>Algoritham</div>;
const Computer= () => <div>Computer network</div>;

function App() {
    return (<div className="App">
        <Router>
           
                <Navbar />
                <Routes>
                    <Route path="/" element={<Java/>} />
                    <Route path="/Data" element={<Data />} />
                    <Route path="/Algoritham" element={<Algoritham/>} />
                    <Route path="/Computer" element={<Computer />} />
                </Routes>
            
        </Router>
   

        <Posts/>
        </div>
    );
}

export default App;
