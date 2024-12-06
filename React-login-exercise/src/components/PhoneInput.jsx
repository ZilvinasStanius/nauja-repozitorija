import { useState } from "react";

export default function PhoneInput() {
	const [errorMessage, setErrorMessage] = useState("");

	function isPhoneValid(e) {
		const phone = e.target.value;

		if (!/^(\+3706|86|80)[0-9]{7}$/.test(phone))
			return setErrorMessage("Phone number format is not valid");
		setErrorMessage("");
	}

	function handleChange(e) {
		const phoneWithoutIllegalCharacters = e.target.value.replaceAll(
			/[^0-9+]/g,
			""
		);
		e.target.value = phoneWithoutIllegalCharacters;
	}
	return (
		<div className="my-4 ">
			<input
				type="text"
				className={`${
					errorMessage !== "" ? "border-red-500" : ""
				} border-[1px] w-full rounded-md focus:shadow-md outline-none px-4 py-1`}
				placeholder="please enter your phone number"
				name="phone"
				onChange={handleChange}
				onBlur={isPhoneValid}
				required
			/>
			<span className="text-red-500 text-sm">{errorMessage}</span>
		</div>
	);
}
