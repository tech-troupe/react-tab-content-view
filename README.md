
# React Tab Content View
React Tab Content View aka ReTCoV is a tool for displaying contents with titles and/or groups in the form of tabs, allowing users to control the tabs with various options like chips, buttons and checkboxes. This tool would let the users to quickly generate a web page that can display contents, grouped by titles.
<br/><br/>
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

### Supported Props
|Name|Type|default|Description|
|----|----|-----|-------|
|src|JSON object|None|This property contains your input JSON|
|titleType| checkbox, button, chips|chips|Object type to display the titles|
|titleDelete|true, false|true|Titles will have option to delete|
|titleRefreshAll|true,false |true|Deleted titles can be restored with refresh option|
|sortTitlesInGroup|true,false|false|Set to true to sort titles.|
|groupVertical|true,false|true|Set to list the titles in a group vertically aligned|

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
