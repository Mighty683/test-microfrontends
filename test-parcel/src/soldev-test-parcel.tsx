import ReactDOM from "react-dom";
import Root from './root.component';

import './styles.scss';

export default function (element, name) {
  ReactDOM.render(<div className="parcel-container">
    <Root name={name} />
  </div>, element);
};
