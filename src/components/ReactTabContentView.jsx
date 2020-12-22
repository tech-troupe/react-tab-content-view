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
        main: "#ff8f00",
      },
      secondary: {
        main: "#00e2ff",
      },
    },
  });
  const theme = props.theme == "default" ? null : themeOrange;
<<<<<<< HEAD
  const { titleType, titleDelete, titleRefreshAll, searchResult, contentCallback, advancedMode } = props;
=======
  const { titleType, titleDelete, titleRefreshAll, searchResult } = props;
>>>>>>> 981caa0dfae4f21ce6ff2dc86f35842eba820937

  const transformedInput = processInput(props.src, props.titleType);
  return (
    <Provider store={store(transformedInput)}>
      <ThemeProvider theme={theme}>
        <div className="react-tab-content-view">
          <TabContent
            titleType={titleType}
            searchResult={searchResult}
            titleDelete={titleDelete}
            titleRefreshAll={titleRefreshAll}
<<<<<<< HEAD
            contentCallback = {contentCallback}
            advancedMode = {advancedMode}
=======
>>>>>>> 981caa0dfae4f21ce6ff2dc86f35842eba820937
          />
        </div>
      </ThemeProvider>
    </Provider>
  );
};

ReactTabContentView.propTypes = {
  theme: PropTypes.oneOf(["default", "orange"]),
  titleType: PropTypes.oneOf(["chips", "buttons", "checkboxes"]),
  titleDelete: PropTypes.bool,
  titleRefreshAll: PropTypes.bool,
  src: PropTypes.object.isRequired,
  searchResult: PropTypes.array,
<<<<<<< HEAD
  contentCallback: PropTypes.func,
  advancedMode: PropTypes.bool
=======
>>>>>>> 981caa0dfae4f21ce6ff2dc86f35842eba820937
};

export default ReactTabContentView;
