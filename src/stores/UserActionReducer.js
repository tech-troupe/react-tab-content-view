import {UserActionTypes} from './UserActionTypes';

const userActionReducer = (state=[], action) => {
    switch (action.type) {
        
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
            console.log("SWITCH_TAB reducer:", state);
            const { allTabs } = state;
            return {
                ...state,
                activeTitle: allTabs[action.payload.newTabIndex]
            }

        case UserActionTypes.CLICK_TITLE:
            console.log("CLICK_TITLE reducer:", state);
            let newAllTabs = (state.allTabs.indexOf(action.payload.id) != -1) ? 
                [...state.allTabs] : [...state.allTabs, action.payload.id]
            console.log("newAllTabs:", newAllTabs);
            return {
                ...state,
                activeTitle: action.payload.id,
                allTabs:newAllTabs
            }

        case UserActionTypes.DELETE_TITLE:
            console.log("DELETE_TITLE reducer:", state);
            let newDisplayTitles = state.displayedTitles.filter(elem => elem !== action.payload.id);
            let updatedAllTabs = state.allTabs.filter(elem => elem !== action.payload.id);
            if(state.activeTitle === action.payload.id)  {
                if(action.payload.id === 0){
                    state.activeTitle = 0;
                }
                else {
                    state.activeTitle = state.activeTitle-1;
                }
            }
            return {
                ...state,
                displayedTitles:newDisplayTitles,
                allTabs: updatedAllTabs
            }

        default:
            return state;
    }
}

export default userActionReducer;