import { Provider } from 'react-redux';
import store from './store/store';
import Navbar from './components/navbar/Navbar';
import Grid from './components/grid/Grid';
import './app.css';

function App() {
  return (
    <div className="container">
      <Navbar />
      <hr className="border" />
      <Provider store={store}>
        <Grid />
      </Provider>
    </div>
  );
}

export default App;
