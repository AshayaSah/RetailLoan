import { useState } from 'react';
import Image1 from "../../assets/logo.png";
import { IoPersonOutline } from "react-icons/io5";
import { CiLock } from "react-icons/ci";

const Navbar = () => {
    const [showLoans, setShowLoans] = useState(false);

    const handleLoanClick = (e) => {
        e.preventDefault(); // Prevent default link behavior
        setShowLoans(!showLoans); 
    };

    return (
        <div>
            <nav className="bg-white shadow">
                <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
                    <div className="flex items-center">
                        <img
                            src={Image1}
                            alt="Logo"
                            className="h-10 mr-2"
                        />
                    </div>
                    <div className="flex space-x-7">
                        <a href="#" className="text-gray-700 hover:text-green-600">Accounts & Expenses</a>
                        <a href="#" className="text-gray-700 hover:text-green-600" onClick={handleLoanClick}>Loan</a>
                        <a href="#" className="text-gray-700 hover:text-green-600">Credit Cards</a>
                        <a href="#" className="text-gray-700 hover:text-green-600">Insure</a>
                        <a href="#" className="text-gray-700 hover:text-green-600">Bank with Us</a>
                    </div>
                    <div className="flex items-center space-x-4">
                        <button className="bg-white text-green-600 border border-green-600 px-4 py-2 rounded hover:bg-green-600 hover:text-white flex items-center space-x-2">
                            <IoPersonOutline />
                            <span>Open an Account</span>
                        </button>
                        <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 flex items-center space-x-2">
                            <CiLock />
                            <span>Sign In</span>
                        </button>
                    </div>
                </div>
            </nav>

            {showLoans && (
                <div className="max-w-7xl mx-auto px-4 py-8">
                    <h2 className="text-2xl text-gray-600 mb-2">Loans</h2>
                    <hr className="border-t border-gray-300 mb-4" /> 
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="border p-4 rounded">
                            <h3 className="text-black font-semibold">PERSONAL LOANS</h3>
                            <p>Seek a loan to better manage your finances or financial commitments.</p>
                            <h3 className="text-black mt-4 font-semibold">CASH BACK LOANS</h3>
                            <p>Designed to offer liquidity without compromising on the returns and without liquidating your hard-earned savings.</p>
                        </div>
                        <div>
                            <div className="border p-4 rounded">
                                <h3 className="text-black font-semibold">MORTGAGE LOANS</h3>
                                <p>Turn your dream of owning your own home into reality.</p>
                            </div>
                        </div>
                    </div>
                    <div className="mt-4 text-center"> {/* Centering the link */}
                        <a href="#" className="text-green-600 underline">View All Loans</a>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Navbar;