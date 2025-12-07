import React, { useState } from 'react';
import { Sword, Sparkles, Hand, Star } from 'lucide-react';

// Classe Heroi
class Heroi {
  constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
  }

  atacar() {
    let ataque;
    
    switch(this.tipo.toLowerCase()) {
      case 'mago':
        ataque = 'usou magia';
        break;
      case 'guerreiro':
        ataque = 'usou espada';
        break;
      case 'monge':
        ataque = 'usou artes marciais';
        break;
      case 'ninja':
        ataque = 'usou shuriken';
        break;
      default:
        ataque = 'usou um ataque';
    }
    
    return `o ${this.tipo} atacou usando ${ataque}`;
  }
}

const App = () => {
  const [herois, setHerois] = useState([]);
  const [nome, setNome] = useState('');
  const [idade, setIdade] = useState('');
  const [tipo, setTipo] = useState('guerreiro');
  const [mensagem, setMensagem] = useState('');

  const tiposHeroi = [
    { valor: 'guerreiro', label: 'Guerreiro', icon: Sword, cor: 'from-red-500 to-orange-500' },
    { valor: 'mago', label: 'Mago', icon: Sparkles, cor: 'from-purple-500 to-blue-500' },
    { valor: 'monge', label: 'Monge', icon: Hand, cor: 'from-yellow-500 to-orange-400' },
    { valor: 'ninja', label: 'Ninja', icon: Star, cor: 'from-gray-700 to-gray-900' }
  ];

  const criarHeroi = () => {
    if (!nome || !idade) {
      setMensagem('⚠️ Preencha todos os campos!');
      setTimeout(() => setMensagem(''), 3000);
      return;
    }

    const novoHeroi = new Heroi(nome, parseInt(idade), tipo);
    setHerois([...herois, novoHeroi]);
    setMensagem(`✅ ${nome} foi criado com sucesso!`);
    
    setNome('');
    setIdade('');
    setTimeout(() => setMensagem(''), 3000);
  };

  const executarAtaque = (heroi) => {
    const resultado = heroi.atacar();
    setMensagem(`⚔️ ${resultado}`);
    setTimeout(() => setMensagem(''), 4000);
  };

  const getIcone = (tipo) => {
    const tipoInfo = tiposHeroi.find(t => t.valor === tipo.toLowerCase());
    return tipoInfo ? tipoInfo.icon : Sword;
  };

  const getCor = (tipo) => {
    const tipoInfo = tiposHeroi.find(t => t.valor === tipo.toLowerCase());
    return tipoInfo ? tipoInfo.cor : 'from-gray-500 to-gray-700';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold text-white mb-2 drop-shadow-lg">
            ⚔️ Aventura dos Heróis
          </h1>
          <p className="text-purple-200 text-lg">Desafio DIO - Classes e Objetos</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-2xl">
            <h2 className="text-2xl font-bold text-white mb-6">Criar Novo Herói</h2>
            
            <div className="space-y-4">
              <div>
                <label className="block text-purple-200 mb-2 font-medium">Nome do Herói</label>
                <input
                  type="text"
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
                  placeholder="Ex: Arthas"
                />
              </div>

              <div>
                <label className="block text-purple-200 mb-2 font-medium">Idade</label>
                <input
                  type="number"
                  value={idade}
                  onChange={(e) => setIdade(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
                  placeholder="Ex: 25"
                />
              </div>

              <div>
                <label className="block text-purple-200 mb-2 font-medium">Classe do Herói</label>
                <div className="grid grid-cols-2 gap-3">
                  {tiposHeroi.map((t) => {
                    const Icon = t.icon;
                    return (
                      <button
                        key={t.valor}
                        onClick={() => setTipo(t.valor)}
                        className={`p-4 rounded-lg border-2 transition-all ${
                          tipo === t.valor
                            ? 'border-white bg-white/20 scale-105'
                            : 'border-white/30 bg-white/5 hover:bg-white/10'
                        }`}
                      >
                        <Icon className="w-6 h-6 mx-auto mb-2 text-white" />
                        <span className="text-white font-medium">{t.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              <button
                onClick={criarHeroi}
                className="w-full py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all transform hover:scale-105 shadow-lg"
              >
                ✨ Criar Herói
              </button>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-2xl">
            <h2 className="text-2xl font-bold text-white mb-6">Lista de Heróis</h2>
            
            {herois.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-purple-200 text-lg">Nenhum herói criado ainda</p>
                <p className="text-purple-300 text-sm mt-2">Crie seu primeiro herói ao lado!</p>
              </div>
            ) : (
              <div className="space-y-3 max-h-96 overflow-y-auto">
                {herois.map((heroi, index) => {
                  const Icon = getIcone(heroi.tipo);
                  return (
                    <div
                      key={index}
                      className={`bg-gradient-to-r ${getCor(heroi.tipo)} p-4 rounded-lg border border-white/30 shadow-lg`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <Icon className="w-8 h-8 text-white" />
                          <div>
                            <h3 className="text-white font-bold text-lg">{heroi.nome}</h3>
                            <p className="text-white/80 text-sm">
                              {heroi.tipo.charAt(0).toUpperCase() + heroi.tipo.slice(1)} • {heroi.idade} anos
                            </p>
                          </div>
                        </div>
                        <button
                          onClick={() => executarAtaque(heroi)}
                          className="px-4 py-2 bg-white/20 hover:bg-white/30 text-white font-bold rounded-lg transition-all transform hover:scale-110 border border-white/40"
                        >
                          ⚔️ Atacar
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>

        {mensagem && (
          <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 bg-white/95 backdrop-blur-md px-8 py-4 rounded-full shadow-2xl border border-purple-200 animate-bounce">
            <p className="text-purple-900 font-bold text-lg">{mensagem}</p>
          </div>
        )}

        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-2xl">
          <h3 className="text-xl font-bold text-white mb-4">📋 Sobre o Projeto</h3>
          <div className="text-purple-200 space-y-2">
            <p>✅ <strong>Classe Heroi:</strong> com propriedades nome, idade e tipo</p>
            <p>✅ <strong>Método atacar():</strong> retorna mensagem personalizada por tipo</p>
            <p>✅ <strong>4 Classes:</strong> Guerreiro, Mago, Monge e Ninja</p>
            <p>✅ <strong>Estruturas utilizadas:</strong> Variáveis, Operadores, Laços, Decisões, Funções, Classes e Objetos</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
