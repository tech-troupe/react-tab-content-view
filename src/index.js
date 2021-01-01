import React from "react";
import { TabContent } from "./components/TabContent";
import { processInput } from "./components/helper/InputProcessor";
import { Provider } from "react-redux";
import { store } from "./stores/store";
import PropTypes from "prop-types";
import { ThemeProvider } from "@material-ui/core";

const ReactTabContentView = (props) => {
  const {
    theme,
    titleType,
    titleDelete,
    titleRefreshAll,
    searchResult,
    contentCallback,
    advancedMode,
    contentDisplayComponent,
    contentDisplayAttributes,
  } = props;

  const [transformedInput, defaultTitle] = processInput(
    props.src,
    props.titleType
  );
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <div className="react-tab-content-view">
          <TabContent
            data={transformedInput}
            defaultTitle={defaultTitle}
            titleType={titleType}
            searchResult={searchResult}
            titleDelete={titleDelete}
            titleRefreshAll={titleRefreshAll}
            contentCallback={contentCallback}
            advancedMode={advancedMode}
            contentDisplayComponent={contentDisplayComponent}
            contentDisplayAttributes={contentDisplayAttributes}
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
  contentCallback: PropTypes.func,
  advancedMode: PropTypes.bool,
  contentDisplayComponent: PropTypes.object,
  contentDisplayAttributes: PropTypes.array,
};

export default ReactTabContentView;
