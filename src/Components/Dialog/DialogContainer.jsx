import Dialogs from './Dialog'
import { newMessageFunctionActionCreater, onChangeDialogFunctionActionCreater } from '../../redux/dialogReducer'
import { connect } from 'react-redux'

let mapStateToProps = (state) => {
  return {
    isAuth: state.authReducer.isAuth,
    state: state.dialogReducer
  }
}
let mapDispatchToProps = (dispatch) => {
  return {
    onClickAction: () => { dispatch(newMessageFunctionActionCreater()) },
    onChangeFunction: (text) => { dispatch(onChangeDialogFunctionActionCreater(text)) }
  }
}
const SuperDialogContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default SuperDialogContainer