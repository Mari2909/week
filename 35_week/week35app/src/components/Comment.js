import React from 'react';
import './Comment.css';

function checkSpam(str) {
    const result1 = str.replace(/viagra/ig, "***");
    const result2 = result1.replace(/XXX/ig, "***");
    return result2;
}

let comments = [];

let color;

export default class FormComment extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            value: '',
            color: ''
        };
    }

    handleChange = (e) => {
        this.setState({ value: e.target.value })
    }

    handleSubmit = (e) => {
        comments.unshift(checkSpam(this.state.value));
        console.log(comments)
        this.setState({ comments: comments })
        color = '#' + Math.random().toString(16).substr(-6);
        this.setState({ color: color });
        console.log(color)
        e.preventDefault();
    }


    render() {

        return (
            <form form className='container' onSubmit={this.handleSubmit} >
                <div className="mb-3">
                    <div id="comment">
                        {comments.map((item, index) => {
                            return <Comment key={index} comment={item} color={this.state.color} />
                        })}
                    </div>
                    <div className="form-group">
                        <label for="exampleFormControlTextarea1"></label>
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" value={this.state.value} onChange={this.handleChange} ></textarea>
                    </div>
                </div>
                <button type="submit" className="btn btn-primary btn-sm btn-block mb-3">Отправить</button>
            </form>
        );
    }
}

class Comment extends React.Component {
    render() {
        const { comment, color } = this.props;
        return (
            <div className='underline '
                style={{
                    color: color
                }}>
                {comment}
            </div>
        );
    }
}



