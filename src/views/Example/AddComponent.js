import React from "react";

class AddComponent extends React.Component {

    state = {
        title: '',
        luong: '',
    }

    handleChangeJobTitle = (event) => {
        this.setState({
            title: event.target.value
        })
    }
    handleChangeLuong = (event) => {
        this.setState({
            luong: event.target.value
        })
    }
    handleSubmit = (event) => {
        event.preventDefault()
        if (!this.state.title || !this.state.luong) {
            alert('Missing required params')
            return;
        }
        console.log('>>> check data :', this.state)
        this.props.addNewJob({
            id: Math.floor(Math.random() * 11),
            title: this.state.title,
            luong: this.state.luong,
        })
        this.setState({
            title: '',
            luong: '',
        })
    }

    render() {
        return (
            <form>
                <label htmlFor="fname">Job title:</label><br />
                <input type="text"
                    value={this.state.title}
                    onChange={(event) => this.handleChangeJobTitle(event)}
                />
                <br />
                <label htmlFor="lname">Luong:</label><br />
                <input type="text"
                    value={this.state.luong}
                    onChange={(event) => this.handleChangeLuong(event)}
                />
                <br /><br />
                <input type="submit"
                    onClick={(event) => this.handleSubmit(event)}

                />

            </form>
        )
    }
}

export default AddComponent