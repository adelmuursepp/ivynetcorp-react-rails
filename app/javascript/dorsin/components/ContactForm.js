import React from 'react';
import { Form, FormGroup, Input, Label, Button } from 'reactstrap';
import axios from 'axios'


export default class extends React.Component {
  constructor(props) {
	super(props);
	this.state = { name: 'Name', email: '', message: '' };
	this.handleChange = this.handleChange.bind(this);
	this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = e => {
      this.setState({ [e.target.name]: e.target.value})
  }

  async handleSubmit(e) {
      e.preventDefault()

      const {name, email, message} = this.state

      const form = await axios.post('/api/form', {
          name, 
          email,
          message
      })
  }

  render() {
      return (
          <Form style={{width: '100px'}}>
              <FormGroup>
                  <Label for="name">Name:</Label>
                  <Input
                  type="text"
                  name="name"
                  onChange={this.handleChange}/>
              </FormGroup>
              <FormGroup>
                  <Label for="email">Email:</Label>
                  <Input
                  type="email"
                  name="email"
                  onChange={this.handleChange}/>
              </FormGroup>
              <FormGroup>
                  <Label for="message">Name:</Label>
                  <Input
                  type="textarea"
                  name="message"
                  onChange={this.handleChange}/>
              </FormGroup>
            <Button>Submit</Button>
          </Form>
      )
  }
}