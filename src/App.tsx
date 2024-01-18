import './App.css';
import '@fontsource/poppins/400.css';
import '@fontsource/poppins/500.css';
import '@fontsource/poppins/600.css';
import '@fontsource/poppins/700.css';
import NavPanel from './components/NavPanel';
import Main from './components/Main';

function App() {
  return (
    <div className='flex'>
      <NavPanel />
      <Main />
    </div>
  );
}

export default App;
