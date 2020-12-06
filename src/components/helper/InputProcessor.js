export const processInput = (input) => {
  const validation_result = validate(input);
  if (validation_result) {
    return validation_result;
  }

  let titleId = 1;
  let processedData = { ...input };
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
    }
    processedData.displayedTitles.push(titleId);
    titleId++;
  });
  return processedData;
};

export const validate = (input) => {
  if (!input.titleType) {
    return {
      error: "Input titleType should be specified.",
    };
  }

  if (input.titleDelete === null) {
    return {
      error: "Input.titleDelete should be specified.",
    };
  }

  if (
    input.titleType !== "checkbox" &&
    input.titleType !== "button" &&
    input.titleType !== "chips"
  ) {
    return {
      error: "Input titleType should be one of {checkbox, button, chips}",
    };
  }

  let foundDefault = false;
  let foundMoreThanOneDefault = false;
  input.data.map((group) => {
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
