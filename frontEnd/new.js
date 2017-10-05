
  testCall = () => {
    axios.post('http://localhost:3000/users', {
      params: {
        name: this.state.name,
        email: this.state.email,
        password: this.state.password
      }
    })
    .then( (response) => {
      this.setState({
        token: response.data
      })
      console.log(response)
    })
  }
