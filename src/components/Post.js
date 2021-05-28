import React, { Component } from 'react'

export default class Post extends Component {
    constructor(props) {
        super(props)
        this.state = {
            likeCount: 0,
            hateCount: 0
        }
    }

    countLike = () => {
        this.setState({
            likeCount: this.state.likeCount + 1
        })
    }

    countHate = () => {
        this.setState({
            hateCount: this.state.hateCount + 1
        })
    }

    resetStatus = () => {
        this.setState({
            likeCount: 0,
            hateCount: 0
        })
    }

    render() {
        return (
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Buttons</h5>
                    <p className="card-text">You can click buttons and do things</p>
                    <button type="button" className="btn btn-success mr-1" onClick={this.countLike}>Like {this.state.likeCount}</button>
                    <button type="button" className="btn btn-danger mr-1" onClick={this.countHate}>Hate {this.state.hateCount}</button>
                    <button type="button" className="btn btn-info" onClick={this.resetStatus}>Reset</button>
                </div>
            </div>
        )
    }
}
