const initialState = {
    value: 0
}

export const counterReducer = (state: InitialStateType = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case "INCREMENTS-VALUE": {
            return {
                ...state,
                value: state.value + 1
            }
        }
        case 'SET-VALUE-LOCAL_STORAGE': {
            return {
                ...state,
                value: action.value
            }
        }
        default:
            return state
    }

}

export const incrementsValueAC = () => ({type: "INCREMENTS-VALUE"} as const)
export const setValueLocalStorageAC = (value:number) => ({type: 'SET-VALUE-LOCAL_STORAGE', value} as const)


//types

type IncrementsValueType = ReturnType<typeof incrementsValueAC>

type SetValueLSType = ReturnType<typeof setValueLocalStorageAC>

export type InitialStateType = typeof initialState



export type ActionType = IncrementsValueType | SetValueLSType
