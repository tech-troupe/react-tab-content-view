
## Supported Props
|Name|Type|default|Description|
|----|----|-----|-------|
|src|JSON object|None|This property contains your input JSON|
|titleType| checkbox, button, chips|chips|Object type to display the titles|
|titleDelete|true, false|true|Titles will have option to delete|
|titleRefreshAll|true,false |true|Deleted titles can be restored with refresh option|
|sortTitlesInGroup|true,false|false|Set to true to sort titles.|
|groupVertical|true,false|true|Set to list the titles in a group vertically aligned|


## Sample Source Json Structure
```
{
    [
        {
            "grpname":"Group Name1"
            "titles": [
                {
                    "title":"title1",
                    "content":"content1"
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
