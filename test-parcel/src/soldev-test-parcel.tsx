import ReactDOM from "react-dom";
import Root from './root.component';


export default function (element, name) {
  ReactDOM.render(<Root name={name} />, element);
};
