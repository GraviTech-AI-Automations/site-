function SolutionsSection() {
    try {
        const solutions = [
            {
                title: "🔍 The HR Super-Screener",
                description: "AI scans resumes instantly, matches skills to job descriptions, ranks candidates, and schedules interviews automatically. Hire the best people faster."
            },
            {
                title: "📊 The Data Detective",
                description: "AI analyzes traffic, leads, and sales funnels, giving plain-English insights for smarter marketing spend and higher conversions."
            },
            {
                title: "⚙️ Custom Workflow Automation",
                description: "Your unique approval processes, document handling, and niche workflows - all automated to fit your exact business needs."
            },
            {
                title: "🔮 Predictive Intelligence",
                description: "From equipment maintenance alerts to market intelligence scanning - AI that thinks ahead for your business."
            }
        ];

        return (
            <section 
                data-name="solutions-section" 
                data-file="components/SolutionsSection.js"
                id="solutions" 
                className="py-20 relative"
            >
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
                            Your Custom AI Automation Awaits
                        </h2>
                        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                            The real magic happens when AI is tailored precisely to your unique processes and bottlenecks.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {solutions.map((solution, index) => (
                            <div key={index} className="glassmorphism p-6 glow-effect hover:scale-105 transition-all duration-300">
                                <h3 className="text-xl font-semibold text-white mb-4">
                                    {solution.title}
                                </h3>
                                <p className="text-gray-300">
                                    {solution.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        );
    } catch (error) {
        console.error('SolutionsSection component error:', error);
        reportError(error);
    }
}
