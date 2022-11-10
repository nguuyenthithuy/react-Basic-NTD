import React from "react";
import { withRouter } from "react-router";
import color from "../HOC/Color";
import logo from '../../assets/images/3f52eb095b449f1ac655.jpg'
import { connect, Connect } from "react-redux";
class Home extends React.Component {

    componentDidMount() {

    }
    handleDeleteusers = (user) => {
        console.log('check user:', user)
        this.props.deleteuserredux(user)
    }
    handleAddnewRedux = () => {
        this.props.addNewuserredux()
    }

    render() {
        console.log('>>> check props:', this.props)
        let listuser = this.props.dataRedux
        return (
            <>

                <div>
                    Hello Nguyễn Thị Thủy
                </div>

                <div>
                    <img src={logo} />
                </div>
                <div>
                    {listuser && listuser.length > 0 &&
                        listuser.map((item, index) => {
                            return (
                                <div key={item.id}>
                                    {index + 1} - {item.name}
                                    &nbsp; <span onClick={() => this.handleDeleteusers(item)}>x</span>
                                </div>
                            )
                        })
                    }
                    <button onClick={() => this.handleAddnewRedux()}>Add new</button>
                </div>

            </>
        )
    }

}
const mapStateToProp = (state) => {
    return {
        dataRedux: state.users
    }
}
const mapDispatchtoprops = (dispatch) => {
    return {
        deleteuserredux: (userdelete) => dispatch({ type: 'DELETE_USERS', payload: userdelete }),
        addNewuserredux: () => dispatch({ type: 'Creat_user' })
    }
}

// export default withRouter(Home)
export default connect(mapStateToProp, mapDispatchtoprops)(Home)