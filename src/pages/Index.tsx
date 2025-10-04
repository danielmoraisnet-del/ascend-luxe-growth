import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ArrowRight, Sparkles, Brain, Rocket, Shield, LineChart, Code, Play, Download } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";
import { useState, useEffect } from "react";

const Index = () => {
  const [showCarousel, setShowCarousel] = useState(false);
  const [currentPhrase, setCurrentPhrase] = useState(0);
  const [fadeState, setFadeState] = useState<'in' | 'out'>('in');

  const phrases = [
    "Growth Business é a união de estratégia, tecnologia e dados para transformar empresas em potências escaláveis.",
    "No mercado atual, quem não escala fica para trás. Métodos de crescimento acelerado são essenciais para se manter competitivo.",
    "Dar o máximo hoje é construir os resultados que todos irão admirar amanhã.",
    "DE MORAIS, é a confiança no alicerce que transforma parcerias em crescimento real.",
    "A hora de evoluir é agora. Seu negócio merece mais."
  ];

  const handleStart = () => {
    setShowCarousel(true);
  };

  const handleNext = () => {
    if (currentPhrase < phrases.length - 1) {
      setFadeState('out');
      setTimeout(() => {
        setCurrentPhrase((prev) => prev + 1);
        setFadeState('in');
      }, 500);
    } else {
      // Scroll to solutions section
      const solutionsSection = document.getElementById('solutions-section');
      solutionsSection?.scrollIntoView({ behavior: 'smooth' });
      // Reset carousel
      setTimeout(() => {
        setShowCarousel(false);
        setCurrentPhrase(0);
      }, 1000);
    }
  };

  const solutions = [
    {
      icon: Brain,
      title: "IA & Automação",
      description: "Inteligência artificial trabalhando 24/7 pelo seu negócio"
    },
    {
      icon: Code,
      title: "Desenvolvimento",
      description: "Sistemas escaláveis e robustos sob medida"
    },
    {
      icon: LineChart,
      title: "Growth Marketing",
      description: "Crescimento acelerado com dados e estratégia"
    },
    {
      icon: Rocket,
      title: "Tráfego Pago",
      description: "ROI otimizado em todas as campanhas"
    },
    {
      icon: Shield,
      title: "Consultoria",
      description: "Estratégia personalizada para seu mercado"
    },
    {
      icon: Sparkles,
      title: "Otimização",
      description: "Processos enxutos e alta performance"
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Logo Header */}
      <header className="fixed top-0 left-0 right-0 z-50 py-8 bg-black">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-cormorant font-bold tracking-widest text-accent">
            DE MORAIS<span className="text-red-600">.</span>
          </h1>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0 opacity-10"
          style={{
            backgroundImage: `url(${heroImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-background via-background to-background/50" />
        
        <div className="container mx-auto px-4 z-10">
          {!showCarousel ? (
            <div className={`max-w-5xl mx-auto text-center space-y-8 transition-opacity duration-500 ${showCarousel ? 'opacity-0' : 'opacity-100 animate-fade-in'}`}>
              <div className="inline-block">
                <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 backdrop-blur-sm">
                  <Sparkles className="h-4 w-4 text-primary" />
                  <span className="text-sm text-primary font-medium">Premium Growth Solutions</span>
                </div>
              </div>
              
              <h2 className="text-6xl md:text-8xl font-bold tracking-tight">
                <span className="block text-foreground">Escale Seu</span>
                <span className="block bg-gradient-premium bg-clip-text text-transparent">Negócio</span>
              </h2>
              
              <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
                Tecnologia de ponta e estratégias data-driven para empresas que buscam crescimento exponencial
              </p>
              
              <div className="pt-8">
                <Button 
                  size="lg" 
                  onClick={handleStart}
                  className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-6 shadow-gold"
                >
                  START
                  <Play className="ml-2 h-5 w-5 fill-current" />
                </Button>
              </div>
            </div>
          ) : (
            <div className={`max-w-4xl mx-auto text-center space-y-8 transition-opacity duration-500 ${fadeState === 'in' ? 'opacity-100' : 'opacity-0'}`}>
              <p className="text-2xl md:text-4xl text-foreground leading-relaxed font-cormorant font-medium">
                {phrases[currentPhrase]}
              </p>
              <Button 
                size="lg" 
                onClick={handleNext}
                className="bg-yellow-500 text-black hover:bg-yellow-600 font-bold px-8 py-6"
              >
                NEXT
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          )}
        </div>

        {/* Floating elements */}
        <div className="absolute top-1/4 left-10 w-2 h-2 rounded-full bg-primary animate-float opacity-60" />
        <div className="absolute bottom-1/3 right-20 w-3 h-3 rounded-full bg-accent animate-float opacity-40" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 right-1/4 w-2 h-2 rounded-full bg-primary animate-float opacity-50" style={{ animationDelay: '2s' }} />
      </section>

      {/* Solutions Grid */}
      <section id="solutions-section" className="py-32 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              Soluções <span className="bg-gradient-premium bg-clip-text text-transparent">Completas</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Tudo que você precisa para dominar seu mercado
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {solutions.map((solution, index) => (
              <Card 
                key={index}
                className="group p-8 bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 hover:shadow-gold cursor-pointer"
              >
                <div className="space-y-4">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <solution.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">{solution.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{solution.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-32 bg-card/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-5xl md:text-6xl font-bold mb-6">
                Processo <span className="bg-gradient-premium bg-clip-text text-transparent">Simples</span>
              </h2>
              <p className="text-xl text-muted-foreground">
                Do primeiro contato aos resultados extraordinários
              </p>
            </div>

            <div className="space-y-8">
              {[
                { num: "01", title: "Análise", desc: "Entendemos seu negócio, desafios e objetivos" },
                { num: "02", title: "Estratégia", desc: "Criamos um plano personalizado de crescimento" },
                { num: "03", title: "Execução", desc: "Implementamos as soluções com excelência" },
                { num: "04", title: "Otimização", desc: "Medimos, ajustamos e escalamos resultados" }
              ].map((step, index) => (
                <div key={index} className="flex gap-6 items-start group">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-premium flex items-center justify-center text-primary-foreground font-bold text-xl">
                      {step.num}
                    </div>
                  </div>
                  <div className="flex-1 pt-3">
                    <h3 className="text-2xl font-bold text-foreground mb-2">{step.title}</h3>
                    <p className="text-muted-foreground text-lg">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* E-book Offer Section */}
      <section className="py-20 bg-card/20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Pronto Para
              <br />
              <span className="bg-gradient-premium bg-clip-text text-transparent">Decolar?</span>
            </h2>
            
            <div className="my-12 p-8 rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/5 to-transparent backdrop-blur-sm">
              <Download className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
                E-book Gratuito
              </h3>
              <p className="text-xl text-primary mb-6">
                10 Erros de Gestão que Impedem o Crescimento
              </p>
              <p className="text-muted-foreground mb-6">
                Descubra os erros mais comuns que travam o crescimento das empresas e como evitá-los. Preencha o formulário abaixo para receber.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section with Form */}
      <section className="py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-xl text-muted-foreground mb-8">
                Agende uma reunião estratégica gratuita e descubra como multiplicar seus resultados
              </p>
            </div>

            <form className="space-y-6 mb-12">
              <div className="grid md:grid-cols-2 gap-6">
                <Input 
                  placeholder="Nome"
                  className="bg-card/50 border-border"
                />
                <Input 
                  type="email"
                  placeholder="Email"
                  className="bg-card/50 border-border"
                />
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <Input 
                  placeholder="WhatsApp"
                  className="bg-card/50 border-border"
                />
                <Input 
                  placeholder="Área de Atuação"
                  className="bg-card/50 border-border"
                />
              </div>

              <Textarea 
                placeholder="O que você deseja hoje?"
                className="bg-card/50 border-border min-h-[120px]"
              />
            </form>

            <div className="text-center">
              <Button 
                size="lg" 
                className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-gold text-xl px-12 py-8 w-full md:w-auto"
              >
                Agendar Agora
                <ArrowRight className="ml-2 h-6 w-6" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-12 mb-12">
              <div>
                <h3 className="text-2xl font-cormorant font-bold bg-gradient-premium bg-clip-text text-transparent mb-4">
                  DE MORAIS<span className="text-red-600">.</span>
                </h3>
                <p className="text-muted-foreground text-sm">
                  Crescimento exponencial através de tecnologia e estratégia
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold mb-4 text-foreground">Soluções</h4>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  <li className="hover:text-primary transition-colors cursor-pointer">IA & Automação</li>
                  <li className="hover:text-primary transition-colors cursor-pointer">Desenvolvimento</li>
                  <li className="hover:text-primary transition-colors cursor-pointer">Marketing</li>
                  <li className="hover:text-primary transition-colors cursor-pointer">Tráfego</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold mb-4 text-foreground">Contato</h4>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  <li className="hover:text-primary transition-colors cursor-pointer">contato@demorais.xyz</li>
                  <li className="hover:text-primary transition-colors cursor-pointer">+55 92 99127-6333</li>
                </ul>
              </div>
            </div>
            
            <div className="pt-8 border-t border-border text-center text-muted-foreground text-sm">
              <p>&copy; 2024 DE MORAIS | Soluções Digitais. Todos os direitos reservados.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
