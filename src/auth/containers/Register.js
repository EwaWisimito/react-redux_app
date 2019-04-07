import React, {Component} from 'react'

class Register extends Component{

    state = {
        email: '',
        password: '',
        firstName: '',
        lastName: '',
    }

    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value})
    }

    handelSubmit = (event) =>{
        event.preventDefault()
    }

    render(){
        return(
            <form>
                <div>
                    <input type="email" name="email" placeholder="E-mail" onChange={this.handleChange} />
                </div>
                <div>
                    <input type="password" name="password" placeholder="Password" onChange={this.handleChange}/>
                </div>
                <div>
                    <input type="text" name="firstName" placeholder="First Name" onChange={this.handleChange}/>
                </div>
                <div>
                    <input type="text" name="lastName" placeholder="Last Name" onChange={this.handleChange}/>
                </div>
                <div>
                    <input type="submit"  value="Register me" onChange={this.handleChange}/>
                </div>
            </form>
        )
    }
}

export default Register;