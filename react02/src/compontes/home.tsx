const Home = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-[70vh] text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-300">
                S.A.A. Ushani
            </h1>
            <h2 className="text-xl md:text-2xl mb-8 text-purple-200">
                Full Stack Developer & UI/UX Enthusiast
            </h2>
            <p className="max-w-2xl text-lg mb-10 text-white/80">
                I build beautiful, functional web experiences with modern technologies.
                Currently exploring the intersection of design and development.
            </p>
            <button className="px-8 py-3 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 text-white font-medium hover:shadow-lg hover:shadow-purple-500/30 transition-all">
                View My Work
            </button>
        </div>
    );
};

export default Home;