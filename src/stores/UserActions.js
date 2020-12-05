import {UserActionTypes} from './UserActionTypes';

export const setRemoveTitlePayload = title => (
    {
        type:UserActionTypes.REMOVE_TITLE,
        payload:{
            titleToDelete:title
        }
    }
)

export const intializeState = () => (
    {
        type:UserActionTypes.INITIALIZE,
        payload: null
    }
)

export const closeTab = (indx) => (
    {
        type:UserActionTypes.CLOSE_TAB,
        payload: {
            closedTabIndex:indx
        }
    }
)

export const switchTab = (prevIdx, newIdx) => (
    {
        type:UserActionTypes.SWITCH_TAB,
        payload: {
            prevTabIndex: prevIdx,
            newTabIndex: newIdx
        }
    }
)