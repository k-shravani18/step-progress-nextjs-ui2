import React, { useState } from 'react'

export default function PersonalDetails({ setCurrentTab, currentTab }) {
    const [name, setName] = useState('');
    const [mobile, setMobile] = useState('');
    const [address, setAddress] = useState('');



    const validate = () => {
        if (!name.trim() || !mobile.trim() || !address.trim()) {
            // Add the 'invalid' class to the empty fields
            document.getElementById("personalDetail").querySelectorAll('input').forEach((input) => {
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
        <div id="personalDetail">
            <p className="text-md text-gray-700 leading-tight text-center mt-8 mb-5">
                We will never sell it
            </p>
            <div className="mb-6">
                <input
                    type="text"
                    placeholder="Full name"
                    name="fullname"
                    className="w-full px-4 py-3 rounded-md text-gray-700 font-medium border-solid border-2 border-gray-200"
                    onChange={(e) => handleInputChange(e, setName)}
                />
            </div>
            <div className="mb-6">
                <input
                    type="text"
                    placeholder="Mobile"
                    name="mobile"
                    className="w-full px-4 py-3 rounded-md text-gray-700 font-medium border-solid border-2 border-gray-200"
                    onChange={(e) => handleInputChange(e, setMobile)}
                />
            </div>
            <div className="mb-6">
                <input
                    type="text"
                    placeholder="Address"
                    name="address"
                    className="w-full px-4 py-3 rounded-md text-gray-700 font-medium border-solid border-2 border-gray-200"
                    onChange={(e) => handleInputChange(e, setAddress)}
                />
            </div>
            <div className='form-footer flex gap-3'>
                <button
                    type="button"
                    id="prevBtn"
                    className="flex-1 focus:outline-none border border-gray-300 py-2 px-5 rounded-lg shadow-sm text-center text-gray-700 bg-white hover:bg-gray-100 text-lg"
                    onClick={() => setCurrentTab(1)}
                >Previous</button>
                <button
                    type="button"
                    id="nextBtn"
                    className="flex-1 border border-transparent focus:outline-none p-3 rounded-md text-center text-white bg-indigo-600 hover:bg-indigo-700 text-lg"
                    onClick={handleNextClick}
                >
                    Submit</button>
            </div>
        </div>
    )
}
