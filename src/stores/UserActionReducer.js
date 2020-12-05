import {UserActionTypes} from './UserActionTypes';

const INITIAL_STATE  = {
    allTitles: ["title1", "title2", "title3","title4"],
    displayedTitles:["title1", "title2", "title3","title4"],
    data:[
        {
            "title":"title1",
            "content":"content1"
        },
        {
            "title":"title2",
            "content":"content2"
        },
        {
            "title":"title3",
            "content":"content3"
        },
        {
            "title":"title4",
            "content":"content4"
        },
    ],
    allTabs:['title1', 'title2'],
    activeTitle:'title2',
    closedTitle:null
}

const userActionReducer = (state=INITIAL_STATE, action) => {
    switch (action.type) {
        case UserActionTypes.REMOVE_TITLE:
            let titleToDelete = state.titleToDelete;
            return {
                ...state,
                allTitles : state.displayedTitles.filter(e => e !== titleToDelete)
            };
        case UserActionTypes.INITIALIZE:
            //inbound state should be null
            return {
                state
            };
        case UserActionTypes.CLOSE_TAB:
            let tabIndex = action.payload.closedTabIndex;
            console.log("tabIndex:", tabIndex);
            // state.allTabs = state.allTabs.filter(elem => elem !== closedTab);
            
            let currActiveIndex = 0;
            // let curValue = state.activeTitle;
            
            let allTabsFiltered = state.allTabs.filter((value,index)=>{
                if(state.activeTitle === value) {
                    currActiveIndex = index;
                }
                return index !== tabIndex;
            });
            console.log("currActiveIndex:",currActiveIndex);
            if(allTabsFiltered.length === 0) {
                state.activeTitle = null;
            } else if(currActiveIndex === tabIndex){
                if(tabIndex === 0){
                    state.activeTitle = allTabsFiltered[0];
                }
                else{
                    state.activeTitle = allTabsFiltered[tabIndex-1];
                }
            }
            return {
                ...state,
                allTabs: allTabsFiltered,
            };

        case UserActionTypes.SWITCH_TAB:
            console.log("reducer:", state);
            const { allTabs } = state;
            return {
                ...state,
                activeTitle: allTabs[action.payload.newTabIndex]
            }
        default:
            return state;
    }
}

export default userActionReducer;