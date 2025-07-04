import React from 'react'

export default function About(props) {
    // const [myStyle, setMyStyle]=useState({
    //     color: 'black',
    //     backgroundColor: 'white'
    // })

    let myStyle={
        color:props.mode==='dark'?'white':'black',
        backgroundColor:props.colour
    }

  return (
    <div className='container'style={{myStyle}}>
        <h2 className='my-2' style={{color:props.mode==='dark'?"white":'black'}}>About Us</h2>
        <div className="accordion" id="accordionExample">
            <div className="accordion-item" style={myStyle}>
                <h2 className="accordion-header">
                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={myStyle}>
                Analyze Your Text
                </button>
                </h2>
               <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        <strong>TextUtils gives you a way to analyze your text quickly and efficiently.</strong> Be it word count, character count.
                    </div>
                </div>
            </div>
            <div className="accordion-item" style={myStyle}>
                <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={myStyle}>
                Free To Use
                </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        <strong>TextUtils is a free character counter tool that provides instamt character count & word count statistics for a given text.</strong> TextUtils repots the number of words and characters. Thus it is suitable for writing text with word/ character limit.
                    </div>
                </div>
            </div>
            <div className="accordion-item" style={myStyle}>
                <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={myStyle}>
                Browse Compatible
                </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        <strong>This word counter software works in any web browser such as Chrome , Firefox, Internet Explorer, Safari, Opera.</strong> It suits to count characters in facebook, blog, books, excel document, pdf document, essays, etc.
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
