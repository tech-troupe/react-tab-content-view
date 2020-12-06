import React from "react";
import { TabContent } from "./TabContent";
import { processInput } from "./helper/InputProcessor";
import { Provider } from "react-redux";
import store from "../stores/store";
import PropTypes from "prop-types"

const ReactTabContentView =  (props) => {
    const {titleType, titleDelete} = props;
    const transformedInput = processInput(props.src);
    return (
      <Provider store={store(transformedInput)}>
        <div className="react-tab-content-view">
          <TabContent titleType={titleType} titleDelete={titleDelete}/>
        </div>
      </Provider>
    );
}

ReactTabContentView.propTypes = {
  titleType: PropTypes.oneOf(['chips', 'buttons', 'checkboxes']),
  titleDelete: PropTypes.bool,
  src: PropTypes.object.isRequired
}


export default ReactTabContentView;

