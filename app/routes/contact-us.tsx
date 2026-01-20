export default function ContactUsRoute() {
	return (
		<main className="container py-16">
			<h1 className="text-mega">Contact Us</h1>
			<p className="m-4 text-base md:text-lg lg:text-xl">
				Our phone number is: <b>01534 787993</b>
			</p>
			<p className="m-4 text-base md:text-lg lg:text-xl">
				We will be available from:
				<ol>
					<li>
						<b>8AM - 7PM</b> from Monday to Friday
					</li>
					<li>
						<b>9AM - 5PM</b> on Saturday and Sunday
					</li>
				</ol>
			</p>
			<p className="m-4 mt-16 text-base md:text-lg lg:text-xl">
				Alternatively, you can contact us via email:{' '}
				<b>contact@epicnews.co.uk</b>
			</p>
			<p className="m-4 text-base md:text-lg lg:text-xl">
				Should you wish to contact us regarding job placements, please use:{' '}
				<b>recruitment@epicnews.co.uk</b>
			</p>
		</main>
	)
}
