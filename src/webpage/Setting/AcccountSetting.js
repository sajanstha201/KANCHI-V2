export const AccountSetting=()=>{
    return(
        <div>
          <section className="bg-white p-10 rounded shadow-md mt-12">
                    <h2 className="text-3xl font-semibold mb-8 text-center text-blue-600">Account Settings</h2>
                    <form className="space-y-8">
                        <div>
                            <label htmlFor="password" className="block text-lg font-medium text-gray-700">Current Password</label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                className="w-full mt-3 p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
                                placeholder="Enter your current password"
                            />
                        </div>
                        <div>
                            <label htmlFor="new-password" className="block text-lg font-medium text-gray-700">New Password</label>
                            <input
                                type="password"
                                id="new-password"
                                name="new-password"
                                className="w-full mt-3 p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
                                placeholder="Enter a new password"
                            />
                        </div>
                        <div>
                            <label htmlFor="confirm-password" className="block text-lg font-medium text-gray-700">Confirm New Password</label>
                            <input
                                type="password"
                                id="confirm-password"
                                name="confirm-password"
                                className="w-full mt-3 p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
                                placeholder="Confirm your new password"
                            />
                        </div>
                        <div className="flex lg:justify-end justify-center">
                            <button
                                type="submit"
                                className="bg-blue-600 text-white py-3 px-6 rounded hover:bg-blue-700 text-lg font-semibold"
                            >
                                Update Password
                            </button>
                        </div>
                    </form>
                </section>
        </div>
    )
}