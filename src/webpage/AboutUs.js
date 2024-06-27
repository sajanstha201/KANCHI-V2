import robot from '../static/images/cute-robot-working-laptop-cartoon-vector-icon-illustration-science-technology-isolated-flat.png'
export const AboutUs=()=>{
    return(
        <>
        <header class="hero-bg text-white py-10 bg-blue-600">
        <div class="container mx-auto text-center">
            <h1 class="text-5xl font-bold">NepaliGPT</h1>
            <p class="mt-4 text-xl">Innovating with Language, Empowering with AI</p>
        </div>
    </header>

    <main class="container mx-auto p-6">
        <section class="bg-white p-8 rounded shadow-md mt-8">
            <h2 class="text-3xl font-semibold mb-6 text-center text-blue-600">About Us</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                    <p class="mb-4 text-gray-700">
                        Welcome to NepaliGPT, an advanced AI language model specifically tailored for the Nepali language, developed by the Robotics Academy of Nepal (RAN). Our mission is to bridge the language gap in technology and provide powerful AI tools that cater to the unique needs of Nepali speakers.
                    </p>
                    <p class="mb-4 text-gray-700">
                        At RAN, we are dedicated to fostering innovation and excellence in the field of robotics and artificial intelligence. NepaliGPT is one of our flagship projects, showcasing our commitment to bringing cutting-edge technology to the Nepali community.
                    </p>
                </div>
                <div>
                    <img src={robot} alt="NepaliGPT" class=" animate-bounce h-96 " />
                </div>
            </div>
        </section>

        <section class="mt-12">
            <h3 class="text-2xl font-semibold mb-6 text-center text-blue-600">Our Vision</h3>
            <p class="bg-white p-8 rounded shadow-md text-center text-gray-700">
                Our vision is to empower Nepali-speaking individuals with AI tools that understand and communicate in their native language. By leveraging the capabilities of NepaliGPT, we aim to enhance education, business, and everyday interactions for Nepali speakers globally.
            </p>
        </section>

        <section class="mt-12">
            <h3 class="text-2xl font-semibold mb-6 text-center text-blue-600">Contact Us</h3>
            <div class="bg-white p-8 rounded shadow-md text-center">
                <p class="mb-4 text-gray-700">We would love to hear from you! For any inquiries or feedback, please reach out to us at:</p>
                <p class="text-gray-700">Email: <a href="mailto:info@ranepal.org" class="text-blue-600 hover:underline">info@ranepal.org</a></p>
                <p class="text-gray-700">Phone: <a href="tel:+977123456789" class="text-blue-600 hover:underline">+977 123-456-789</a></p>
                <p class="text-gray-700">Address: Robotics Academy of Nepal, Kathmandu, Nepal</p>
            </div>
        </section>
    </main>

        </>
    )
}