import React from 'react';
import ReactDOM from 'react-dom';
import Button from './components/moon';

import '../assets/stylesheets/application.scss';

// const Hello = ({ name }) => {
//   return (
//     <div>
//       Hello,
//       {name}
//     </div>
//   );
// };

class App extends React.Component{
  render (){
    return(
      <div>
        <Button />
      </div>
      )
  }
}

const root = document.getElementById('root');
if (root) {
  ReactDOM.render(<App />, root);
}
