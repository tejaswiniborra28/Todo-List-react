import logo from './logo.svg';
import './App.css';
import TodoHeader from './components/TodoHeader';
import store from  './store';
import {Provider} from 'react-redux'


function App() {
  return (<Provider store={store}>
    <div className="App">
      <TodoHeader/>
    </div>
    </Provider>
  );
}

export default App;
