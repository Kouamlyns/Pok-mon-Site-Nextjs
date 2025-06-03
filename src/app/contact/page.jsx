'use client'
import { ToastContainer, toast } from 'react-toastify';

export default function Page(){

    const notify = (e) => toast.success('Wow so easy !');

    return(
        <>
            <div className=" h-screen flex items-center justify-center flex-col bg-amber-400 shadow-md rounded-lg ">
                <ToastContainer
position="top-center"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick={false}
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="dark"
// transition={Bounce}
/>
                <form action="" className="w-2xl mt-6 space-y-4 bg-amber-50 p-5 rounded-lg "  >
                    {/* <div className="md:w-1/2 h-64 md:h-auto">
                    {/* insert left side image 
                    </div> */}
                    < h1 className="text-2xl text-center justify-center font-bold">Welcome to contact page</h1>
                    <div className="w-full flex flex-col my-4">
                        <label className="font-bold text-" htmlFor="name" > Name</label>
                        <input
                            width={25}
                            type="text" 
                            minLength={5}
                            maxLength={100}
                            //required
                            placeholder="Enter your name"
                            className="p-4 bg-gray-50 border-gray-100 rounded-lg"
                            autoComplete="off" 
                            name="name"
                            id="name" 
                        />
                    </div>
                    <div className="w-full flex flex-col my-4">
                        <label className="font-bold" htmlFor="email"> Email</label>
                        <input
                            width={50}
                            type="email" 
                            minLength={5}
                            maxLength={100}
                           // required
                            placeholder="Enter your email"
                            className="p-4 bg-gray-50 border-gray-100 rounded-lg"
                            autoComplete="off" 
                            id="email" 
                            name="email"
                        />
                    </div>
                    <div className="w-full flex flex-col my-4">
                        <label className="font-bold" htmlFor="email"> Subject</label>
                        <input
                            width={50}
                            type="text" 
                            minLength={5}
                            maxLength={100}
                           // required
                            placeholder="Enter the subject"
                            className="p-4 bg-gray-50 border-gray-100 rounded-lg"
                            autoComplete="off" 
                            id="subject" 
                            name="subject"
                        />
                    </div>
                    <div className="w-full flex flex-col my-4">
                        <label className="font-bold" htmlFor="message">Message</label>
                        <textarea
                            name="motive"
                            width={50}
                            // value={}
                            // onChange={}
                            //required
                            className="p-4 bg-gray-50 border-gray-100 rounded-2xl"
                            autoComplete="off" 
                            placeholder="Enter your message"
                        />
                    </div>
                    <button
                        type="button"
                        className="w-full bg-yellow-400 text-white py-2 rounded-lg hover:bg-yellow-500 transition-colors"
                        onClick={()=> notify()}
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </>
    )
}