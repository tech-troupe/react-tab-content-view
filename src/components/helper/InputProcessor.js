export const processInput = (src, titleType, hasGroup) => {
  if (Object.keys(src).length <= 0) {
    return {};
  }
  const validation_result = validateInputs(src, titleType);
  if (validation_result) {
    return [validation_result];
  }

  let titleId = 1;
  let processedData = { ...src };
  processedData.allTitles = [];
  processedData.displayedTitles = [];
  processedData.allTabs = [];
  processedData.displayedTitlesWithGroup = {};
  processedData.closedTitle = null;
  processedData.hasGroup = hasGroup;
  processedData.data.map((obj, i) => {
    processedData.data[i] = { ...obj, titleId };
    processedData.allTitles.push(titleId);
    if (obj.default === true) {
      processedData.allTabs.push(titleId);
      processedData.activeTitle = titleId;
      processedData.defaultTitleId = titleId;
    }
    processedData.displayedTitles.push(titleId);
    if (processedData.hasGroup) {
      const grpName =
        processedData.data[i].groupName !== undefined
          ? processedData.data[i].groupName
          : "Others";
      processedData.hasGroup = true;
      processedData.displayedTitlesWithGroup[grpName.trim()]
        ? processedData.displayedTitlesWithGroup[grpName.trim()].push(titleId)
        : (processedData.displayedTitlesWithGroup[grpName.trim()] = [titleId]);
    } else {
      processedData.displayedTitlesWithGroup["NoGroup"]
        ? processedData.displayedTitlesWithGroup["NoGroup"].push(titleId)
        : (processedData.displayedTitlesWithGroup["NoGroup"] = [titleId]);
    }
    processedData.displayedTitlesWithGroup;
    titleId++;
  });

  if (!processedData.activeTitle) {
    processedData.activeTitle = 0;
    processedData.defaultTitleId = 0;
  }
  return processedData;
};

export const validateInputs = (src, titleType) => {
  if (!titleType || titleType === undefined) {
    return null;
  }

  if (titleType !== "chips") {
    return {
      error: "Input titleType should be one of {chips}",
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
