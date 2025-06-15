function AIAgentIllustration() {
    try {
        const [isVisible, setIsVisible] = React.useState(false);

        React.useEffect(() => {
            const observer = new IntersectionObserver(
                ([entry]) => setIsVisible(entry.isIntersecting),
                { threshold: 0.3 }
            );
            
            const element = document.getElementById('ai-agents');
            if (element) observer.observe(element);
            
            return () => observer.disconnect();
        }, []);

        const agents = [
            { name: 'Data Processor', icon: 'database', delay: '0s' },
            { name: 'Customer Service', icon: 'message-circle', delay: '0.2s' },
            { name: 'Analytics Engine', icon: 'bar-chart-3', delay: '0.4s' },
            { name: 'Security Monitor', icon: 'shield', delay: '0.6s' }
        ];

        return (
            <section 
                data-name="ai-agents" 
                data-file="components/AIAgentIllustration.js"
                id="ai-agents" 
                className="py-12 sm:py-16 md:py-20 relative px-4 sm:px-6"
            >
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-12 sm:mb-16 text-gradient leading-tight">
                        AI Agents at Work
                    </h2>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
                        {agents.map((agent, index) => (
                            <div 
                                key={index}
                                className={`glassmorphism p-6 sm:p-8 text-center glow-effect transition-all duration-500 ${
                                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                                }`}
                                style={{ 
                                    animationDelay: agent.delay,
                                    transitionDelay: agent.delay 
                                }}
                            >
                                <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center">
                                    <i data-lucide={agent.icon} className="w-6 h-6 sm:w-8 sm:h-8 text-white"></i>
                                </div>
                                <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">
                                    {agent.name}
                                </h3>
                                <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                                    Advanced AI automation for seamless operations
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        );
    } catch (error) {
        console.error('AIAgentIllustration component error:', error);
        reportError(error);
    }
}
