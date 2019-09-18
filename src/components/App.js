import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import GoogleMap from '../components/containers/GoogleMap';
import { withSession } from '../Auth0Provider';
import Fun from './play/Fun';


export default function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/fun" component={withSession(Fun)}/>
          <Route path="/" component={withSession(GoogleMap)}/>
        </Switch>
      </Router>
    </>
  );
}

// import {
//   BrowserRouter as Router,
//   Route,
//   Switch
// } from 'react-router-dom';

// import React from 'react';
// import Play from './play/Play';

// export default function App() {
//   return (
//     <>
//       <Router>
//         <Switch>
          
//           <Route path="/" component={Play} />
//         </Switch>
//       </Router>
//     </>
//   );
// }
