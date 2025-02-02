import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import Nave from '../public/Nave';
import Sfooter from '../public/Sfooter';
import { toast } from 'react-toastify';

const Signup = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [userType, setUserType] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState('');
    
    const navigate = useNavigate();

    // Function to clear form fields
    const clearFormFields = () => {
        setName('');
        setEmail('');
        setUserType('');
        setPassword('');
        setShowPassword(false);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        // Basic email validation
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            setError('Invalid email format');
            return;
        }
    
        const userData = {
            name,
            email,
            userType,
            password,
        };
    
        try {
            const response = await fetch('http://localhost:5000/api/workouts', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userData),
            });
    
            if (!response.ok) {
                const errorData = await response.json();
                if (errorData.message === 'Email already exists') {
                    setError('Email is already in use. Please try another email.');
                } else {
                    throw new Error(errorData.message || 'Network response was not ok');
                }
                return;
            }

            // Show success toast
            toast.success("Account created successfully!", {
                position: "top-right",
                autoClose: 5000,
            });
        
            // Clear the form fields
            clearFormFields();

            // Redirect to Login page after a short delay (optional)
            setTimeout(() => {
                navigate('/login');
            }, 2000);
        } catch (error) {
            setError('Error: ' + error.message);
        }
    };

    return (
        <>
            <Nave />
            <div className="container mx-auto">
                <div className="wrapper max-w-md p-4 mx-auto bg-white shadow-lg rounded-lg">
                    <div className="title text-xl p-5 rounded-lg font-bold mb-4 bg-blue-500 text-white">
                        <span>Add User</span>
                    </div>

                    {error && <div className="text-red-500 mb-4">{error}</div>}

                    <form onSubmit={handleSubmit}>
                        <div className="mb-4 flex">
                            <i className="fas fa-user p-3 bg-green-800 rounded-l-lg"></i>
                            <input
                                type="text"
                                name="name"
                                placeholder="First Name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                                className="border border-gray-300 rounded-r-lg p-2 w-full"
                            />
                        </div>
                        <div className="mb-4 flex">
                            <i className="fas fa-envelope p-3 bg-green-800 rounded-l-lg"></i>
                            <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                className="border border-gray-300 rounded-r-lg p-2 w-full"
                            />
                        </div>
                        <div className="mb-4 flex">
                            <i className="fas fa-user p-3 bg-green-800 rounded-l-lg"></i>
                            <select
                                id="user_type"
                                name="user_type"
                                value={userType}
                                onChange={(e) => setUserType(e.target.value)}
                                required
                                className="border border-gray-300 rounded-r-lg p-2 w-full"
                            >
                                <option value="">User Type</option>
                                <option value="admin">Admin</option>
                                <option value="staff">Staff</option>
                                <option value="system admin">System Admin</option>
                            </select>
                        </div>
                        <div className="mb-4 relative flex">
                            <i className="fas fa-lock p-3 bg-green-800 rounded-l-lg"></i>
                            <input
                                type={showPassword ? 'text' : 'password'}
                                name="password"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                className="border border-gray-300 rounded-r-lg p-2 w-full"
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500"
                            >
                                {showPassword ? <i className="fas fa-eye"></i> : <i className="fas fa-eye-slash"></i>}
                            </button>
                        </div>
                        <div className="mb-4">
                            <input
                                type="submit"
                                name="submit"
                                value="SAVE"
                                className="bg-blue-500 text-white font-semibold py-2 rounded-lg w-full hover:bg-blue-600 transition"
                            />
                        </div>
                    </form>
                </div>
            </div>
            <Sfooter />
        </>
    );
};

export default Signup;
