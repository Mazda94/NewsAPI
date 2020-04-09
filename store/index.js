import { createStore } from 'redux'

const intialState = {
  business: [],
  technologies: []
}

const reducer = (state = intialState, action) => {
  console.log('Masuk redux')
  console.log(action)
  switch (action.type) {
    case "SET_BUSINESS":
      return { ...state, business: action.payload }

    case "SET_TECHNOLOGIES":
      return { ...state, technologies: action.payload }

    default:
      return state
  }

}

const store = createStore(reducer)

export default store