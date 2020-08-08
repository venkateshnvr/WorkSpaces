import React, { Component } from 'react';
import './Form.css'

class Form extends Component {

    list = [
        {
            things: 'item1',
            owner: 'venkatesh',
        },
        {
            things: 'item2',
            owner: 'sai',
        }
    ]
    constructor(props) {
        super(props);
        this.state = ({
            things: '',
            owner: '',
        });
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChangeSort = this.handleChangeSort.bind(this);
    }

    handleChange(event) {
        this.setState({
            things: event.target.value,
            owner: event.target.value,
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        this.list.push(this.state)
        document.getElementById("formSubmit").style.display = 'none'
        document.getElementById("things").value = ""
        document.getElementById("owner").value = ""
    }


    formDisplay() {
        document.getElementById("formSubmit").style.display = 'block'
    }

    handleChangeSort(event) {
        let sort = this.list.sort((a, b) => {
            if(event === 'things') {
                console.log(a.things)
                return a.things > b.things
            } else {
                return a.owner > b.owner
            }
        })
        this.setState({
            list: sort
        })
    }

    componentDidMount() {

        
    }
    render() {
        return (
            <div className="margin">
                <div>
                    <table>
                        <thead>
                            <tr>
                                <th>index</th>
                                <th>
                                    <button onClick={() => this.handleChangeSort('things')}>Things</button>
                                </th>
                                <th>
                                    <button onClick={() => this.handleChangeSort('owner')}>Owner</button>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.list.map((values, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{index}</td>
                                        <td>{values.things}</td>
                                        <td>{values.owner}</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                    <button onClick={this.formDisplay}>Add items</button>
                    <form onSubmit={this.handleSubmit} id="formSubmit">
                        <label>
                            Things:
            <input type="text" name={this.state.things} id="things" onChange={this.handleChange} />
                        </label>
                        <label>
                            owner:
            <input type="text" name={this.state.owner} id="owner" onChange={this.handleChange} />
                        </label>
                        <input type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        );
    }
}

export default Form;