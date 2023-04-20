import {AnyAction} from "redux";

const initState = {
    themeId: 1,
}

type StateType = typeof initState


export const themeReducer = (state: StateType = initState, action: ActionType): StateType => {
    switch (action.type) {
        case "SET_THEME_ID":
            return {themeId: action.id}
        default:
            return state
    }
}


type ActionType = ReturnType<typeof changeThemeId>

export const changeThemeId = (id: number): AnyAction => ({ type: 'SET_THEME_ID', id })


