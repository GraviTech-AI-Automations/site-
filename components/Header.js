function Header() {
    try {
        const [isScrolled, setIsScrolled] = React.useState(false);
        const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

        React.useEffect(() => {
            const handleScroll = () => {
                setIsScrolled(window.scrollY > 50);
            };
            window.addEventListener('scroll', handleScroll);
            return () => window.removeEventListener('scroll', handleScroll);
        }, []);

        return (
            <header 
                data-name="header" 
                data-file="components/Header.js"
                className={`fixed top-0 w-full z-50 transition-all duration-300 ${
                    isScrolled ? 'glassmorphism' : 'bg-transparent'
                }`}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4">
                    <nav className="flex justify-between items-center">
                        <div className="flex items-center space-x-3">
                            <img 
                                src="https://i.postimg.cc/RZXdtpYM/Final-Pic-2.png" 
                                alt="GraviTech AI Logo" 
                                className="w-8 h-8 sm:w-10 sm:h-10"
                            />
                            <span className="text-lg sm:text-2xl font-bold text-gradient">
                                GraviTech AI
                            </span>
                        </div>
                        
                        <div className="hidden md:flex space-x-6 lg:space-x-8">
                            <a href="#home" className="text-white hover:text-cyan-400 transition-colors text-sm lg:text-base">
                                Home
                            </a>
                            <a href="#solutions" className="text-white hover:text-cyan-400 transition-colors text-sm lg:text-base">
                                Solutions
                            </a>
                            <a href="#contact" className="text-white hover:text-cyan-400 transition-colors text-sm lg:text-base">
                                Contact
                            </a>
                        </div>
                        
                        <button 
                            className="md:hidden text-white p-2"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        >
                            <i data-lucide="menu" className="w-5 h-5"></i>
                        </button>
                    </nav>
                    
                    {isMobileMenuOpen && (
                        <div className="md:hidden mt-4 pb-4">
                            <div className="flex flex-col space-y-3">
                                <a href="#home" className="text-white hover:text-cyan-400 transition-colors py-2">
                                    Home
                                </a>
                                <a href="#solutions" className="text-white hover:text-cyan-400 transition-colors py-2">
                                    Solutions
                                </a>
                                <a href="#contact" className="text-white hover:text-cyan-400 transition-colors py-2">
                                    Contact
                                </a>
                            </div>
                        </div>
                    )}
                </div>
            </header>
        );
    } catch (error) {
        console.error('Header component error:', error);
        reportError(error);
    }
}
