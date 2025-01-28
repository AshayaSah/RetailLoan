import Image1 from "../../assets/best.jpg";

const Hero = () => {
    return (
        <div 
            className="relative bg-cover bg-center h-screen" 
            style={{ backgroundImage: `url(${Image1})` }}
        >
            <div className="absolute inset-0 bg-black opacity-50">
                <div className="max-w-7xl mx-auto relative z-10 text-white text-center py-20 px-4">
                    <h1 className="text-3xl md:text-4xl font-bold mb-4 mt-36">The best way to inspire is often by example</h1>
                    <p className="text-base md:text-lg mb-8">Get a head start in life by saving for the future.</p>
                    <button className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700">
                        APPLY NOW
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Hero;