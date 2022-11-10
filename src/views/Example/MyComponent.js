import React from "react";
import ChildComponent from "./ChildComponent";
import AddComponent from "./AddComponent";

class MyComponent extends React.Component {

    /*
    JSX => return block
    fragment
    */
    state = {
        // name: 'Nguyễn Thị Thủy',
        // age: 19

        arrJobs: [
            { id: 'abcJob1', title: 'Developer', luong: '500$' },
            { id: 'abcJob2', title: 'Testter', luong: '400$' },
            { id: 'abcJob3', title: 'Project managers', luong: '1000$' },

        ]
    }

    addNewJob = (Job) => {
        console.log('Check job :', Job)
        this.setState({
            arrJobs: [...this.state.arrJobs, Job]
        })
    }

    deleteAjob = (job) => {
        let currenJobs = this.state.arrJobs
        currenJobs = currenJobs.filter(item => item.id !== job.id)
        this.setState({
            arrJobs: currenJobs
        })
    }

    // handleOnChangeName = (event) => {
    //     this.setState({
    //         name: event.target.value
    //     })
    // }

    // handleOnClick = () => {
    //     alert('Hello Nguyễn Thị Thủy')
    // }
    componentDidUpdate(prevProps, prevState) {
        console.log('>>run didupdate:', 'prev state:', prevState, 'current state :', this.state)
    }

    componentDidMount() {
        console.log('>>> run component did mount ')
    }


    render() {
        console.log('>>> call render:', this.state)

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
                <AddComponent
                    addNewJob={this.addNewJob}
                />
                <ChildComponent

                    arrJobs={this.state.arrJobs}
                    deleteAjob={this.deleteAjob}
                ></ChildComponent>

            </>
        )
    }
}


export default MyComponent;