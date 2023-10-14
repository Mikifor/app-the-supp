import { connect } from 'react-redux'
import ProgramBar from "./ProgramBar"
import {onChangeFunctionAC, onClickPalindromeAC} from '../../redux/programReducer'


let mapStateToProps = (state) => {
  debugger
  return {
    state: state.programReducer,
    isPalindrome: state.programReducer.isPalindrome
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    onChangeFunction: (text) => { dispatch(onChangeFunctionAC(text)) },
    onClickFunction: () => {dispatch(onClickPalindromeAC())}
  }
}
const ProgramBarContainer = connect(mapStateToProps, mapDispatchToProps)(ProgramBar)

export default ProgramBarContainer