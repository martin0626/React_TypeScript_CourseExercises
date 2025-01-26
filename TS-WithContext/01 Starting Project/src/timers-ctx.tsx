import { createContext, useContext, useReducer, type ReactNode } from "react"



//Types Definitions

type TimerCtxProviderProps = {
    children: ReactNode
}

export type Timer = {
    name: string;
    duration: number;
}

type TimerCtxState = {
    timers: Timer [],
    isRunning: boolean,
};

type TimerCtxControllers = {
    addTimer: (timerData: Timer)=> void;
    startTimers: ()=> void;
    stopTimers: ()=> void;
}

type ContextT = TimerCtxState & TimerCtxControllers;


type AddTimerAction = {
    type: 'ADD_TIMER';
    payload: Timer;
}

type ControlTimerAction = {
    type: 'START_TIMERS' | 'STOP_TIMERS';
}


type Action = AddTimerAction | ControlTimerAction;



//Logic

const TimersContext = createContext<ContextT | null>(null);

//Custom Hook To Intially check if CTX is null
export const useTimersCtx = ()=>{
    const timersCtx = useContext(TimersContext);

    if(timersCtx === null){
        throw new Error('Context of timers is null!!!')
    }


    return timersCtx;
}


const timerReducer = (state: TimerCtxState, action: Action): TimerCtxState=>{
    if(action.type === 'ADD_TIMER'){
        return {
            ...state,
            timers: [...state.timers, action.payload]
        }
    }else if(action.type === 'START_TIMERS'){
        return {
            ...state,
            isRunning: true
        }
    }else if(action.type === 'STOP_TIMERS'){
        return {
            ...state,
            isRunning: false
        }

    }
    return state;
}

const state: TimerCtxState  = {
    timers: [],
    isRunning: false
}



export default function TimersCtx({children}: TimerCtxProviderProps){

    const [timerState, dispatch] = useReducer(timerReducer, state);


    let initialState: ContextT = {
        timers: timerState.timers,
        isRunning: timerState.isRunning,
        addTimer: function(timerData){
            dispatch({type: 'ADD_TIMER', payload: timerData});
        },
        startTimers: function(){
            dispatch({type: 'START_TIMERS'})
        },
        stopTimers: function(){
            dispatch({type: "STOP_TIMERS"})
        },
    }

    return (
        <TimersContext.Provider value={initialState}>
            {children}
        </TimersContext.Provider>
    )

}