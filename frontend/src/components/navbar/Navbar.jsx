import { useState } from 'react';
import { Link } from 'react-router-dom';
import Image1 from "../../assets/logo.png";
import { IoPersonOutline } from "react-icons/io5";
import { CiLock } from "react-icons/ci";

const Navbar = () => {
    const [showLoans, setShowLoans] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const handleMouseEnter = () => {
        setShowLoans(true);
    };

    const handleMouseLeave = () => {
        setShowLoans(false);
    };

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <div>
            <nav className="bg-white shadow">
                <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
                    <div className="flex items-center">
                        <Link to="/">
                            <img
                                src={Image1}
                                alt="Logo"
                                className="h-10 mr-2 cursor-pointer"
                            />
                        </Link>
                    </div>
                    <div className="hidden md:flex space-x-7">
                        <a href="#" className="text-gray-700 hover:text-blue-600">Accounts & Expenses</a>
                        <Link 
                            to="#" 
                            className="text-gray-700 hover:text-blue-600" 
                            onMouseEnter={handleMouseEnter} 
                            onMouseLeave={handleMouseLeave}
                        >
                            Loan
                        </Link>
                        <a href="#" className="text-gray-700 hover:text-blue-600">Credit Cards</a>
                        <a href="#" className="text-gray-700 hover:text-blue-600">Insure</a>
                        <a href="#" className="text-gray-700 hover:text-blue-600">Bank with Us</a>
                    </div>
                    <div className="flex items-center space-x-4">
                        <button className="bg-white text-blue-600 border border-blue-600 px-4 py-2 rounded hover:bg-blue-600 hover:text-white flex items-center space-x-2">
                            <IoPersonOutline />
                            <span>Open an Account</span>
                        </button>
                        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 flex items-center space-x-2">
                            <CiLock />
                            <span>Sign In</span>
                        </button>
                    </div>
                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button onClick={toggleMobileMenu} className="focus:outline-none">
                            <svg className="w-6 h-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                            </svg>
                        </button>
                    </div>
                </div>
            </nav>

            {showLoans && (
                <div 
                    className="max-w-7xl mx-auto px-4 py-8 bg-gray-50 border border-gray-300 rounded mt-2"
                    onMouseLeave={handleMouseLeave} 
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <h2 className="text-2xl text-gray-600 mb-2">Loans</h2>
                            <hr className="border-t border-gray-300 mb-4" />
                            <div className="border p-4 rounded">
                                <Link to="/form" className="text-black font-semibold hover:text-blue-600 cursor-pointer">
                                    PERSONAL LOANS
                                </Link>
                                <p>Seek a loan to better manage your finances or financial commitments.</p>
                                <h3 className="text-black mt-4 font-semibold hover:text-blue-600 cursor-pointer">CASH BACKED LOANS</h3>
                                <p>Designed to offer liquidity without compromising on the returns and without liquidating your hard-earned savings.</p>
                            </div>
                        </div>
                        <div>
                            <h2 className="text-2xl text-gray-600 mb-2">Mortgage Loans</h2>
                            <hr className="border-t border-gray-300 mb-4" />
                            <div className="border p-4 rounded">
                                <h3 className="text-black font-semibold hover:text-blue-600 cursor-pointer">MORTGAGE LOANS</h3>
                                <p>Turn your dream of owning your own home into reality.</p>
                            </div>
                        </div>
                    </div>
                    <div className="mt-4 text-center"> 
                        <Link to="/loans" className="text-blue-600 underline">View All Loans</Link>
                    </div>
                </div>
            )}

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden bg-white shadow-lg">
                    <div className="flex flex-col space-y-2 p-4">
                        <Link to="#" className="text-gray-700 hover:text-blue-600">Accounts & Expenses</Link>
                        <Link 
                            to="#" 
                            className="text-gray-700 hover:text-blue-600" 
                            onMouseEnter={handleMouseEnter} 
                            onMouseLeave={handleMouseLeave}
                        >
                            Loan
                        </Link>
                        <Link to="#" className="text-gray-700 hover:text-blue-600">Credit Cards</Link>
                        <Link to="#" className="text-gray-700 hover:text-blue-600">Insure</Link>
                        <Link to="#" className="text-gray-700 hover:text-blue-600">Bank with Us</Link>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Navbar;