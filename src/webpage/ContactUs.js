export const ContactUs=()=>{
    return(
        <>
     <div className="bg-gray-100 font-sans leading-normal tracking-normal">
            <header className="bg-blue-600 text-white py-8">
                <div className="container mx-auto text-center">
                    <h1 className="text-5xl font-bold">Contact Us</h1>
                    <p className="mt-2 text-2xl">We'd love to hear from you</p>
                </div>
            </header>

            <main className="container mx-auto p-8 mt-8">
                <section className="bg-white p-10 rounded shadow-md">
                    <h2 className="text-3xl font-semibold mb-8 text-center text-blue-600">Get in Touch</h2>
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
                            <label htmlFor="message" className="block text-lg font-medium text-gray-700">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                rows="6"
                                className="w-full mt-3 p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
                                placeholder="Enter your message"
                            ></textarea>
                        </div>
                        <div className="flex justify-end">
                            <button
                                type="submit"
                                className="bg-blue-600 text-white py-3 px-6 rounded hover:bg-blue-700 text-lg font-semibold"
                            >
                                Send Message
                            </button>
                        </div>
                    </form>
                </section>
            </main>
            <section class="mt-12">
            <h3 class="text-2xl font-semibold mb-6 text-center text-blue-600">Contact Us</h3>
            <div class="bg-white p-8 rounded shadow-md text-center">
                <p class="mb-4 text-gray-700">We would love to hear from you! For any inquiries or feedback, please reach out to us at:</p>
                <p class="text-gray-700">Email: <a href="mailto:info@ranepal.org" class="text-blue-600 hover:underline">info@ranepal.org</a></p>
                <p class="text-gray-700">Phone: <a href="tel:+977123456789" class="text-blue-600 hover:underline">+977 123-456-789</a></p>
                <p class="text-gray-700">Address: Robotics Academy of Nepal, Kathmandu, Nepal</p>
            </div>
        </section>

            <footer className="bg-gray-800 text-white py-6 mt-12">
                <div className="container mx-auto text-center">
                    <p>&copy; 2024 Robotics Academy of Nepal. All rights reserved.</p>
                </div>
            </footer>
        </div>
        </>
    )
}