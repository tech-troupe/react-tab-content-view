import React from "react";
import { TabContent } from "./components/TabContent";
import { Provider } from "react-redux";
import { store } from "./stores/store";
import PropTypes from "prop-types";
import { ThemeProvider } from "@material-ui/core";
import { createMuiTheme } from "@material-ui/core/styles";

const ReactTabContentView = (props) => {
  const {
    src,
    defaultTitle,
    theme,
    titleType,
    titleDelete,
    titleRefreshAll,
    searchResult,
    contentCallback,
    advancedMode,
    contentDisplayComponent,
    contentDisplayAttributes,
    hasGroup,
  } = props;

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme !== undefined ? theme : createMuiTheme()}>
        <div className="react-tab-content-view">
          <TabContent
            data={src}
            defaultTitle={defaultTitle}
            titleType={titleType}
            searchResult={searchResult}
            titleDelete={titleDelete}
            titleRefreshAll={titleRefreshAll}
            contentCallback={contentCallback}
            advancedMode={advancedMode}
            contentDisplayComponent={contentDisplayComponent}
            contentDisplayAttributes={contentDisplayAttributes}
            hasGroup={hasGroup}
          />
        </div>
      </ThemeProvider>
    </Provider>
  );
};

ReactTabContentView.propTypes = {
  theme: PropTypes.object,
  titleType: PropTypes.oneOf(["chips", "buttons", "checkboxes"]),
  titleDelete: PropTypes.bool,
  titleRefreshAll: PropTypes.bool,
  src: PropTypes.object.isRequired,
  defaultTitle: PropTypes.string,
  searchResult: PropTypes.array,
  contentCallback: PropTypes.func,
  advancedMode: PropTypes.bool,
  contentDisplayComponent: PropTypes.func,
  contentDisplayAttributes: PropTypes.object,
  hasGroup: PropTypes.bool,
};

export default ReactTabContentView;
