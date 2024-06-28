export const UserPreferences=()=>{
    return(
        <div>
            <section className="bg-white p-10 rounded shadow-md">
                    <h2 className="text-3xl font-semibold mb-8 text-center text-blue-600">User Preferences</h2>
                    <form className="space-y-8">
                        <div className="flex flex-col md:flex-row md:space-x-6">
                            <div className="flex-1">
                                <label htmlFor="username" className="block text-lg font-medium text-gray-700">Username</label>
                                <input
                                    type="text"
                                    id="username"
                                    name="username"
                                    className="w-full mt-3 p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
                                    placeholder="Enter your username"
                                />
                            </div>
                            <div className="flex-1">
                                <label htmlFor="email" className="block text-lg font-medium text-gray-700">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    className="w-full mt-3 p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
                                    placeholder="Enter your email"
                                />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="language" className="block text-lg font-medium text-gray-700">Language</label>
                            <select
                                id="language"
                                name="language"
                                className="w-full mt-3 p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
                            >
                                <option value="english">English</option>
                                <option value="nepali">Nepali</option>
                                <option value="hindi">Hindi</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="theme" className="block text-lg font-medium text-gray-700">Theme</label>
                            <select
                                id="theme"
                                name="theme"
                                className="w-full mt-3 p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
                            >
                                <option value="light">Light</option>
                                <option value="dark">Dark</option>
                            </select>
                        </div>
                        <div className="flex lg:justify-end justify-center">
                            <button
                                type="submit"
                                className="bg-blue-600 text-white py-3 px-6 rounded hover:bg-blue-700 text-lg font-semibold"
                            >
                                Save Changes
                            </button>
                        </div>
                    </form>
                </section>

        </div>
    )
}