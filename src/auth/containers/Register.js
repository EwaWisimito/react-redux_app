import React, {Component} from 'react'

class Register extends Component{

    state = {
        email: '',
        password: '',
        firstName: '',
        lastName: '',
    }



    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.valu})
    }
    handelSubmit = (event) =>{
        event.preventDefault()
    }
    render(){
        return(
            <form>
                <div>
                    <input type="email" name="email" placeholder="E-maile" />
                </div>
                <div>
                    <input type="password" name="password" placeholder="Password" />
                </div>
                <div>
                    <input type="text" name="first Name" placeholder="First Name" />
                </div>
                <div>
                    <input type="text" name="last Name" placeholder="Last Name" />
                </div>
                <div>
                    <input type="submit"  value="Register me" />
                </div>
            </form>
        )
    }
}

export default Register;