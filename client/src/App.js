import './App.css';
import HomePage from './pages/HomePage';
import Home from './pages/Home';
import Search from './pages/Search';
import OnSearch from './pages/OnSearch';
import Select from './pages/Select';
import OnSelect from './pages/OnSelect';
import Header from './component/Header';
import Store from './Store';
import Init from './pages/Init';
import OnInit from './pages/OnInit';


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Confirm from './pages/Confirm';
import OnConfirm from './pages/OnConfirm';
import Status from './pages/Status';
import OnStatus from './pages/OnStatus';
import Track from './pages/Track';
import OnTrack from './pages/OnTrack';
import Update from './pages/Update';
import OnUpdate from './pages/OnUpdate';
import Cancel from './pages/Cancel';
import OnCancel from './pages/OnCancel';
import Rating from './pages/Rating';
import OnRating from './pages/OnRating';
import Support from './pages/Support';
import OnSupport from './pages/OnSupport';
import Graph from './pages/Graph';
import CombineCsv from './pages/CombineCsv';

function App() {
  return (
    <Store className="App">
      <Header />
      <Router>
        <div>
          <Switch>
            <Route path="/graph">
              <Graph />
            </Route>
            <Route path="/onsupport">
              <OnSupport />
            </Route>
            <Route path="/support">
              <Support />
            </Route>
            <Route path="/onrating">
              <OnRating />
            </Route>
            <Route path="/rating">
              <Rating />
            </Route>
            <Route path="/oncancel">
              <OnCancel />
            </Route>
            <Route path="/cancel">
              <Cancel />
            </Route>
            <Route path="/onupdate">
              <OnUpdate />
            </Route>
            <Route path="/update">
              <Update />
            </Route>
            <Route path="/ontrack">
              <OnTrack />
            </Route>
            <Route path="/track">
              <Track />
            </Route>
            <Route path="/onstatus">
              <OnStatus />
            </Route>
            <Route path="/status">
              <Status />
            </Route>
            <Route path="/onconfirm">
              <OnConfirm />
            </Route>
            <Route path="/confirm">
              <Confirm />
            </Route>
            <Route path="/oninit">
              <OnInit />
            </Route>
            <Route path="/init">
              <Init />
            </Route>
            <Route path="/onselect">
              <OnSelect />
            </Route>
            <Route path="/select">
              <Select />
            </Route>
            <Route path="/onsearch">
              <OnSearch />
            </Route>
            <Route path="/search">
              <Search />
            </Route>
            <Route path="/combine">
              <CombineCsv/>
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    </Store>
  );
}

export default App;
