import Dialogs from './Dialog'
import { newMessageFunctionActionCreater, onChangeDialogFunctionActionCreater } from '../../redux/dialogReducer'
import { connect } from 'react-redux'
import { withAuthRedirect } from '../../HOC/withAuth'
import { compose } from 'redux'

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

export default compose (connect(mapStateToProps, mapDispatchToProps), withAuthRedirect)(Dialogs)