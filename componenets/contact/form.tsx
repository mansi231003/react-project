"use client"
import { useEffect, useState } from "react"
export default function ContactForm() {
    const [firstName, setfirstName] = useState("");
    const [lastName, setlastName] = useState("");
    const [email, setemail] = useState("");
    const [phoneNumber, setphoneNumber] = useState("");
    const [message, setmessage] = useState("");
    const [loading, setLoading] = useState(false);
    const [firstnameError, setfirstnameError] = useState(false);
    const [lastnameError, setlastnameError] = useState(false);
    const [emailError, setemailError] = useState(false);
    const [numberError, setnumberError] = useState(false);
    const [initialCheck, setinitialCheck] = useState(true);

    function resetForm() {

        if (firstName && lastName && email && phoneNumber) {
            setfirstName("");
            setlastName("");
            setemail("");
            setphoneNumber("");
            setmessage("");
        }
    }

    useEffect(() => {
        if (initialCheck) {
            setinitialCheck(false);
            return;
        }
        firstName ? setfirstnameError(false) : setfirstnameError(true)
    }, [firstName])
    useEffect(() => {
        if (initialCheck) {
            setinitialCheck(false);
            return;
        }
        lastName ? setlastnameError(false) : setlastnameError(true)
    }, [lastName])
    useEffect(() => {
        if (initialCheck) {
            setinitialCheck(false);
            return;
        }
        email ? setemailError(false) : setemailError(true)
    }, [email])
    useEffect(() => {
        if (initialCheck) {
            setinitialCheck(false);
            return;
        }
        phoneNumber ? setnumberError(false) : setnumberError(true)
    }, [phoneNumber])

    function handleClick() {
        event.preventDefault();
        if (firstName && lastName && email && phoneNumber) {
            setLoading(true);
        }

        const formData = {
            first_name: firstName,
            last_name: lastName,
            email: email,
            phone_number: phoneNumber,
            message: message
        }

        console.log(formData);
        setTimeout(() => {
            setLoading(false);
            resetForm();

        }, 3000)
    }

    return (
        <>
            <form className="flex flex-col w-[500px] pt-5 pb-5 gap-2.5 justify-center items-center  bg-gray-200 border-black border-4 max-sm:w-[350px]">
                <div className="font-bold text-3xl pb-5"><u>Contact Form</u></div>
                <div className="flex flex-col w-[60%]">
                    <label htmlFor="firstName" className="font-bold">First Name:</label>
                    <input type="text" id="firstName" value={firstName} className="border w-1/1 bg-white outline" onInput={(e) => { setfirstName(e.target.value) }} />
                    {firstnameError ? <p className="text-red-700">First name is required!</p> : ""}

                </div>
                <div className="flex flex-col w-[60%]">
                    <label htmlFor="lastName" className="font-bold">Last Name:</label>
                    <input type="text" id="lastName" value={lastName} className="border w-1/1 bg-white outline" onInput={(e) => { setlastName(e.target.value) }} />
                    {lastnameError ? <p className="text-red-700">Last name is required!</p> : ""}
                </div>
                <div className="flex flex-col w-[60%]">
                    <label htmlFor="email" className="font-bold">Email:</label>
                    <input type="email" id="email" value={email} className="border w-1/1 bg-white outline" onInput={(e) => { setemail(e.target.value) }} />
                    {emailError ? <p className="text-red-700">Email is required!</p> : ""}
                </div>
                <div className="flex flex-col w-[60%]">
                    <label htmlFor="phoneNumber" className="font-bold">Phone Number:</label>
                    <input type="tel" id="phoneNumber" value={phoneNumber} className="border w-1/1 bg-white outline" onInput={(e) => { setphoneNumber(e.target.value) }} />
                    {numberError ? <p className="text-red-700">Phone Number is required!</p> : ""}
                </div>
                <div className="flex flex-col w-[60%]">
                    <label htmlFor="message" className="font-bold">Message:</label>
                    <textarea id="message" className="border w-1/1 bg-white outline" value={message} onInput={(e) => { setmessage(e.target.value) }}></textarea>
                </div>
                <div className="w-[60%] flex justify-center items-center pt-3 pb-2">
                    {loading ? <button className="bg-black text-white p-2 pr-5 pl-5 rounded-[5px] mt-2 w-[150px]" disabled>Sending.....</button>
                        : <button className="bg-black text-white p-2 pr-5 pl-5 rounded-[5px] mt-2 w-[150px]" onClick={handleClick}>Submit</button>
                    }
                </div>
            </form>
        </>
    )
}