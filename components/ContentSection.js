function ContentSection() {
    try {
        const [isVisible, setIsVisible] = React.useState(false);

        React.useEffect(() => {
            const observer = new IntersectionObserver(
                ([entry]) => setIsVisible(entry.isIntersecting),
                { threshold: 0.2 }
            );
            
            const element = document.getElementById('content-section');
            if (element) observer.observe(element);
            
            return () => observer.disconnect();
        }, []);

        return (
            <section 
                data-name="content-section" 
                data-file="components/ContentSection.js"
                id="content-section" 
                className="py-12 sm:py-16 md:py-20 relative px-4 sm:px-6"
            >
                <div className="max-w-6xl mx-auto">
                    <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                        <div className="glassmorphism p-6 sm:p-8 mb-8 sm:mb-12 glow-effect">
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-gradient text-center leading-tight">
                                Forget Sci-Fi: Real AI Automation Saving Businesses Right Now
                            </h2>
                            <p className="text-base sm:text-lg text-gray-300 text-center max-w-4xl mx-auto leading-relaxed">
                                This isn't about robots taking over. It's about smart software handling the repetitive, 
                                time-sucking tasks that drain your team's energy. Here's how real businesses are winning:
                            </p>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16">
                            <div className="glassmorphism p-4 sm:p-6 glow-effect">
                                <h3 className="text-lg sm:text-xl font-semibold text-cyan-400 mb-3 sm:mb-4">
                                    🛒 The Customer Whisperer (E-commerce)
                                </h3>
                                <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                                    AI watches customers browsing, triggers personalized emails for abandoned carts, 
                                    and alerts your sales team when they return. Result: Recovered sales, happier customers, 
                                    zero manual tracking.
                                </p>
                            </div>

                            <div className="glassmorphism p-4 sm:p-6 glow-effect">
                                <h3 className="text-lg sm:text-xl font-semibold text-cyan-400 mb-3 sm:mb-4">
                                    📅 The Scheduling Ninja (Service Businesses)
                                </h3>
                                <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                                    AI-powered booking bots live on your website. Customers book 24/7, sync with calendars, 
                                    send automatic reminders. Result: Full calendars, less admin headache, fewer no-shows.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    } catch (error) {
        console.error('ContentSection component error:', error);
        reportError(error);
    }
}
