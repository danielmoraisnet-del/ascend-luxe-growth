import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Sparkles, Brain, Rocket, Shield, LineChart, Code } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const Index = () => {
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
          <div className="max-w-5xl mx-auto text-center space-y-8 animate-fade-in">
            <div className="inline-block">
              <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 backdrop-blur-sm">
                <Sparkles className="h-4 w-4 text-primary" />
                <span className="text-sm text-primary font-medium">Premium Growth Solutions</span>
              </div>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-bold tracking-tight">
              <span className="block text-foreground">Escale Seu</span>
              <span className="block bg-gradient-premium bg-clip-text text-transparent">Negócio</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
              Tecnologia de ponta e estratégias data-driven para empresas que buscam crescimento exponencial
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <Button 
                size="lg" 
                className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-6 shadow-gold"
              >
                Iniciar Projeto
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-border hover:bg-card text-lg px-8 py-6"
              >
                Explorar Soluções
              </Button>
            </div>
          </div>
        </div>

        {/* Floating elements */}
        <div className="absolute top-1/4 left-10 w-2 h-2 rounded-full bg-primary animate-float opacity-60" />
        <div className="absolute bottom-1/3 right-20 w-3 h-3 rounded-full bg-accent animate-float opacity-40" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 right-1/4 w-2 h-2 rounded-full bg-primary animate-float opacity-50" style={{ animationDelay: '2s' }} />
      </section>

      {/* Solutions Grid */}
      <section className="py-32 relative">
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

      {/* CTA Section */}
      <section className="py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl md:text-7xl font-bold mb-8">
              Pronto Para
              <br />
              <span className="bg-gradient-premium bg-clip-text text-transparent">Decolar?</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
              Agende uma reunião estratégica gratuita e descubra como multiplicar seus resultados
            </p>
            <Button 
              size="lg" 
              className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-gold text-xl px-12 py-8"
            >
              Agendar Agora
              <ArrowRight className="ml-2 h-6 w-6" />
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-12 mb-12">
              <div>
                <h3 className="text-2xl font-bold bg-gradient-premium bg-clip-text text-transparent mb-4">
                  Growth Business
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
                  <li className="hover:text-primary transition-colors cursor-pointer">contato@growthbusiness.com</li>
                  <li className="hover:text-primary transition-colors cursor-pointer">+55 (11) 9999-9999</li>
                </ul>
              </div>
            </div>
            
            <div className="pt-8 border-t border-border text-center text-muted-foreground text-sm">
              <p>&copy; 2024 Growth Business. Todos os direitos reservados.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
