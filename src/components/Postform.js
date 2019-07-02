import React, { Component } from 'react'

class Postform extends Component {
    state = {
        title: '',
        body: ''
    }

    async onChange(e) {
        await this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit(e) {
        e.preventDefault();

        const post = {
            title: this.state.title,
            body: this.state.body
        }

        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(post)
        })
            .then(res => res.json())
            .then(data => console.log(data));
    }

    render() {
        return (
            <div>
                <h1>Add Post</h1>
                <form onSubmit={(e) => this.onSubmit(e)}>
                    <div>
                        <label>Title: </label><br />
                        <input name="title" type="text" onChange={(e) => this.onChange(e)} value={this.state.title} />
                    </div>
                    <br />
                    <div>
                        <label>Body: </label><br />
                        <textarea name="body" type="text" onChange={(e) => this.onChange(e)} value={this.state.body} />
                    </div>
                    <br />
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default Postform;