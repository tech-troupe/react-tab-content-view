export const UserActionTypes  = {
    //Set initial state of operations in inactive state
    SET_OPERATION_IN_INITIAL_STATE : 'SET_OPERATION_IN_INITIAL_STATE',
    // Only one among multiple operation can be active
    // Make other operations inactive automatically
    SET_OPERATION_ACTIVE : 'SET_ACTIVE_OPERATION',
    // Make all operation inactive when we reset
    SET_ALL_OPERATIONS_INACTIVE: 'SET_OPERATION_INACTIVE',
    // Remove operation from list when user deletes it
    REMOVE_OPERATION: 'REMOVE_OPERATION',
    // User closes a tab
    CLOSE_TAB: 'CLOSE_TAB'
}