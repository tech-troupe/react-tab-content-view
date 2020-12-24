export const processInput = (src, titleType) => {
  const validation_result = validateInputs(src, titleType);
  if (validation_result) {
    return validation_result;
  }

  let titleId = 1;
  let processedData = { ...src };
  processedData.allTitles = [];
  processedData.displayedTitles = [];
  processedData.allTabs = [];
  processedData.closedTitle = null;
  processedData.data.map((group, i) => {
    processedData.data[i] = { ...group, titleId };
    processedData.allTitles.push(titleId);
    if (group.default === true) {
      processedData.allTabs.push(titleId);
      processedData.activeTitle = titleId;
      processedData.defaultTitle = titleId;
    }
    processedData.displayedTitles.push(titleId);
    titleId++;
  });

  if(!processedData.activeTitle) {
    processedData.activeTitle = 0;
  }
  return processedData;
};

export const validateInputs = (src, titleType) => {
  if (!titleType || titleType === undefined) {
    return null;
  }

  if (
    titleType !== "checkboxes" &&
    titleType !== "buttons" &&
    titleType !== "chips"
  ) {
    return {
      error: "Input titleType should be one of {checkbox, button, chips}",
    };
  }

  let foundDefault = false;
  let foundMoreThanOneDefault = false;
  src.data.map((group) => {
    if (group.default !== null && group.default === true) {
      if (foundDefault) {
        foundMoreThanOneDefault = true;
      }
      foundDefault = true;
    }
  });

  if (foundMoreThanOneDefault) {
    return {
      error: "Found more than one default tab",
    };
  }
  return null;
};
