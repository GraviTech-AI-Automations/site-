function HeroSection() {
    try {
        const [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 });

        React.useEffect(() => {
            const handleMouseMove = (e) => {
                setMousePosition({
                    x: (e.clientX / window.innerWidth) * 100,
                    y: (e.clientY / window.innerHeight) * 100
                });
            };
            window.addEventListener('mousemove', handleMouseMove);
            return () => window.removeEventListener('mousemove', handleMouseMove);
        }, []);

        return (
            <section 
                data-name="hero-section" 
                data-file="components/HeroSection.js"
                id="home" 
                className="min-h-screen flex items-center justify-center relative overflow-hidden px-4 sm:px-6"
            >
                <div 
                    className="parallax-bg"
                    style={{
                        transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`
                    }}
                ></div>
                
                <div className="max-w-7xl mx-auto text-center z-10 w-full">
                    <div className="glassmorphism p-6 sm:p-8 md:p-12 glow-effect">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-gradient leading-tight">
                            Stop Drowning in Tasks
                        </h1>
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-light mb-6 sm:mb-8 text-white leading-relaxed">
                            Let AI Automation Be Your Business Life Raft
                        </h2>
                        <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-8 sm:mb-12 max-w-4xl mx-auto leading-relaxed">
                            You didn't start your business to get buried under emails, chase invoices, or manually update 
                            spreadsheets until midnight. You started it to make an impact, serve your customers, and actually grow.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
                            <a href="https://form.typeform.com/to/Ey1tmru3" className="w-full sm:w-auto bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold py-3 sm:py-4 px-6 sm:px-8 rounded-lg transition-all duration-300 transform hover:scale-105 glow-effect text-center">
                                Discover AI Solutions
                            </a>
                            <a href="#contact" className="w-full sm:w-auto glassmorphism text-white font-semibold py-3 sm:py-4 px-6 sm:px-8 rounded-lg hover:bg-white hover:bg-opacity-10 transition-all duration-300 text-center">
                                Start Your Transformation
                            </a>
                        </div>
                    </div>
                </div>

                <div className="absolute bottom-6 sm:bottom-10 left-1/2 transform -translate-x-1/2 text-white pulse-animation">
                    <i data-lucide="chevron-down" className="w-6 h-6 sm:w-8 sm:h-8"></i>
                </div>
            </section>
        );
    } catch (error) {
        console.error('HeroSection component error:', error);
        reportError(error);
    }
}
