import './App.css';
import Selector from "./component/Selector";
function App(props) {
  const singleList = ["Chim", "Chó", "Mèo", "Chuột", "Lợn" ,"Gà" , "Vịt" ];
  return (
    <div className="App">
      <Selector {...props} status = {true}  list = {singleList}/>
    </div>
  );
}

export default App;
