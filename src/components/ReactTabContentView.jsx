import React from "react";
import { TabContent } from "./TabContent";
import { processInput } from "./helper/InputProcessor";
import { Provider } from "react-redux";
import store from "../stores/store";
import PropTypes from "prop-types";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";

const ReactTabContentView = (props) => {
  const themeOrange = createMuiTheme({
    palette: {
      primary: {
          main: "#ff8f00"
      },
      secondary: {
        main: "#ffcc80"
      }
    },
  });
  const theme = props.theme == 'default'? null : themeOrange;
  const { titleType, titleDelete, titleRefreshAll} = props;

  const transformedInput = processInput(props.src);
  return (
    
      <Provider store={store(transformedInput)}>
        <ThemeProvider theme={theme}>
          <div className="react-tab-content-view">
            <TabContent titleType={titleType} titleDelete={titleDelete} titleRefreshAll={titleRefreshAll} />
          </div>
        </ThemeProvider>
      </Provider>
    
  );
};

ReactTabContentView.propTypes = {
  theme: PropTypes.oneOf(["default","orange"]),
  titleType: PropTypes.oneOf(["chips", "buttons", "checkboxes"]),
  titleDelete: PropTypes.bool,
  titleRefreshAll: PropTypes.bool,
  src: PropTypes.object.isRequired,
};

export default ReactTabContentView;
