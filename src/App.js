import {createStore, applyMiddleware} from 'redux';
import reducer from './store/reducer';
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import {BrowserRouter, Route} from "react-router-dom";
import {Home} from "./components/Home";
import './main.scss'

const store = createStore(reducer, applyMiddleware(thunk));

function App() {
  return (
      <div>
          <Provider store={store}>
              <BrowserRouter>
                  <Route exact path='/' component={Home}/>
              </BrowserRouter>
          </Provider>
      </div>
  );
}

export default App;
