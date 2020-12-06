import React from "react";
import { TabContent } from "./TabContent";
import { processInput } from "./helper/InputProcessor";
import { Provider } from "react-redux";
import store from "../stores/store";
import "./ReactTabContentView.css";

class ReactTabContentView extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    //TBD
  }

  componentDidUpdate() {
    //TBD
  }

  componentWillUnmount() {
    //TBD
  }

  validateState = (state) => {
    //TBD
  };

  render() {
    const transformedInput = processInput(this.props.src);
    return (
      <Provider store={store(transformedInput)}>
        <div className="react-tab-content-view">
          <TabContent />
        </div>
      </Provider>
    );
  }
}

export default ReactTabContentView;
