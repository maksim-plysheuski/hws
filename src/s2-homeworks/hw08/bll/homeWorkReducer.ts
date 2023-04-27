import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): any => {
    switch (action.type) {
        case 'sort': {
            let stateCopy = [...state]
            return [...stateCopy.sort(action.payload === 'down'
                ?(a: UserType, b: UserType) => a.name < b.name ? 1 : -1
                :(a: UserType, b: UserType) => a.name < b.name ? -1 : 1)]
        }
        case 'check': {
             return state.filter(e => e.age >= action.payload)
        }
        default:
            return state
    }
}
