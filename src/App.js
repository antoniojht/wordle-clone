import { Provider } from 'react-redux';
import store from './store/store';
import Navbar from './components/navbar/Navbar';
import Grid from './components/grid/Grid';
import './app.css';
import Keyboard from './components/keyboard/Keyboard';

function App() {
  return (
    <Provider store={store}>
      <div className="container">
        <Navbar />
        <hr className="border" />
        <Grid />
      </div>
      <Keyboard />
    </Provider>
  );
}

export default App;
