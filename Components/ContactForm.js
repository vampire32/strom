import React from 'react'

const ContactForm = () => {
  return (
		<section
			style={{ backgroundColor: "black", padding: "100px" }}
			className=" pt-5 contact_section layout_padding"
		>
			<div className="container ">
				<div className="heading_container">
					<div className=" text-[28px] font-bold text-[#ffae42]">
						Place an Order
					</div>
				</div>
			</div>
			<div className="container">
				<div className="row">
					<div className="col-md-6">
						<form>
							<div>
								<input
									className="text-[white]"
									style={{
										backgroundColor: "rgba(0, 0, 0, 0.24)",
										border: "1px solid #ffae42",
									}}
									type="text"
									placeholder="Name"
								/>
							</div>
							<div>
								<input
									style={{
										backgroundColor: "rgba(0, 0, 0, 0.24)",
										border: "1px solid #ffae42",
									}}
									type="email"
									placeholder="Email"
								/>
							</div>
							<div>
								<input
									style={{
										backgroundColor: "rgba(0, 0, 0, 0.24)",
										border: "1px solid #ffae42",
									}}
									type="text"
									placeholder="Phone"
								/>
							</div>
							<div>
								<input
									type="text"
									className="message-box"
									placeholder="Message"
									style={{
										backgroundColor: "rgba(0, 0, 0, 0.24)",
										border: "1px solid #ffae42",
									}}
								/>
							</div>
							<div className="d-flex ">
								<a
									style={{
										borderColor: "#ffae42",
										color: "white",
									}}
									class="btn btn-warning  py-3 px-5 animated slideInDown"
									type="submit"
								>
									{" "}
									SEND
								</a>
							</div>
						</form>
					</div>
					<div className="col-md-6">
						<div className="map_container">
							<div className="map-responsive">
								<iframe
									src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3605.942834036601!2d55.40911691536947!3d25.339699232121927!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xc40e812be8863914!2zMjXCsDIwJzIyLjkiTiA1NcKwMjQnNDAuNyJF!5e0!3m2!1sen!2s!4v1674784693596!5m2!1sen!2s"
									width="600"
									height="300"
									frameborder="0"
									style={{ border: "0", width: "100%", height: "100%" }}
									allowfullscreen
								></iframe>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default ContactForm