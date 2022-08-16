import Home from "./routes/home/home.component";
import { Routes, Route } from 'react-router-dom';

const Shop = () => (
  <h1>Shop!</h1>
)

const App = () => {
  return (
    <Routes>
      <Route path='/home' element={<Home />}>
        <Route path='/home/shop' element={<Shop />} />
      </Route>
    </Routes>
  );
}

export default App;
