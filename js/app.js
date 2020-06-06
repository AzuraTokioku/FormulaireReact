class App extends React.Component {
    state =  {
        Name: "Your Name",
        Message: "Your Comment",
        comments : []
    }
    handleName = event =>{
        this.setState({
            name : event.target.value,
        })
    }
    handleMessage = event =>{
        this.setState ({
            message : event.target.value,
        })
    }
    handleSubmit = event =>{
        event.preventDefault();
        this.setState ({
            comments : this.state.comments.concat(this.state.name,this.state.message)
        })
        console.log(this.state,this.state.comments)
    }
    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <p>Say Something</p>
                <label>
                    <input type="text" id="name" className="form__name" placeholder="Your Name"onChange={this.handleName}/>
                </label>  
                <label>
                    <textarea  id="message" cols="30" rows="10" className="form__text" placeholder="Your Comment" onChange={this.handleMessage} />
                </label>
                <label>   
                    <input type="submit" value="Comment >" className="form__button" />                 
                </label> 
            </form>
        )
    }
}
ReactDOM.render(<App/>,document.getElementById("form"));