import React from 'react';


export default class extends React.Component {
  constructor(props) {
	super(props);
	this.state = { feedback: '', name: 'Name', email: '' };
	this.handleChange = this.handleChange.bind(this);
	this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
	return (
		<section className="section" id="contact">
        <div className="container">
            <div className="row">
                <div className="col-lg-8 offset-lg-2">
                    <h1 className="section-title text-center">Get In Touch</h1>
                    <div className="section-title-border margin-t-20"></div>
                    <p className="section-subtitle text-muted text-center font-secondary padding-t-30">We thrive when coming up with innovative ideas but also understand that a smart concept should be supported with measurable results.</p>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-4">
                    <div className="mt-4 pt-4">
                        <p className="mt-4"><span className="h5">Address</span><br /> <span className="text-muted d-block mt-2">IvyNet Corporation 1063 Quaker Hill Ct. Elgin, IL 60120</span></p>
                        <p className="mt-4"><span className="h5">Phone:</span><br /> <span className="text-muted d-block mt-2">888.774 4894</span></p>
                    </div>
                </div>
                <div className="col-lg-8">
                    <div className="custom-form mt-4 pt-4">
                        <div id="message"></div>
                        <form method="post" action="home-one" name="contact-form" id="contact-form">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="form-group mt-2">
                                        <input name="name" id="name" type="text" className="form-control" placeholder="Your name*" />
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group mt-2">
                                        <input name="email" id="email" type="email" className="form-control" placeholder="Your email*" />
                                    </div>
                                </div>                                
                            </div>
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="form-group mt-2">
                                        <input type="text" className="form-control" id="subject" placeholder="Your Subject.." />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="form-group mt-2">
                                        <textarea name="comments" id="comments" rows="4" className="form-control" placeholder="Your message..."></textarea>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-12 text-right">
                                    <input type="submit" id="submit" name="send" className="submitBnt btn btn-custom" value="Send Message" />
                                    <div id="simple-msg"></div>
                                </div>
                            </div>
                        </form>
                    </div>  
                </div>
            </div>
        </div>
		<form className="test-mailing">
    	<h1>Let's see if it works</h1>
    	<div>
      	<textarea
        	id="test-mailing"
        	name="test-mailing"
        	onChange={this.handleChange}
        	placeholder="Post some lorem ipsum here"
        	required
        	value={this.state.feedback}
        	style={{width: '100%', height: '150px'}}
      	/>
    	</div>
    	<input type="button" value="Submit" className="btn btn--submit" onClick={this.handleSubmit} />
  	</form>
    </section> 

	)
  }

  handleChange(event) {
    this.setState({feedback: event.target.value})
  }

  handleSubmit (event) {
	const templateId = 'template_wTL9PUJ4';

	this.sendFeedback(templateId, {message_html: this.state.feedback, from_name: this.state.name, reply_to: this.state.email})
  }

  sendFeedback (templateId, variables) {
	  
	window.emailjs.send(
  	'adel.muursepp@gmail.com', templateId,
  	variables
  	).then(res => {
    	console.log('Email successfully sent!')
  	})
  	// Handle errors here however you like, or use a React error boundary
  	.catch(err => console.error('Oh well, you failed. Here some thoughts on the error that occured:', err))
  }
}