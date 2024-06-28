export const Help=()=>{
    return(
        <>
          <div className="bg-gray-100 font-sans leading-normal tracking-normal">
            <header className="bg-blue-600 text-white py-8">
                <div className="container mx-auto text-center">
                    <h1 className="text-5xl font-bold">Help Center</h1>
                    <p className="mt-2 text-2xl">How can we assist you?</p>
                </div>
            </header>

            <main className="container mx-auto p-8 mt-8">
                <section className="bg-white p-10 rounded shadow-md mb-12">
                    <h2 className="text-3xl font-semibold mb-8 text-center text-blue-600">Frequently Asked Questions</h2>
                    <div className="space-y-6">
                        <div>
                            <h3 className="text-xl font-medium text-gray-700">How do I reset my password?</h3>
                            <p className="mt-2 text-gray-600">
                                To reset your password, go to the account settings page and click on "Change Password." 
                                Follow the instructions to reset your password.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-xl font-medium text-gray-700">How do I contact customer support?</h3>
                            <p className="mt-2 text-gray-600">
                                You can contact our customer support team by filling out the contact form on our 
                                "Contact Us" page or by sending an email to support@nepaligpt.com.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-xl font-medium text-gray-700">Where can I find the user manual?</h3>
                            <p className="mt-2 text-gray-600">
                                The user manual can be found in the "Resources" section of our website. 
                                It provides detailed instructions on how to use NepaliGPT.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-xl font-medium text-gray-700">How do I update my profile information?</h3>
                            <p className="mt-2 text-gray-600">
                                To update your profile information, go to your account settings and make the necessary changes. 
                                Don't forget to save the changes before exiting.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-xl font-medium text-gray-700">What should I do if I encounter a bug?</h3>
                            <p className="mt-2 text-gray-600">
                                If you encounter a bug, please report it to our support team via the contact form. 
                                Provide as much detail as possible to help us resolve the issue quickly.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-xl font-medium text-gray-700">Can I change the language of the interface?</h3>
                            <p className="mt-2 text-gray-600">
                                Yes, you can change the language of the interface from the settings page. 
                                Choose your preferred language from the dropdown menu and save the changes.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-xl font-medium text-gray-700">How do I delete my account?</h3>
                            <p className="mt-2 text-gray-600">
                                To delete your account, please contact our support team. 
                                They will guide you through the process and ensure that your data is securely removed.
                            </p>
                        </div>
                    </div>
                </section>

                <section className="bg-white p-10 rounded shadow-md">
                    <h2 className="text-3xl font-semibold mb-8 text-center text-blue-600">Need More Help?</h2>
                    <form className="space-y-8">
                        <div>
                            <label htmlFor="name" className="block text-lg font-medium text-gray-700">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                className="w-full mt-3 p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
                                placeholder="Enter your name"
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-lg font-medium text-gray-700">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="w-full mt-3 p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
                                placeholder="Enter your email"
                            />
                        </div>
                        <div>
                            <label htmlFor="issue" className="block text-lg font-medium text-gray-700">Describe Your Issue</label>
                            <textarea
                                id="issue"
                                name="issue"
                                rows="6"
                                className="w-full mt-3 p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
                                placeholder="Describe the issue you are facing"
                            ></textarea>
                        </div>
                        <div className="flex justify-end">
                            <button
                                type="submit"
                                className="bg-blue-600 text-white py-3 px-6 rounded hover:bg-blue-700 text-lg font-semibold"
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                </section>
            </main>

            <footer className="bg-gray-800 text-white py-6 mt-12">
                <div className="container mx-auto text-center">
                    <p>&copy; 2024 Robotics Academy of Nepal. All rights reserved.</p>
                </div>
            </footer>
        </div>
        </>
    )
}