import { render } from "react-dom";
import { App } from "./App";
import 'bootstrap/dist/css/bootstrap.css';
import "./styles/App.scss";
import { register as registerServiceWorker } from './serviceWorkerRegistration';

render(<App />, document.getElementById("root"));

registerServiceWorker();