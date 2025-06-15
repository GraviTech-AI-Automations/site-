function App() {
    try {
        React.useEffect(() => {
            lucide.createIcons();
            
            // Smooth scrolling for anchor links
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function (e) {
                    e.preventDefault();
                    const target = document.querySelector(this.getAttribute('href'));
                    if (target) {
                        target.scrollIntoView({ behavior: 'smooth' });
                    }
                });
            });
        }, []);

        return (
            <div data-name="app" data-file="app.js" className="min-h-screen">
                <Header />
                <main>
                    <HeroSection />
                    <ContentSection />
                    <AIAgentIllustration />
                    <SolutionsSection />
                    <ContactSection />
                </main>
                <Footer />
            </div>
        );
    } catch (error) {
        console.error('App component error:', error);
        reportError(error);
    }
}

ReactDOM.render(React.createElement(App), document.getElementById('root'));
