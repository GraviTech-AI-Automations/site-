function ContactSection() {
    try {
        return (
            <section 
                data-name="contact-section" 
                data-file="components/ContactSection.js"
                id="contact" 
                className="py-20 relative"
            >
                <div className="max-w-4xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
                            Ready to Stop Working in Your Business?
                        </h2>
                        <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                            AI automation isn't about replacing your team. It's about empowering them. 
                            Freeing them from the mundane to focus on creativity, strategy, and genuine human connection.
                        </p>
                        <p className="text-lg text-cyan-400 font-semibold">
                            Stop letting busywork bury your potential. Let's explore how custom AI automation 
                            can transform your unique challenges into your biggest competitive advantages.
                        </p>
                    </div>

                    <div className="glassmorphism p-8 glow-effect text-center">
                        <h3 className="text-2xl font-bold text-white mb-6">
                            What's one repetitive task draining your team's energy right now?
                        </h3>
                        <p className="text-gray-300 mb-8">
                            Let's brainstorm how to automate it into oblivion.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a href="mailto:hello@aiautomation.com" className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 glow-effect">
                                Start the Conversation
                            </a>
                            <a href="tel:+1234567890" className="glassmorphism text-white font-semibold py-4 px-8 rounded-lg hover:bg-white hover:bg-opacity-10 transition-all duration-300">
                                Schedule a Call
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        );
    } catch (error) {
        console.error('ContactSection component error:', error);
        reportError(error);
    }
}
