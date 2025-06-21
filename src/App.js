//import logo from './logo.svg';
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
} from "react-router-dom"

function App() {
  const [mode, setMode]= useState('light');
  const [alert, setAlert] = useState(null);
  const [colour, setColour]= useState('white');

  const showAlert=(message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(()=>{
      setAlert(null);
    },2000);
  }
  const removeBodyClasses=()=>{
    document.body.classList.remove('bg-light')
    document.body.classList.remove('bg-dark')
    document.body.classList.remove('bg-danger')
    document.body.classList.remove('bg-success')
    document.body.classList.remove('bg-warning')
    document.body.classList.remove('bg-primary')
    //document.body.classList.remove('bg-light')
  }

  const toggleMode=(cls)=>{
    removeBodyClasses();
    document.body.classList.add('bg-'+cls);
    if (cls==='primary'){
      //setMode("#471396");
      setMode("dark")
      setColour("#471396")
    }
    else if (cls==='success'){
      setMode("dark")
      setColour("#347433")
    }
    else if (cls==='danger'){
      setMode("dark")
      setColour("#B22222")
    }
    else if (cls==='warning'){
      setMode("light")
      setColour("#FFB823")
    }
    else if (cls==='dark'){
      setMode("dark")
      setColour("black")
    }
    else if (cls==='light'){
      setMode("light")
      setColour("white")
    }
  //   if( mode==='light'|| mode==='success'|| mode==='danger'|| mode==='warning'){
  //     setMode('dark');
  //     //document.body.style.backgroundColor = 'black';
  //     // document.body.style.color = 'white';
  //     showAlert(`${cls} Mode has been enabled`,"success")
  //     //document.title= "TextUtils-Dark Mode";
  //   }
  //   else{
  //     setMode("light");
  //     //document.body.style.backgroundColor = 'white';
  //     // document.body.style.color = 'grey';
  //     showAlert(`${cls} Mode has been enabled`,"success")
  //     //document.title= "TextUtils-Light Mode";
  //   }
   }

  return (
    <>
    <Router>
      {/* <Navbar title="Textutils" aboutText="About" mode={mode} toggleModeBlack={black()} toggleModeDarkBlue={darkBlue()} toggleModeLightPink={lightPink()} toggleModeWhite={white()}/> */}
      <Navbar title="Textutils" aboutText="About" mode={mode} toggleMode={toggleMode} colour={colour} />
      
      <Alert alert={alert}/>
      {/* <TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode}/> */}
      <div className="cntainer my-3">
        <Routes>
          <Route path="/about" element={<About mode={mode} colour={colour} />}/> 
          <Route path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode} colour={colour}/>}/>
        </Routes>
    </div>
    </Router>
    </>
  
  );  
}

export default App;
