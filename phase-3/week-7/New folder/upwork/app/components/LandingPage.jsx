// components/LandingPage.js
import Link from "next/link";

const LandingPage = () => {
    return (
        <div className="min-h-screen flex flex-col">
            {/* Navbar */}
            <nav className="bg-white shadow-lg">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="flex justify-between items-center py-4">
                        <div className="text-2xl font-bold text-gray-800">
                            <Link href="/">My Clothing Brand</Link>
                        </div>
                        <div className="flex space-x-4">
                            <Link href="/shop" className="text-gray-800 hover:text-gray-600">
                                Shop
                            </Link>
                            <Link href="/about" className="text-gray-800 hover:text-gray-600">
                                About
                            </Link>
                            <Link href="/contact" className="text-gray-800 hover:text-gray-600">
                                Contact
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="bg-gray-100 py-20">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-5xl font-bold text-gray-800 mb-6">
                        Elevate Your Style
                    </h1>
                    <p className="text-xl text-gray-600 mb-8">
                        Discover premium clothing designed for the modern individual.
                    </p>
                    <Link
                        href="/shop"
                        className="bg-black text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-800 transition duration-300"
                    >
                        Shop Now
                    </Link>
                </div>
            </section>

            {/* Product Highlights */}
            <section className="py-16">
                <div className="max-w-6xl mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
                        Featured Collections
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                            <img
                                src="/images/men-collection.jpg"
                                alt="Men's Collection"
                                className="w-full h-64 object-cover"
                            />
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-800 mb-2">
                                    Men's Collection
                                </h3>
                                <p className="text-gray-600">
                                    Sleek and sophisticated styles for men.
                                </p>
                            </div>
                        </div>
                        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                            <img
                                src="/images/women-collection.jpg"
                                alt="Women's Collection"
                                className="w-full h-64 object-cover"
                            />
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-800 mb-2">
                                    Women's Collection
                                </h3>
                                <p className="text-gray-600">
                                    Elegant and trendy designs for women.
                                </p>
                            </div>
                        </div>
                        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                            <img
                                src="/images/accessories.jpg"
                                alt="Accessories"
                                className="w-full h-64 object-cover"
                            />
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-800 mb-2">
                                    Accessories
                                </h3>
                                <p className="text-gray-600">
                                    Complete your look with our accessories.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Newsletter Signup */}
            <section className="bg-gray-800 py-16">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl font-bold text-white mb-6">
                        Join Our Newsletter
                    </h2>
                    <p className="text-gray-300 mb-8">
                        Get exclusive updates, discounts, and style tips delivered to your inbox.
                    </p>
                    <form className="flex justify-center">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="px-4 py-3 rounded-l-lg w-64 focus:outline-none"
                        />
                        <button
                            type="submit"
                            className="bg-black text-white px-6 py-3 rounded-r-lg hover:bg-gray-900 transition duration-300"
                        >
                            Subscribe
                        </button>
                    </form>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-white shadow-lg mt-auto">
                <div className="max-w-6xl mx-auto px-4 py-8">
                    <div className="flex justify-between items-center">
                        <div className="text-gray-800">
                            &copy; {new Date().getFullYear()} My Clothing Brand. All rights reserved.
                        </div>
                        <div className="flex space-x-4">
                            <Link href="/privacy" className="text-gray-800 hover:text-gray-600">
                                Privacy Policy
                            </Link>
                            <Link href="/terms" className="text-gray-800 hover:text-gray-600">
                                Terms of Service
                            </Link>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default LandingPage;