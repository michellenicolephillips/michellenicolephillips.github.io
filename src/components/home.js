import React from 'react';
import './home.css';

class Home extends React.Component {
     render() {
          return (
               <div>
                    <head>
                         <title>Michelle P. - Home</title>
                    </head> 
                    <h1>Welcome!</h1>
                    <p className="intro">Hello, My name is Michelle!
                         <br/>
                         I come from the hospitality industry. Due to the covid-19 pandemic, I was let go.
                         <br/>
                         Thus started my journey in learning how to code.
                         <br/>
                         So far I've learned a little of:
                    </p>
                    <ul class="intro">
                         <li>HTML</li>
                         <li>CSS</li>
                         <li>Javascript</li>
                         <li>SQL</li>
                         <li>C#</li>
                         <li>React</li>
                    </ul>
                    <p className="intro">
                         Follow along as I learn a new industry!
                    </p>
               </div>
          );
    }
}

export default Home;