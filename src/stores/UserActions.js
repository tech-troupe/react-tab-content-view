import {UserActionTypes} from './UserActionTypes';

export const setRemoveTitlePayload = title => (
    {
        type:UserActionTypes.REMOVE_TITLE,
        payload:{
            titleToDelete:title
        }
    }
)

export const intialize = () => (
    {
        type:UserActionTypes.INITIALIZE,
        payload: null
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

export const deleteTitle = (titleId) => (
    {
        type: UserActionTypes.DELETE_TITLE,
        payload: {
            id:titleId
        }
    }
)

export const clickTitle = (titleId) => (
    {
        type: UserActionTypes.CLICK_TITLE,
        payload: {
            id:titleId
        }
    }
)

export const refreshTitles = () => (
    {
        type: UserActionTypes.REFRESH_TITLES,
    }
)

export const setInputProps = (inputProps) => (
    {
        type: UserActionTypes.SET_INPUT_PROPS,
        payload: {
            inputProps: inputProps
        }
    }
)

export const setSubTabValue = (newValue) => (
    {
        type: UserActionTypes.SET_SUB_TAB_VALUE,
        payload: {
            currentSubTabValue:newValue
        }
    }
)