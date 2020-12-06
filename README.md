
## Supported Props
|Name|Type|default|Description|
|----|----|-----|-------|
|src|JSON object|None|This property contains your input JSON|
|titleType| checkbox, button, chips|chips|Object type to display the titles|
|titleDelete|true, false|true|Titles will have option to delete|
|titleRefreshAll|true,false |true|Deleted titles can be restored with refresh option|
|sortTitlesInGroup|true,false|false|Set to true to sort titles.|
|groupVertical|true,false|true|Set to list the titles in a group vertically aligned|

## Additional Features

- The users can specify the default tab to be display in their input, by adding 'default: true' in their input. Please refer to the JSON structure below for a sample. Kindly note that only one default tab is allowed.

## Sample Source Json Structure
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
