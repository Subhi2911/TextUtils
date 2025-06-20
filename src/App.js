// import logo from './logo.svg';
import './Appa.css';
import React ,{useState} from 'react'

import About from './components/About.js';
import Navbar from './components/Navbar.js';
import TextForm from './components/TextForm.js';
import Alert from './Alert.js';

import{
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom"

function App() {
  const [mode, setMode]= useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert=(message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(()=>{
      setAlert(null);
    },1500);
  }
  const toggleMode=()=>{
    if( mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor = 'black';
      // document.body.style.color = 'white';
      showAlert("Dark Mode has been enabled","success")
      document.title= "TextUtils-Dark Mode";
    }
    else{
      setMode("light");
      document.body.style.backgroundColor = 'white';
      // document.body.style.color = 'grey';
      showAlert("Light Mode has been enabled","success")
      document.title= "TextUtils-Light Mode";
    }
  }

  return (
    <>
    {/* <Navbar title="Textutils" aboutText="About" mode={mode} toggleModeBlack={black()} toggleModeDarkBlue={darkBlue()} toggleModeLightPink={lightPink()} toggleModeWhite={white()}/> */}
    <Router>
    <Navbar title="Textutils" aboutText="About" mode={mode} toggleMode={toggleMode}/>

    <Alert alert={alert}/>
    <div className="cntainer my-3">
      <Routes>
          <Route exact path="/about" element={<About />}/>
          
          {/* <Route path="/users">
            <Users />
          </Route> */}
          <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode}/>}/>
    
        </Routes>
    </div>
    
    
    </Router>
    </>
  
  );  
}

export default App;
