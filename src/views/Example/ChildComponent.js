import React from "react";
import './Demo.scss'

class ChildComponent extends React.Component {

    state = {
        showJobs: false,
    }

    handleShowHide = () => {
        this.setState({
            showJobs: !this.state.showJobs
        })
    }

    handleOnClickDelete = (job) => {
        console.log('handleOnClickDelete', job)
        this.props.deleteAjob(job)
    }

    render() {
        console.log('>>> check props:', this.props)
        // let name = this.props.name;
        // let age = this.props.age;

        let { name, age, arrJobs } = this.props;
        let { showJobs } = this.state;// truyền(lấy) dứ liệu từ thằng cha xuống thằng con

        let check = showJobs === true ? 'showJob = true' : 'showJob=false';
        console.log('>>> check conditional', check)
        return (
            <>
                {/* <div className="first">
                    <input value={this.state.name} type="text"
                        onChange={(event) => this.handleOnChangeName(event)}
                    />
                    Hello my component, My name is {this.state['name']}
                </div>
                <div className="second">
                    I'm {this.state.age} year old
                </div>
                <div className="third">
                    <button onClick={() => this.handleOnClick()}>Click me</button>
                </div> */}

                {showJobs === false ?
                    <div>
                        <button className="btn-show"
                            onClick={() => this.handleShowHide()}>
                            Show
                        </button>
                    </div>
                    :

                    <>
                        <div className="Joblist">
                            {
                                arrJobs.map((item, index) => {
                                    return (
                                        <div key={item.id}>
                                            {item.title} - {item.luong} <></>
                                            <span onClick={() => this.handleOnClickDelete(item)}>x</span>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div>
                            <button onClick={() => this.handleShowHide()}>Hide</button>
                        </div>
                    </>
                }

            </>
        )
    }
}

//Chủ yếu dùng class

// const ChildComponent = (props) => {
//     let { name, age, arrJobs } = props;
//     return (
//         <>
//             <div className="Joblist">
//                 {
//                     arrJobs.map((item, index) => {
//                         return (
//                             <div key={item.id}>
//                                 {item.title} - {item.luong}
//                             </div>
//                         )
//                     })
//                 }
//             </div>
//         </>
//     )
// }
export default ChildComponent;