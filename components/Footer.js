function Footer() {
    try {
        React.useEffect(() => {
            lucide.createIcons();
        }, []);

        return (
            <footer 
                data-name="footer" 
                data-file="components/Footer.js"
                className="py-8 sm:py-12 border-t border-white border-opacity-10 px-4 sm:px-6"
            >
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                        <div className="sm:col-span-2 lg:col-span-1">
                            <div className="flex items-center space-x-3 mb-4">
                                <img 
                                    src="https://i.postimg.cc/RZXdtpYM/Final-Pic-2.png" 
                                    alt="GraviTech AI Logo" 
                                    className="w-8 h-8"
                                />
                                <h3 className="text-xl sm:text-2xl font-bold text-gradient">
                                    GraviTech AI
                                </h3>
                            </div>
                            <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                                Transforming businesses through intelligent automation 
                                and cutting-edge AI solutions.
                            </p>
                        </div>
                        
                        <div>
                            <h4 className="text-base sm:text-lg font-semibold text-white mb-3 sm:mb-4">
                                Quick Links
                            </h4>
                            <ul className="space-y-2">
                                <li>
                                    <a href="#home" className="text-sm sm:text-base text-gray-300 hover:text-cyan-400 transition-colors">
                                        Home
                                    </a>
                                </li>
                                <li>
                                    <a href="#solutions" className="text-sm sm:text-base text-gray-300 hover:text-cyan-400 transition-colors">
                                        Solutions
                                    </a>
                                </li>
                                <li>
                                    <a href="#contact" className="text-sm sm:text-base text-gray-300 hover:text-cyan-400 transition-colors">
                                        Contact
                                    </a>
                                </li>
                            </ul>
                        </div>
                        
                        <div>
                            <h4 className="text-base sm:text-lg font-semibold text-white mb-3 sm:mb-4">
                                Connect With Us
                            </h4>
                            <div className="flex space-x-4">
                                <a href="#" className="text-gray-300 hover:text-cyan-400 transition-colors">
                                    <i data-lucide="linkedin" className="w-5 h-5 sm:w-6 sm:h-6"></i>
                                </a>
                                <a href="#" className="text-gray-300 hover:text-cyan-400 transition-colors">
                                    <i data-lucide="twitter" className="w-5 h-5 sm:w-6 sm:h-6"></i>
                                </a>
                                <a href="#" className="text-gray-300 hover:text-cyan-400 transition-colors">
                                    <i data-lucide="mail" className="w-5 h-5 sm:w-6 sm:h-6"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    
                    <div className="border-t border-white border-opacity-10 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center">
                        <p className="text-sm sm:text-base text-gray-400">
                            © 2024 GraviTech AI. All rights reserved.
                        </p>
                    </div>
                </div>
            </footer>
        );
    } catch (error) {
        console.error('Footer component error:', error);
        reportError(error);
    }
}
