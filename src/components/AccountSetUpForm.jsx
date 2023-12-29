import React, { useState } from 'react'

export default function AccountSetUpForm({ setCurrentTab, currentTab }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');



    const validate = () => {
        if (!email.trim() || !password.trim() || !confirmPassword.trim()) {
            // Add the 'invalid' class to the empty fields
            document.getElementById("accountSetup").querySelectorAll('input').forEach((input) => {
                if (!input.value.trim()) {
                    input.classList.add('invalid');
                }
            });
            // You can also display an error message or perform other actions here
            return false;
        }
        return true;
    }

    const handleInputChange = (e, setState) => {
        setState(e.target.value);
        // Remove the 'invalid' class when the user starts typing
        e.target.classList.remove('invalid');
    };

    const handleNextClick = () => {
        const valid = validate();
        if (valid) {
            setCurrentTab(currentTab + 1);
        }
    }


    return (
        <div id='accountSetup'>
            <p className="text-md text-gray-700 leading-tight text-center mt-8 mb-5">
                Create your account
            </p>
            <div className="mb-6">
                <input
                    type="email"
                    placeholder="Email Address"
                    name="email"
                    className="w-full px-4 py-3 rounded-md text-gray-700 font-medium border-solid border-2 border-gray-200"
                    onChange={(e) => handleInputChange(e, setEmail)}
                />
            </div>
            <div className="mb-6">
                <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    className="w-full px-4 py-3 rounded-md text-gray-700 font-medium border-solid border-2 border-gray-200"
                    onChange={(e) => handleInputChange(e, setPassword)}
                />
            </div>
            <div className="mb-6">
                <input
                    type="password"
                    placeholder="Confirm Password"
                    name="password"
                    className="w-full px-4 py-3 rounded-md text-gray-700 font-medium border-solid border-2 border-gray-200"
                    onChange={(e) => handleInputChange(e, setConfirmPassword)}
                />
            </div>
            <div className="form-footer flex gap-3" >
                <button
                    type="button"
                    id="nextBtn"
                    className="flex-1 border border-transparent focus:outline-none p-3 rounded-md text-center text-white bg-indigo-600 hover:bg-indigo-700 text-lg"
                    onClick={() => handleNextClick()}
                >
                    Next
                </button>
            </div>
        </div>
    )
}
