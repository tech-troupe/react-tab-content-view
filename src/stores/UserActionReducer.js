
import {UserActionTypes} from './UserActionTypes';

const INITIAL_STATE  = {
    "0":{
            "operations":{
                'linked-instruments-check-eligibility': true,
                'register-linked-instrument': true,
                'deregister-linked-instrument': true,
                'linked-instruments-search-balances': true,
                'linked-instruments-reserve-balance': true,
                'linked-instruments-release-balance': true,
                'linked-instruments-credit-funds': true,
                'authorizations': true,
                'authorizations_id_capture': true,
                'authorizations_id_void': true,
                'void-authorization': true,
                'refund-authorizations': true,
                'refund-authorizations_id_void': true,
                'void-refund-authorization': true,
                'refund-authorizations_id_capture': true,
                'linked-instruments-reverse-credits': true,
                'linked-instruments-refund': true,
                'linked-instruments-search-transactions': true,
                'linked-instruments-debit-funds': true,
                'cancel-linked-instruments-debit-funds': true
            }
        }
}

const apiListReducer = (state=INITIAL_STATE, action) => {
    switch (action.type) {
        case UserActionTypes.REMOVE_OPERATION:
            return {
                ...state,
            };
        default:
            
            return state;
    }
}

export default apiListReducer;