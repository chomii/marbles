import './App.css';
import { Header } from './components/header';
import { MarbleList } from './components/marble-list';
import { MarblesProvider } from './context/marblesContext';

function App() {
  return (
    <div>
      <MarblesProvider>
        <Header />
        <MarbleList />
      </MarblesProvider>
    </div>
  );
}

export default App;
