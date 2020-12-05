export const UserActionTypes  = {
    //Set initial state of titles
    INITIALIZE : 'INITIALIZE',
    // Only one among multiple operation can be active
    // Make other operations inactive automatically
    SET_ACTIVE_TITLE : 'SET_ACTIVE_TITLE',
    // Remove operation from list when user deletes it
    REMOVE_TITLE: 'REMOVE_TITLE',
    // close tab
    CLOSE_TAB:'CLOSE_TAB',
    //switch tab
    SWITCH_TAB:'SWITCH_TAB'
}