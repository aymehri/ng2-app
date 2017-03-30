import { ActionReducer, Action } from '@ngrx/store';

export const HOUR = 'HOUR';
export const SECOND = 'SENDOND';

export function clockReducer(state = new Date(), action: Action): Date {
    switch (action.type) {
        case HOUR:
            return new Date(state.setHours(state.getHours() + 1));
        case SECOND:
            return new Date(state.setSeconds(state.getSeconds() + 1));
        default:
            return state;
    }
};
