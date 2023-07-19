import {useState, useEffect } from 'react';
import Head from "next/head";


export default function Contact() {
	<br></br>
	const [submitted, setSubmitted] = useState(false);
	const [submitting, setSubmitting] = useState(false);

	
	
	  function validateForm(form) {

		// add event listener to form
		form.addEventListener('submit', function (event) {
			if (!form.checkValidity()) {
			  event.preventDefault()
			  event.stopPropagation()
			}
				
			
	
			form.classList.add('was-validated')

			

		  }, false)

	}

	function submitForm() {
		var form = document.getElementById('contactForm')
		event.preventDefault()
		console.log('submitting form')
	
		const formData = {
			first_name: form.first_name.value,
			last_name: form.last_name.value,
			email: form.email.value,
			phone: form.phone.value,
			company_name: form.company_name.value,
			street_address: form.street_address.value,
			city: form.city.value,
			state: form.state.value,
			zip: form.zip.value,
			message: form.message.value,
			updates: form.updates.checked,
			subject: form.subject.value

		};

		
		console.log(formData)
		
		setSubmitting(true);
		// send the form data to /api/contact
		fetch('/api/contact', {
		  method: 'POST',
		  headers: {
			'Content-Type': 'application/json',
		  },
		  body: JSON.stringify(formData)
		})
		  .then(response => response.json())
		  .then(() => {
			setSubmitted(true);
			form.reset();
			console.log('Message sent successfully!');
			// remove the form html and replace with a success message
			document.getElementById('divForm').innerHTML = '<div class="d-flex justify-content-center align-items-center h-100"><h3>Thank you for your message. We will be in touch shortly.</h3></div>';



		  })
		  .catch(err => {
			console.log(err);
			alert('Message failed to send.');
			document.getElementById('status').innerHTML = 'Message failed to send.';
		  })
		  .finally(() => {
			setSubmitting(false);
		  });

	}





	useEffect(() => {
		var form = document.getElementById('contactForm')
		validateForm(form)
	}, [])

  return (
    <main>
		<Head>
			<title>Contact Us | Grab The Axe | Total Security Solutions</title>
		</Head>

		<div id="center" className="col-12 text-center mt-5">
			<h2 className="display-4 pt-6">Contact Us</h2><br />
			<div className="border-top border-darktext-left w-50 mx-auto my-3"></div><br />
			<h3>Secure Your Business Now - Get a Comprehensive Security Assessment From the Experts!</h3>	
		</div>
		<div className="spacer"></div>





		<div className="container">
			<div className="row py-4 d-flex justify-content-start">
	
				<div className="col-lg-5 mb-4 d-flex flex-column p-4">
				<div >
					<hr className="bg-light mt-0" />
					<h5>Contact Info</h5>
					<hr className="bg-light " />
					<p><i className="fas fa-phone mr-3"></i><a href="tel:+6028280532">(602) 828-0532</a></p>
					<p><i className="fas fa-envelope mr-3"></i><a href="mailto:+info@grabtheaxe.com">info@grabtheaxe.com</a></p>
					<p><i className="fas fa-home mr-3"></i>18250 N. 32nd St. Phoenix, Arizona 85032</p>
				</div>

				<div className="align-center">
					<hr className="bg-light" />
					<h5>Hours of Operation</h5>
					<hr className="bg-light" />
					<p>24/7, Year Round</p>
					
				</div>

				<div >
					<hr className="bg-light" />
					<h5>Service Area</h5>
					<hr className="bg-light" />
					<p>Located in Phoenix, Arizona</p>
					<p>National and Global Assessments Available</p>
					
				</div>
	

		
					
				</div>

				<div id ="divForm" className="col-lg-7 p-4" >
					<img id="formImg" src="img\logo_shieldRGB.png"></img>
					<hr className="bg-light mt-0" />
					<h5>Send a Message:</h5>
					<hr className="bg-light " />
					<form className="needs-validation" id="contactForm" name="contactForm" onSubmit={submitForm} noValidate>
			
						<div className="row">
						  <div className="col p-0">
							<div className="form-group">
							  <input type="text" id="first_name" className="form-control" name="first_name" required/>
							  <div className="valid-feedback">
								Looks good!
							  </div>
							  <label className="form-label" htmlFor="first_name">First name</label>
							</div>
						  </div>
						  <div className="col pr-0">
							<div className="form-group">
							  <input type="text" id="last_name" className="form-control"  name="last_name" required/>
							  <div className="valid-feedback">
								Looks good!
							  </div>
							  <label className="form-label" htmlFor="last_name">Last name</label>
							</div>
						  </div>
						</div>
					  	
					
						<div className="form-group ">
							<input type="email" id="email" className="form-control" name="email" required/>
							<div className="invalid-feedback">
								Please enter a valid email.
							  </div>
							<label className="form-label" htmlFor="email">Email</label>
						  </div>

					
						<div className="form-group ">
						  <input type="text" id="company_name" className="form-control" name="company_name" required/>
						  <div className="valid-feedback">
							Looks good!
						  </div>
						  <label className="form-label" htmlFor="company_name">Company name</label>
						</div>
					  
					
						<div className="form-group ">
						  <input type="text" id="street_address" className="form-control" name="street_address" required/>
						  <div className="invalid-feedback">
							Please enter your address.
						  </div>
						  <label className="form-label" htmlFor="street_address">Address</label>
						</div>

						<div className="row">
							<div className="col pl-0">
					
								<div className="form-group ">
									<input type="text" id="city" className="form-control" name="city" required/>
									<div className="invalid-feedback">
										Please enter your city.
									</div>
									<label className="form-label" htmlFor="city">City</label>
									
								</div>
							</div>
							<div className="col">
							
								<div className="form-group ">
									<input type="text" id="state" className="form-control"  name="state" required/>
									<div className="invalid-feedback">
										Please enter your state.
									</div>
									<label className="form-label" htmlFor="state">State</label>
								</div>
							</div>
							<div className="col pr-0">
						
								<div className="form-group	">
									<input type="text" id="zip" className="form-control" name="zip" required/>
									<div className="invalid-feedback">
										Please enter your zipcode.
									</div>
									<label className="form-label" htmlFor="zip">Zip</label>
								</div>
							</div>
						</div>




					  

					  
					
						<div className="form-group ">
						  <input type="tel" id="phone" className="form-control" name="phone" required/>
						  <div className="invalid-feedback">
							Please enter a valid phone number.
						  </div>
						  <label className="form-label" htmlFor="phone">Phone</label>
						</div>
					  
				
						<div className="form-group">
							<select className="form-select" id="subject" name="select" defaultValue="Choose a subject" required>
							  <option defaultValue disabled>Choose a subject</option>
							  <option>General Inquiry</option>
							  <option>Security Assessment</option>
							  <option>Training and Education</option>
							  <option>Other</option>
							</select>
							<div className="invalid-feedback">
								Please select a subject.
							</div>
							<label className="form-label" htmlFor="subject">Subject</label>
						</div>


		
						<div className="form-group mb-4">
						  <textarea className="form-control" id="message" rows="4" name="message" required></textarea>
						  <div className="invalid-feedback">
							Please provide a message.
						 </div>
						  <label className="form-label" htmlFor="message">Additional information</label>
						</div>

						
						<div className="form-check mb-4">
							<input type="checkbox" className="form-check-input" name="contact__updates" id="updates" ></input>
							<label htmlFor="updates" className="form-check-label">Notify me about new updates</label><br />
							<input type="checkbox" className="form-check-input" name="privacy" id="privacy"  required></input>
							<label htmlFor="privacy" className="form-check-label">I have read and consent to the <a href="#">privacy policy</a>.</label>
							<div className="invalid-feedback">
								You must consent to the privacy policy.
							</div>
						</div>


					
						<button type="submit" id="submitBtn"  className="btn btn-primary btn-md mb-4">Submit</button>
						<div id="status"></div>
					  </form>

				</div>
			</div>
		</div>





	
				


		<div className="spacer"></div>

    </main>
    
  );
}
