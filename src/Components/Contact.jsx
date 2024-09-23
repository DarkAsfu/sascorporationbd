import { BiChat } from "react-icons/bi";
import { FaFacebookF, FaGithub, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import { IoLocationOutline } from "react-icons/io5";
import { LuPhoneCall } from "react-icons/lu";
import { Link } from "react-router-dom";
import Title from "./Title";
import { Button } from "../Ui/moving-border";


const Contact = () => {
    return (
        // <div className="py-16">
        //     <div className="w-10/12 mx-auto px-4">
        //         <Title title="Contact Us" />
        //         <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-8">
        //             <div>
        //                 <h3 className="text-xl font-semibold text-gray-700 mb-4">Get in Touch</h3>
        //                 <p className="text-gray-600 mb-6">We&apos;d love to hear from you! Please fill out the form below to get in touch with us.</p>
        //                 <form>
        //                     <div className="mb-4">
        //                         <Input fullWidth clearable bordered labelPlaceholder="Name" placeholder="Enter your name" />
        //                     </div>
        //                     <div className="mb-4">
        //                         <Input fullWidth clearable bordered labelPlaceholder="Email" placeholder="Enter your email" />
        //                     </div>
        //                     <div className="mb-4">
        //                         <Input fullWidth clearable bordered labelPlaceholder="Subject" placeholder="Enter the subject" />
        //                     </div>
        //                     <div className="mb-4">
        //                         <Textarea fullWidth clearable bordered labelPlaceholder="Message" placeholder="Enter your message" />
        //                     </div>
        //                     <Button auto flat color="primary" icon={<BiChat />} className="w-full" css={{ backgroundColor: '#0073e6' }}>Send Message</Button>
        //                 </form>
        //             </div>
        //             <div>
        //                 <h3 className="text-xl font-semibold text-gray-700 mb-4">Contact Information</h3>
        //                 <p className="text-gray-600 mb-6">Feel free to reach out to us through any of the following methods:</p>
        //                 <ul className="space-y-4">
        //                     <li className="flex items-center">
        //                         <IoLocationOutline className="text-gray-500 mr-2" />
        //                         <span className="text-gray-600">123 Corporate Blvd, Suite 100, City, State, 12345</span>
        //                     </li>
        //                     <li className="flex items-center">
        //                         <LuPhoneCall className="text-gray-500 mr-2" />
        //                         <span className="text-gray-600">(123) 456-7890</span>
        //                     </li>
        //                     <li className="flex items-center">
        //                         <FaFacebookF className="text-gray-500 mr-2" />
        //                         <Link to="#" className="text-gray-600 hover:text-gray-800">Facebook</Link>
        //                     </li>
        //                     <li className="flex items-center">
        //                         <FaLinkedinIn className="text-gray-500 mr-2" />
        //                         <Link to="#" className="text-gray-600 hover:text-gray-800">LinkedIn</Link>
        //                     </li>
        //                     <li className="flex items-center">
        //                         <FaXTwitter className="text-gray-500 mr-2" />
        //                         <Link to="#" className="text-gray-600 hover:text-gray-800">Twitter</Link>
        //                     </li>
        //                     <li className="flex items-center">
        //                         <FaGithub className="text-gray-500 mr-2" />
        //                         <Link to="#" className="text-gray-600 hover:text-gray-800">GitHub</Link>
        //                     </li>
        //                 </ul>
        //             </div>
        //         </div>
        //     </div>
        // </div>
        <>
            
            <div className="min-h-screen  justify-center bg-white mb-8">
                <Title title="Contact Us" />
                <div className="max-w-7xl mx-4 md:mx-auto md:border-2 border-gray-300 rounded-3xl overflow-hidden flex flex-col lg:flex-row mt-10">
                    {/* Left Section (Contact Information) */}
                    <div className="lg:w-1/2 p-8 flex flex-col justify-center relative">
                        <div className="flex items-center space-x-3 mb-4">
                        </div>
                        <p className="text-gray-600 mb-6">
                            We are always looking for ways to improve our products and services. Contact us and let us know how we can help you.
                        </p>
                        <ul className="space-y-4">
                            <li className="flex items-center">
                                <IoLocationOutline className="text-gray-500 mr-2" />
                                <span className="text-gray-600">123 Corporate Blvd, Suite 100, City, State, 12345</span>
                            </li>
                            <li className="flex items-center">
                                <LuPhoneCall className="text-gray-500 mr-2" />
                                <span className="text-gray-600">(123) 456-7890</span>
                            </li>
                            <li className="flex items-center">
                                <FaFacebookF className="text-gray-500 mr-2" />
                                <Link to="#" className="text-gray-600 hover:text-gray-800">Facebook</Link>
                            </li>
                            <li className="flex items-center">
                                <FaLinkedinIn className="text-gray-500 mr-2" />
                                <Link to="#" className="text-gray-600 hover:text-gray-800">LinkedIn</Link>
                            </li>
                            <li className="flex items-center">
                                <FaXTwitter className="text-gray-500 mr-2" />
                                <Link to="#" className="text-gray-600 hover:text-gray-800">Twitter</Link>
                            </li>
                        </ul>
                        {/* Map and Pin Section */}
                        <div className="mt-8 relative">
                            <img
                                src="https://pro.aceternity.com/world.svg"
                                alt="Map"
                                className="w-full"
                            />
                            {/* Pin Marker */}
                            <div className="pin absolute md:top-[15%] md:left-[66.1%] top-[0%] left-[61%]" >
                                <div className="bg-gray-200 rounded-full px-2 py-1 text-sm text-gray-700">
                                    We are here
                                </div>
                                <div className="pin-line h-6  md:w-[1.5px] w-[1px] bg-blue-400  mx-auto"></div>
                                <div className="bg-blue-500 md:h-2 md:w-2 h-1 w-1 rounded-full mx-auto animate-bounce"></div>
                            </div>
                        </div>
                    </div>

                    {/* Right Section (Contact Form with Background) */}
                    <div className="lg:w-1/2 p-8 bg-[#E7E9ED] relative rounded-3xl  md:m-20">
                        <div className="absolute inset-0 bg-gradient-to-r from-zinc-900/30 to-zinc-900/30 opacity-10 [mask-image:radial-gradient(farthest-side_at_top,white,transparent)] dark:from-zinc-900/30 dark:to-zinc-900/30">
                            <svg
                                aria-hidden="true"
                                className="absolute inset-0 h-full w-full fill-black/100 stroke-black/100 mix-blend-overlay dark:fill-white/100 dark:stroke-white/100"
                            >
                                <defs>
                                    <pattern
                                        id=":r14:"
                                        width="20"
                                        height="20"
                                        patternUnits="userSpaceOnUse"
                                        x="-12"
                                        y="4"
                                    >
                                        <path d="M.5 20V.5H20" fill="none"></path>
                                    </pattern>
                                </defs>
                                <rect width="100%" height="100%" strokeWidth="0" fill="url(#:r14:)"></rect>
                                <svg x="-12" y="4" className="overflow-visible">
                                    <rect strokeWidth="0" width="21" height="21" x="200" y="80"></rect>
                                    <rect strokeWidth="0" width="21" height="21" x="180" y="60"></rect>
                                    <rect strokeWidth="0" width="21" height="21" x="200" y="60"></rect>
                                    <rect strokeWidth="0" width="21" height="21" x="140" y="20"></rect>
                                    <rect strokeWidth="0" width="21" height="21" x="200" y="80"></rect>
                                </svg>
                            </svg>
                        </div>

                        <form className="relative space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-gray-700">
                                    Full name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    className="w-full mt-1 p-3 border border-gray-300 rounded-md"
                                    placeholder="Manu Arora"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-gray-700">
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    className="w-full mt-1 p-3 border border-gray-300 rounded-md"
                                    placeholder="support@aceternity.com"
                                />
                            </div>
                            <div>
                                <label htmlFor="company" className="block text-gray-700">
                                    Company
                                </label>
                                <input
                                    type="text"
                                    id="company"
                                    name="company"
                                    className="w-full mt-1 p-3 border border-gray-300 rounded-md"
                                    placeholder="Aceternity Labs LLC"
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-gray-700">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    className="w-full mt-1 p-3 border border-gray-300 rounded-md h-32"
                                    placeholder="Type your message here"
                                ></textarea>
                            </div>
                            <div>
                                <Button
                                    className="w-full py-3 px-6 bg-white border-none text-[#0073E6]  font-semibold text-[16px] hover:bg-[#0073E6] hover:text-white "
                                >
                                    Submit
                                </Button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Contact;