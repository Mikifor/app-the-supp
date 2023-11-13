import Dialogs from './Dialog'
import { newMessageFunctionActionCreater } from '../../redux/dialogReducer'
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
    onClickAction: (text) => { dispatch(newMessageFunctionActionCreater(text)) }
  }
}

export default compose (connect(mapStateToProps, mapDispatchToProps), withAuthRedirect)(Dialogs)