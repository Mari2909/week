import React from 'react';
import './Comment.css';

function checkSpam(str) {
    const result1 = str.replace(/viagra/ig, "***");
    const result2 = result1.replace(/XXX/ig, "***");
    return result2;
}

let comments = [];
export default class FormComment extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            value: '',
            color: '#' + Math.random().toString(16).substr(-6)
        };
    }

    handleChange = (e) => {
        this.setState({ value: e.target.value })
    }

    handleSubmit = (e) => {
        this.setState({ color: '#' + Math.random().toString(16).substr(-6) })
        comments.unshift([checkSpam(this.state.value), this.state.color]);
        this.setState({ comments: comments })
        e.preventDefault();
    }


    render() {
        return (
            <form className='container' onSubmit={this.handleSubmit} >
                <div className="mb-3">
                    <div id="comment">
                        {comments.map((item, index) => {
                            return <Comment key={index} comment={item[0]} color={item[1]} />
                        })}
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleFormControlTextarea1"></label>
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



