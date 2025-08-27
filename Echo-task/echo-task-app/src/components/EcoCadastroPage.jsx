import React, { useState, useEffect } from 'react';
import {
    Leaf,
    Eye,
    EyeOff,
    Sparkles,
    Heart,
    TreePine,
    Star,
    ArrowRight,
    ChevronDown
} from 'lucide-react';

const EcoCadastroPage = () => {
    const [showPwd, setShowPwd] = useState(false);
    const [showConfirm, setShowConfirm] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        setIsVisible(true);

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
        <div className="min-h-screen relative overflow-hidden">
            {/* Custom Background */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: `url('/sua-imagem-de-fundo.jpg')`, // Substitua pelo caminho da sua imagem
                }}
            >
                <div className="absolute inset-0 bg-black/40" />
            </div>

            {/* Header */}
            <header className="relative z-20 flex justify-between items-center p-6 md:p-8">
                <div className="flex items-center space-x-3">
                    <div className="bg-white/20 backdrop-blur-sm p-2 rounded-xl">
                        <Leaf className="w-8 h-8 text-white" />
                    </div>
                    <h1 className="text-2xl font-bold text-white">Echo Task</h1>
                </div>

                <div className="flex space-x-4">
                    <button className="px-6 py-2 bg-white/20 backdrop-blur-sm text-white rounded-xl hover:bg-white/30 transition-all duration-300 font-medium">
                        Login
                    </button>
                    <button className="px-6 py-2 bg-white text-green-700 rounded-xl hover:bg-gray-100 transition-all duration-300 font-medium shadow-lg">
                        Voltar
                    </button>
                </div>
            </header>

            {/* Main Content */}
            <main className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 -mt-20">
                <div
                    className={`max-w-4xl mx-auto text-center transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                        }`}
                >
                    {/* Hero Badge */}
                    <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full mb-8 border border-white/30">
                        <Sparkles className="w-5 h-5 text-yellow-300" />
                        <span className="text-white font-medium">Junte-se ao movimento verde</span>
                        <Heart className="w-5 h-5 text-red-300" />
                    </div>

                    {/* Main Headline */}
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
                        Crie sua{' '}
                        <span className="relative inline-block">
                            <span className="relative z-10 bg-gradient-to-r from-yellow-300 to-green-300 bg-clip-text text-transparent">
                                conta
                            </span>
                            <div className="absolute inset-0 bg-white/20 blur-xl rounded-lg transform scale-110" />
                        </span>
                        {' '}e salve o planeta!
                    </h1>

                    {/* Form Card */}
                    <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 md:p-12 mb-12 border border-white/20 shadow-2xl max-w-md mx-auto">
                        <p className="text-lg md:text-xl text-white/90 leading-relaxed mb-8">
                            Comece sua jornada ecológica agora mesmo
                        </p>

                        <div className="flex flex-col space-y-5">
                            <input
                                type="text"
                                placeholder="Nome completo"
                                className="w-full px-5 py-4 bg-white/20 placeholder-white/70 text-white rounded-2xl focus:ring-2 focus:ring-green-400 outline-none border border-white/20 transition-all duration-300 hover:bg-white/25"
                            />
                            <input
                                type="email"
                                placeholder="E-mail"
                                className="w-full px-5 py-4 bg-white/20 placeholder-white/70 text-white rounded-2xl focus:ring-2 focus:ring-green-400 outline-none border border-white/20 transition-all duration-300 hover:bg-white/25"
                            />
                            <div className="relative">
                                <input
                                    type={showPwd ? 'text' : 'password'}
                                    placeholder="Senha"
                                    className="w-full px-5 py-4 bg-white/20 placeholder-white/70 text-white rounded-2xl focus:ring-2 focus:ring-green-400 outline-none pr-12 border border-white/20 transition-all duration-300 hover:bg-white/25"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPwd(!showPwd)}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-all duration-300 hover:scale-110"
                                >
                                    {showPwd ? <EyeOff size={20} /> : <Eye size={20} />}
                                </button>
                            </div>
                            <div className="relative">
                                <input
                                    type={showConfirm ? 'text' : 'password'}
                                    placeholder="Confirmar senha"
                                    className="w-full px-5 py-4 bg-white/20 placeholder-white/70 text-white rounded-2xl focus:ring-2 focus:ring-green-400 outline-none pr-12 border border-white/20 transition-all duration-300 hover:bg-white/25"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowConfirm(!showConfirm)}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-all duration-300 hover:scale-110"
                                >
                                    {showConfirm ? <EyeOff size={20} /> : <Eye size={20} />}
                                </button>
                            </div>

                            <button
                                onClick={(e) => {
                                    e.preventDefault();
                                    alert('Bem-vindo ao Echo Task! Sua conta foi criada com sucesso! 🌱');
                                }}
                                className="group w-full py-4 bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold rounded-2xl hover:from-green-600 hover:to-green-700 transition-all duration-300 shadow-2xl hover:shadow-green-500/25 hover:scale-105 flex items-center justify-center space-x-3"
                            >
                                <span>Criar Conta</span>
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </div>

                        <p className="text-center text-white/70 mt-8 text-lg">
                            Já tem uma conta?{' '}
                            <a href="/login" className="text-green-300 hover:text-green-200 underline font-medium transition-colors duration-300">
                                Entre agora
                            </a>
                        </p>
                    </div>

                    {/* Benefits Stats */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto">
                        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20 hover:bg-white/20 transition-all duration-300">
                            <div className="text-2xl font-bold text-white mb-1">Gratuito</div>
                            <div className="text-white/80 text-sm">100% grátis para sempre</div>
                        </div>

                        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20 hover:bg-white/20 transition-all duration-300">
                            <div className="text-2xl font-bold text-white mb-1">Missões</div>
                            <div className="text-white/80 text-sm">Tarefas diárias personalizadas</div>
                        </div>

                        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20 hover:bg-white/20 transition-all duration-300">
                            <div className="text-2xl font-bold text-white mb-1">Recompensas</div>
                            <div className="text-white/80 text-sm">Conquiste badges ecológicos</div>
                        </div>
                    </div>
                </div>

                {/* Scroll Indicator */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                    <div className="flex flex-col items-center space-y-2 text-white/70">
                        <span className="text-sm">Descubra mais</span>
                        <ChevronDown className="w-6 h-6" />
                    </div>
                </div>
            </main>

            {/* Floating Action Elements */}
            <div className="fixed bottom-8 right-8 z-30">
                <div className="flex flex-col space-y-4">
                    <button className="w-14 h-14 bg-gradient-to-r from-green-500 to-green-600 rounded-full shadow-2xl hover:scale-110 transition-all duration-300 flex items-center justify-center group">
                        <TreePine className="w-7 h-7 text-white group-hover:rotate-12 transition-transform duration-300" />
                    </button>
                    <button className="w-14 h-14 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full shadow-2xl hover:scale-110 transition-all duration-300 flex items-center justify-center group">
                        <Star className="w-7 h-7 text-white group-hover:rotate-12 transition-transform duration-300" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default EcoCadastroPage;
