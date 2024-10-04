import { ChangeEvent, useRef, useState } from "react";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import emailjs from "@emailjs/browser";

type FormState = {
	name: string;
	email: string;
	message: string;
};

const Contact = () => {
	const formRef = useRef<HTMLFormElement>(null!);

	const [loading, setLoading] = useState(false);
	const [form, setForm] = useState<FormState>({
		name: "",
		email: "",
		message: "",
	});

	const handleChange = ({
		target: { name, value },
	}: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		console.log(name, value);
		setForm({ ...form, [name]: value });
	};

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		setLoading(true);

		try {
			await emailjs.send(
				"service_4h85ig9",
				"template_jux0x1s",
				{
					from_name: form.name,
					to_name: "Chris",
					message: form.message,
					to_email: "cwilliford200@gmail.com",
				},
				"yNKpDZj33MaqwduF_",
			);

			setLoading(false);

			alert("Your message has been sent!");

			setForm({ name: "", email: "", message: "" });
		} catch {
			setLoading(false);

			alert("Something went wrong!");
		}
	};

	return (
		<section className="c-space my-20">
			<div className="relative min-h-screen flex items-center justify-center flex-col">
				<div className="contact-container">
					<p className="head-text">Dont Be Shy, Say Hi!</p>
					<p className="text-lg text-white-600">
						Whether you're looking to build a new website, improve
						your existing platform, or bring a unique project to
						life, I'm here to help.
					</p>
					<p className="text-lg text-white-600">
						By Phone: +1 (916) 412-7799
					</p>
					<p className="text-lg text-white-600">
						Or Email Below
						<img
							src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Hand%20gestures/Backhand%20Index%20Pointing%20Down.png"
							alt="Backhand Index Pointing Down"
							width="25"
							height="25"
						/>
					</p>

					<form
						ref={formRef}
						onSubmit={handleSubmit}
						className="mt-12 flex flex-col space-y-7"
					>
						<label className="space-y-3">
							<span className="field-label">Full Name</span>

							<input
								type="text"
								name="name"
								value={form.name}
								onChange={handleChange}
								required
								className="field-input"
								placeholder="John Doe"
							/>
						</label>
						<label className="space-y-3">
							<span className="field-label">Email</span>

							<input
								type="email"
								name="email"
								value={form.email}
								onChange={handleChange}
								required
								className="field-input"
								placeholder="johndoe@gmail.com"
							/>
						</label>
						<label className="space-y-3">
							<span className="field-label">Your Message</span>

							<textarea
								name="message"
								value={form.message}
								onChange={handleChange}
								required
								rows={5}
								className="field-input"
								placeholder="Hi, I'm interested in ..."
							/>
						</label>

						<button
							className="field-btn"
							type="submit"
							disabled={loading}
						>
							{loading ? "Sending ..." : "Send Message"}
							<FaArrowUpRightFromSquare
								className={`w-3 h-3 text-white`}
							/>
						</button>
					</form>
				</div>
			</div>
		</section>
	);
};

export default Contact;
