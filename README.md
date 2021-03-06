![Travis Status](https://img.shields.io/travis/tech-troupe/react-tab-content-view) ![NPM Downloads](https://img.shields.io/npm/dw/react-tab-content-view)![NPM License](https://img.shields.io/npm/l/react-tab-content-view)

# React Tab Content View
React Tab Content View aka ReTCoV is a React component to display contents with titles and/or groups in the form of tabs, allowing users to control the tabs with various options like chips, buttons and checkboxes. This tool would let the users to quickly generate a web page that can display contents, grouped by titles.
<br/><br/>

## Demo In Storybook
Follow below link to view the features provided by this component: </br>
[react-tab-content-view](https://tech-troupe.github.io/react-tab-content-view/)

### Implementation Example
```js
// import the react-tab-content-view component
import ReactTabContentView from 'react-tab-content-view'

// use the component in your app!
// Refer to Sample Source Json Structure section for JSON structure
<ReactTabContentView src={content_in_json_format} />;
```

### Output Examples
<br/>

### Installation Instructions

Install this component with NPM.
```shell
npm install --save react-tab-content-view
```
Or add to your package.json config file:
```json
"dependencies": {
    "react-tab-content-view": "latest"
}
```

### Run Unit Tests
To run unit tests
```shell
npm test
```

### Supported Props
||Name|Type|default|Description|Implementation Status|
|-----|----|----|-----|-------|------|
|1.|src|JSON object|None|This property contains your input JSON|Supported|
|2.|titleType| checkbox, button, chips|chips|Object type to display the titles|Only 'chips' is supported| 
|3.|titleDelete|boolean|true|Titles will have option to delete|Supported|
|4.|titleRefreshAll|boolean|true|Deleted titles can be restored with refresh option|Supported|
|5.|sortTitlesInGroup|boolean|false|Set to true to sort titles.|Not Supported|
|6.|groupControl|string|row default wrapped|Display titles in grid with rows and columns specified|Not Supported|
|7.|searchResult|array|[]|Displays search results (matches) as badges based on the object fed| Supported|
|8.|contentCallback|(title)=>{}|null| Callback function that loads content of each title upon click (for the first time only)| Supported|
|9.|contentDisplayComponent|React component object|null|External react component to be used to display the content|Supported|
|10.|contentDisplayAttributes|array| []| Attrbutes to be used to instantiate the contentDisplayComponent| Supported|
|11.|advancedMode|boolean|false|Enables lazy loading (loading content on the go using contentCallback)|Supported|
|

### Additional Features

- The users can specify the default tab to be display in their input, by adding 'default: true' in their input. Please refer to the JSON structure below for a sample. Kindly note that only one default tab is allowed.

### Future Works

- Title Grouping
- Title display options

### Sample Source Json Structure
```
{
    [
        {
            "grpname":"Group Name1"
            "titles": [
                {
                    "title":"title1",
                    "content":"content1",
                    "default": true
                },
                {
                    "title":"title2",
                    "content":"content2"
                }
            ]
        },
        {
            "grpname":"Group Name2"
            "titles": [
                {
                    "title":"title3",
                    "content":"content3"
                },
                {
                    "title":"title4",
                    "content":"content4",
                    "preselected":true
                }
            ]
        },
    ],
}
```
