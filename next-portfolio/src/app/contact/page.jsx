"use client";

import React, { useState, useEffect } from 'react';

export default function Contact() {
    const [mobile, setMobile] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    useEffect(() => {
        const storedPrice = localStorage.getItem("totalPrice");
        if (storedPrice) {
            setPrice(parseFloat(storedPrice));
        }
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!email || !mobile || !message) {
            alert("Please fill out all fields.");
            return;
        }

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            alert("Please enter a valid email address.");
            return;
        }

        if (!/^\d{10}$/.test(mobile)) {
            alert("Mobile number must be exactly 10 digits.");
            return;
        }

        const booked = JSON.parse(localStorage.getItem('Portfolio')) || [];
        booked.push({ email, name, mobile, message });
        localStorage.setItem('Contact', JSON.stringify(booked));
        localStorage.removeItem("totalPrice");
        setMobile('');
        setEmail('');
        setMessage('');
    };

    return (
        <div className="checkout-container max-w-[40%] mx-auto p-6">
            <h1 className="text-2xl font-bold mb-4 text-center">Get in Touch</h1>
            <p className="mb-4">
                Tak fordi du kiggede forbi!  
                Hvis du leder efter en motiveret og detaljeorienteret webudvikler med interesse for front-end og responsivt design, så vil jeg meget gerne høre fra dig.  
                Uanset om det handler om et projekt, en praktikplads eller en uformel snak, er du velkommen til at kontakte mig. Jeg er altid åben for nye muligheder og udvikling.
            </p>
            <form className="grid grid-cols-1 gap-4" onSubmit={handleSubmit}>
                <div>
                    <label className="block mb-2">Email</label>
                    <input
                        type="email"
                        name="email"
                        placeholder="Please enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="border border-gray-300 rounded-md p-2 w-full"
                    />
                </div>

                <div>
                    <label className="block mb-2">Mobile</label>
                    <input
                        type="text"
                        name="mobile"
                        placeholder="Enter mobile"
                        value={mobile}
                        maxLength="10"
                        onChange={(e) => setMobile(e.target.value)}
                        className="border border-gray-300 rounded-md p-2 w-full"
                    />
                </div>

                <div>
                    <label className="block mb-2">Message</label>
                    <textarea
                        name="message"
                        placeholder="Enter your message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="border border-gray-300 rounded-md p-2 w-full"
                    />
                </div>

                <button
                    type="submit"
                    className="bg-[#3F8E00] text-white font-bold py-2 rounded-md hover:bg-green-600 transition duration-300"
                >
             Submit
                </button>
            </form>
        </div>
    );
}





