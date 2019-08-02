import { createStore } from 'redux'
//import  something?

let initialState = {
	board: [],
	playing: false 
}

export const CLEAR_BOARD = 'CLEAR_BOARD'

const reducer = (state = initialState, action){
	switch (action){
		case(CLEAR_BOARD):
			return initialState
		default:
			return state 
	}
}

const store = createStore(App)

export default store