import React, {Component} from 'react'
import {connect} from 'react-redux'
import {registerUser} from '../action'

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
        this.props.registerUser(this.state)
        event.preventDefault()
    }

    renderIndicator = () => {
        if(this.props.isLoading ){
            return <div> Loading...</div>
        }
        return null
    }
    renderError = () => {
        if(this.props.hasError){
            return <div><span style={{color: 'red'}}>Error</span></div>
        }
        return null
    }

    render(){
        return(
            <form onSubmit={this.handelSubmit}>
            {this.renderIndicator()}
            {this.renderError()}
        
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

const mapStateToProps = state =>({
    isLoading: state.auth.isLoading,
    hasError: state.auth.hasError
})
const mapDispatchToProps = dispatch =>({
    registerUser: (formData) => dispatch(registerUser(formData))
})

export default connect (mapStateToProps, mapDispatchToProps)(Register);