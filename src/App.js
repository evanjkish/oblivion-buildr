import { Link, Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
import ProtoHome from './components/ProtoHome';
import Create from './components/Create';
import View from './components/View';

function App() {
  return (
    <div className="App">
      <Switch>

        {/* <Route path="/characters/view/:id">
          <Update />
        </Route>

        
        <Route path="/products/:id">
        <View />
      </Route> */}

        <Route path="/character/view/">
          <View />
        </Route>

        <Route path="/new">
          <Create />
        </Route>

        <Route path="/characters">
          <ProtoHome />
        </Route>

        <Route path="/">
          <Redirect to="/characters"></Redirect>
        </Route>



      </Switch>
    </div>
  );
}

export default App;
