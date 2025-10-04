import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, BarChart3, Zap, Target, TrendingUp, Users, Award } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const Index = () => {
  const services = [
    {
      icon: Zap,
      title: "Automações",
      description: "Automatize processos e libere seu tempo para o que realmente importa"
    },
    {
      icon: BarChart3,
      title: "Sistemas",
      description: "Soluções tecnológicas personalizadas para escalar seu negócio"
    },
    {
      icon: Target,
      title: "Marketing",
      description: "Estratégias data-driven para alcançar seu público ideal"
    },
    {
      icon: TrendingUp,
      title: "Tráfego",
      description: "Aumente sua visibilidade e conversões com campanhas otimizadas"
    },
    {
      icon: Users,
      title: "Métricas",
      description: "Análise completa de dados para decisões estratégicas"
    },
    {
      icon: Award,
      title: "Growth",
      description: "Crescimento sustentável e escalável para seu negócio"
    }
  ];

  const benefits = [
    "Aumento de até 300% em conversões",
    "Redução de 60% em custos operacionais",
    "Automação completa de processos manuais",
    "Dashboards em tempo real",
    "Integração com suas ferramentas atuais",
    "Suporte premium dedicado"
  ];

  return (
    <div className="min-h-screen bg-gradient-hero text-foreground">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0 opacity-20"
          style={{
            backgroundImage: `url(${heroImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-background/50 to-background" />
        
        <div className="container mx-auto px-4 z-10 text-center">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-premium bg-clip-text text-transparent">
              Transforme Dados em
              <br />
              Crescimento Exponencial
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-secondary max-w-3xl mx-auto">
              Soluções premium em automação, sistemas e marketing para empresas que não aceitam menos que a excelência
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-delayed">
              <Button 
                size="lg" 
                className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-gold text-lg px-8 py-6 animate-glow-pulse"
              >
                Agendar Consultoria
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-secondary text-secondary hover:bg-secondary/10 text-lg px-8 py-6"
              >
                Ver Cases
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Soluções <span className="bg-gradient-premium bg-clip-text text-transparent">Premium</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Tudo que você precisa para acelerar o crescimento do seu negócio
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="p-8 bg-gradient-card backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-500 hover:shadow-gold group cursor-pointer"
              >
                <service.icon className="h-12 w-12 text-primary mb-4 group-hover:animate-float" />
                <h3 className="text-2xl font-bold mb-3 text-foreground">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Por Que Escolher a <span className="bg-gradient-premium bg-clip-text text-transparent">Growth Business</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-12">
              Resultados comprovados e tecnologia de ponta para impulsionar seu crescimento
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 text-left">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                  </div>
                  <p className="text-foreground">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 border-t border-border">
        <div className="container mx-auto px-4">
          <Card className="p-12 md:p-16 bg-gradient-card backdrop-blur-sm border-primary/30 shadow-gold text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Pronto Para <span className="bg-gradient-premium bg-clip-text text-transparent">Crescer?</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Agende uma consultoria gratuita e descubra como podemos acelerar seu crescimento
            </p>
            <Button 
              size="lg" 
              className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-gold text-lg px-12 py-6 animate-glow-pulse"
            >
              Falar com Especialista
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold bg-gradient-premium bg-clip-text text-transparent mb-4">
                Growth Business
              </h3>
              <p className="text-muted-foreground">
                Transformando negócios através de tecnologia e estratégia
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-foreground">Soluções</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>Automações</li>
                <li>Sistemas</li>
                <li>Marketing</li>
                <li>Tráfego</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-foreground">Contato</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>contato@growthbusiness.com</li>
                <li>+55 (11) 9999-9999</li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-border text-center text-muted-foreground">
            <p>&copy; 2024 Growth Business. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
