import React from "react";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbSeparator,
} from "../components/ui/breadcrumb";
import { SlashIcon } from "lucide-react";
import Button2 from "../components/Button2";
import { Link } from "react-router";

import { useSelector, useDispatch } from 'react-redux';
import { setUser } from '../features/user/userSlice';
import type { RootState } from '../store/store';
import { useState, useEffect } from "react";
import { updateUserProfile, updateUserPassword } from "../firebase/auth";
import { auth } from "../firebase/firebase.config";

const Account: React.FC = () => {
    const { user } = useSelector((state: RootState) => state.user);
    const dispatch = useDispatch();

    // Profile State
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");

    // Password State
    const [currentPassword, setCurrentPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    useEffect(() => {
        if (user?.displayName) {
            const parts = user.displayName.split(' ');
            setFirstName(parts[0] || "");
            setLastName(parts.slice(1).join(' ') || "");
        }
    }, [user]);

    const handleProfileUpdate = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            if (auth.currentUser) {
                const fullName = `${firstName} ${lastName}`.trim();
                await updateUserProfile(auth.currentUser, { displayName: fullName });

                // Update Redux state
                dispatch(setUser({
                    uid: auth.currentUser.uid,
                    email: auth.currentUser.email,
                    displayName: fullName,
                    photoURL: auth.currentUser.photoURL
                }));
                alert("Profile updated successfully!");
            }
        } catch (error) {
            console.error("Failed to update profile", error);
            alert("Failed to update profile.");
        }
    };

    const handlePasswordUpdate = async () => {
        // e.preventDefault(); // This is part of the same form, so handled together or separate?
        // Let's assume one "Save Changes" button for now or split handling.
        // The UI has one form.

        if (!newPassword) return; // No password change requested

        if (newPassword !== confirmPassword) {
            alert("New passwords do not match!");
            return;
        }

        try {
            if (auth.currentUser) {
                await updateUserPassword(auth.currentUser, newPassword);
                alert("Password updated successfully!");
                setNewPassword("");
                setConfirmPassword("");
                setCurrentPassword("");
            }
        } catch (error) {
            console.error("Failed to update password", error);
            alert("Failed to update password. You may need to re-login.");
        }
    }

    const handleSaveChanges = async (e: React.FormEvent) => {
        e.preventDefault();
        await handleProfileUpdate(e);
        if (newPassword) {
            await handlePasswordUpdate();
        }
    };


    return (
        <section className="py-16">
            <div className="container mx-auto px-4">
                {/* Breadcrumb + Welcome */}
                <div className="flex items-center justify-between text-sm mb-10">
                    <Breadcrumb>
                        <BreadcrumbList>
                            <BreadcrumbItem className="text-[14px]">
                                <BreadcrumbLink>
                                    <Link to={"/"}>Home</Link>
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator>
                                <SlashIcon className="w-3 h-3" />
                            </BreadcrumbSeparator>
                            <BreadcrumbItem>
                                <BreadcrumbLink >
                                    <Link to={"/account"}>My Account</Link>
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>

                    <span className="text-gray-700">
                        Welcome! <span className="text-red-500 font-medium">{user?.displayName || "Guest"}</span>
                    </span>
                </div>

                {/* Account Container */}
                <div className="grid grid-cols-12 gap-8 font-poppins">
                    {/* Sidebar */}
                    <aside className="col-span-3 space-y-6">
                        <div>
                            <h3 className="font-medium mb-4">Manage My Account</h3>
                            <ul className="space-y-2 pl-8.5">
                                <li className="hover:text-button2  text-gray-500 font-poppins cursor-pointer">
                                    My Profile
                                </li>
                                <li className="text-gray-500 hover:text-button2 cursor-pointer">
                                    Address Book
                                </li>
                                <li className="text-gray-500 hover:text-button2 cursor-pointer">
                                    My Payment Options
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="font-medium mb-3">My Orders</h3>
                            <ul className="space-y-2 pl-8.5 ">
                                <li className="text-gray-500 hover:text-button2 cursor-pointer">
                                    My Returns
                                </li>
                                <li className="text-gray-500 hover:text-button2 cursor-pointer">
                                    My Cancellations
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="font-semibold mb-3">My Wishlist</h3>
                        </div>
                    </aside>

                    {/* Profile Edit Form */}
                    <div className="col-span-9 font-poppins bg-white shadow-contact rounded-sm py-10 px-20">
                        <h2 className="text-xl font-medium text-button2 mb-6">
                            Edit Your Profile
                        </h2>

                        <form className="grid grid-cols-2 gap-6" onSubmit={handleSaveChanges}>
                            {/* First Name */}
                            <div>
                                <label className="block text-sm  mb-2">
                                    First Name <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="First name"
                                    className="w-full bg-gray-100 h-[50px]  px-4 text-gray-600 outline-none"
                                    value={firstName}
                                    onChange={(e) => setFirstName(e.target.value)}
                                />
                            </div>

                            {/* Last Name */}
                            <div>
                                <label className="block text-sm  mb-2">
                                    Last Name <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Last name"
                                    className="w-full bg-gray-100 h-[50px]  px-4 text-gray-600 outline-none"
                                    value={lastName}
                                    onChange={(e) => setLastName(e.target.value)}
                                />
                            </div>

                            {/* Email */}
                            <div>
                                <label className="block text-sm  mb-2">
                                    Email <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="email"
                                    placeholder="Your email"
                                    className="w-full bg-gray-100 h-[50px]  px-4 text-gray-600 outline-none"
                                    defaultValue={user?.email || ''}
                                    readOnly
                                />
                            </div>

                            {/* Address */}
                            <div>
                                <label className="block text-sm  mb-2">
                                    Address <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    className="w-full bg-gray-100 h-[50px]  px-4 text-gray-600 outline-none"
                                    placeholder="Your Address"
                                />
                            </div>

                            {/* Password Section */}
                            <div className="col-span-2 mt-4">
                                <h3 className=" text-gray-800 mb-3">
                                    Password Changes
                                </h3>

                                <div className="space-y-4">
                                    <input
                                        type="password"
                                        placeholder="Current Password"
                                        className="w-full bg-gray-100 h-[50px]  px-4 text-gray-600 outline-none"
                                        value={currentPassword}
                                        onChange={(e) => setCurrentPassword(e.target.value)}
                                    />
                                    <input
                                        type="password"
                                        placeholder="New Password"
                                        className="w-full bg-gray-100 h-[50px]  px-4 text-gray-600 outline-none"
                                        value={newPassword}
                                        onChange={(e) => setNewPassword(e.target.value)}
                                    />
                                    <input
                                        type="password"
                                        placeholder="Confirm New Password"
                                        className="w-full bg-gray-100 h-[50px] px-4 text-gray-600 outline-none"
                                        value={confirmPassword}
                                        onChange={(e) => setConfirmPassword(e.target.value)}
                                    />
                                </div>
                            </div>

                            {/* Buttons */}
                            <div className="col-span-2 flex justify-end gap-8 mt-6">
                                <button
                                    type="button"
                                    className="text-gray-600 hover:text-black font-medium"
                                    onClick={() => {
                                        // Reset form
                                        if (user?.displayName) {
                                            const parts = user.displayName.split(' ');
                                            setFirstName(parts[0] || "");
                                            setLastName(parts.slice(1).join(' ') || "");
                                        }
                                        setNewPassword("");
                                        setConfirmPassword("");
                                        setCurrentPassword("");
                                    }}
                                >
                                    Cancel
                                </button>
                                <Button2 type="submit" className="">Save Change</Button2>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Account;
