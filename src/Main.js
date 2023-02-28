import './Main.css';
import HornedBeast from './HornedBeast';
function Main() {
  return (
    <div className="Main">
      <HornedBeast index={0}/>
      <HornedBeast index={1}/>
      <HornedBeast index={2}/>
      <HornedBeast index={3}/>
      <HornedBeast index={4}/>
      <HornedBeast index={5}/>
      <HornedBeast index={6}/>
      <HornedBeast index={7}/>
    </div>
  );
}

export default Main;
