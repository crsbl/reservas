import "./style/App.css";
import "./style/constant.css";
import Calendar from "./components/calendar/index";
import ModalAlert from "./components/modalAlert";
import { useSelector} from "react-redux";
function App() {
  const selector = useSelector((state) => state.modalAlert);
  return (
    <div className="App">
      {selector.modalAlert.state === true && (
        <ModalAlert
          type={selector.modalAlert.type}
          message={selector.modalAlert.message}
        />
      )}
      <header></header>
      <main className="flexRow">
        <Calendar />
      </main>
    </div>
  );
}

export default App;
