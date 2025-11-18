'use client'

import { useState } from 'react'
import { Mail, Star, Check, MessageSquare, Zap, Users, TrendingUp, Sparkles, DollarSign, Package, X, Play } from 'lucide-react'

export default function Home() {
  const [email, setEmail] = useState('')
  const [emailSubmitted, setEmailSubmitted] = useState(false)
  const [showVideoModal, setShowVideoModal] = useState(false)

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      const subscribers = JSON.parse(localStorage.getItem('chathotSubscribers') || '[]')
      subscribers.push({ email, date: new Date().toISOString() })
      localStorage.setItem('chathotSubscribers', JSON.stringify(subscribers))
      setEmailSubmitted(true)
      setEmail('')
      setTimeout(() => setEmailSubmitted(false), 5000)
    }
  }

  const handleLoginRedirect = () => {
    window.location.href = 'https://app.chathot.com.br/login'
  }

  const handleWhatsAppContact = () => {
    const message = encodeURIComponent('Ola gostaria de saber mais!!')
    window.open(`https://wa.me/5519988111438?text=${message}`, '_blank')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
      {/* Header/Navbar */}
      <header className="fixed top-0 w-full bg-black/80 backdrop-blur-md z-50 border-b border-orange-500/20">
        <nav className="container mx-auto px-4 py-4 flex items-center justify-center">
          <div className="flex items-center gap-3">
            <img 
              src="https://k6hrqrxuu8obbfwn.public.blob.vercel-storage.com/temp/ea263c57-6426-4076-b2d8-7840a5c3d022.png" 
              alt="ChatHot Logo" 
              className="h-10 w-auto"
            />
          </div>
        </nav>
      </header>

      {/* Video Modal */}
      {showVideoModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 animate-in fade-in duration-300">
          <div className="relative w-full max-w-5xl bg-gradient-to-br from-gray-900 to-black rounded-2xl border-2 border-orange-500/50 shadow-2xl shadow-orange-500/30 overflow-hidden">
            {/* Close Button */}
            <button
              onClick={() => setShowVideoModal(false)}
              className="absolute top-4 right-4 z-10 bg-black/80 hover:bg-orange-500 text-white p-3 rounded-full transition-all duration-300 hover:scale-110 border border-orange-500/50"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Video Container */}
            <div className="relative aspect-video bg-black">
              <iframe
                className="w-full h-full"
                src="https://drive.google.com/file/d/1KxYxEFp6quIE99hYXi7YKARz7nIxUlMa/preview"
                title="Demonstração ChatHot"
                allow="autoplay"
                allowFullScreen
              />
            </div>

            {/* Video Info */}
            <div className="p-6 bg-gradient-to-r from-gray-900 to-black border-t border-orange-500/30">
              <h3 className="text-2xl font-bold text-white mb-2">
                Veja o ChatHot em Ação
              </h3>
              <p className="text-gray-300">
                Descubra como nossa plataforma pode transformar o atendimento da sua empresa
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Hero Section - REDESENHADA */}
      <section className="pt-32 pb-20 px-4 relative overflow-hidden">
        {/* Efeitos de fundo animados */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange-600/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="text-center space-y-8">
            {/* Badge de destaque */}
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500/20 to-orange-600/20 border border-orange-500/30 rounded-full px-6 py-3 backdrop-blur-sm">
              <Sparkles className="w-5 h-5 text-orange-500" />
              <span className="text-orange-400 font-semibold">CRM Omnichannel #1 do Brasil</span>
            </div>

            {/* Título principal */}
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-black leading-tight text-white">
              Atendimento ao Cliente
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 animate-gradient">
                Sem Limites
              </span>
            </h1>

            {/* Subtítulo */}
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Unifique WhatsApp, Instagram, E-mail e Facebook em uma única plataforma inteligente. 
              <span className="text-orange-400 font-semibold"> Aumente suas vendas em até 300%</span>
            </p>

            {/* CTAs principais */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <button 
                onClick={handleLoginRedirect}
                className="group relative bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 hover:from-orange-600 hover:via-orange-700 hover:to-orange-800 text-white px-10 py-5 rounded-2xl font-bold text-lg shadow-2xl shadow-orange-500/50 hover:shadow-orange-600/70 transition-all duration-300 hover:scale-110 border-2 border-orange-400/50"
              >
                <span className="flex items-center gap-2">
                  Começar Agora - Grátis
                  <Sparkles className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                </span>
              </button>
              <button 
                onClick={() => setShowVideoModal(true)}
                className="group border-2 border-orange-500/50 hover:border-orange-500 text-white px-10 py-5 rounded-2xl font-semibold text-lg transition-all duration-300 hover:bg-orange-500/10 hover:scale-105 backdrop-blur-sm"
              >
                <span className="flex items-center gap-2">
                  <Play className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  Ver Demonstração
                </span>
              </button>
            </div>

            {/* Social proof */}
            <div className="flex flex-wrap justify-center items-center gap-8 pt-8 text-gray-400">
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-orange-500" />
                <span className="font-semibold text-white">+10.000</span> empresas
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-orange-500 fill-orange-500" />
                <span className="font-semibold text-white">4.9/5</span> avaliação
              </div>
              <div className="flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-orange-500" />
                <span className="font-semibold text-white">+5M</span> mensagens/mês
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">
            Funcionalidades <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">Poderosas</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: MessageSquare, title: 'Omnichannel', desc: 'Todos os canais em um só lugar' },
              { icon: Zap, title: 'Respostas Rápidas', desc: 'Agilize seu atendimento' },
              { icon: Users, title: 'Gestão de Equipe', desc: 'Organize seu time facilmente' },
              { icon: TrendingUp, title: 'Dashboard Completo', desc: 'Métricas em tempo real' }
            ].map((feature, idx) => (
              <div key={idx} className="bg-gradient-to-br from-gray-900 to-black backdrop-blur-sm p-6 rounded-xl border border-orange-500/30 hover:border-orange-500 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-orange-500/20">
                <feature.icon className="w-12 h-12 text-orange-500 mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Details Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <img 
              src="https://k6hrqrxuu8obbfwn.public.blob.vercel-storage.com/temp/e6cebed6-02f6-446f-9cc1-5488306be75f.png" 
              alt="Dashboard Interativa ChatHot" 
              className="w-full rounded-2xl shadow-2xl shadow-orange-500/20 border border-orange-500/30"
            />
            <div className="text-white space-y-6">
              <h2 className="text-4xl font-bold">Dashboard Interativa</h2>
              <p className="text-xl text-gray-300">
                Visualize todas as suas conversas, métricas e performance em tempo real. Interface intuitiva e fácil de usar.
              </p>
              <ul className="space-y-4">
                {[
                  'Gráficos e relatórios em tempo real',
                  'Anexe áudio, vídeo e fotos (MP3, MP4, JPEG)',
                  'Agendamento inteligente de mensagens',
                  'Respostas rápidas personalizáveis'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <Check className="w-6 h-6 text-orange-500 flex-shrink-0" />
                    <span className="text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* More Product Images */}
          <div className="grid md:grid-cols-3 gap-8">
            {[
              'https://k6hrqrxuu8obbfwn.public.blob.vercel-storage.com/temp/b4e6130c-a018-4cff-8252-3e9cc15b2727.png',
              'https://k6hrqrxuu8obbfwn.public.blob.vercel-storage.com/temp/d98a2568-ed6f-4a5e-ba0d-7ab01ada20b7.png',
              'https://k6hrqrxuu8obbfwn.public.blob.vercel-storage.com/temp/67c48746-539b-4e6f-adb3-1d40c64586fe.png'
            ].map((img, idx) => (
              <img 
                key={idx}
                src={img} 
                alt={`Funcionalidade ChatHot ${idx + 1}`} 
                className="w-full rounded-xl shadow-xl shadow-orange-500/10 border border-orange-500/30 hover:scale-105 hover:border-orange-500 transition-all duration-300"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">
            O Que Nossos <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">Clientes Dizem</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Maria Silva',
                role: 'CEO, TechStart',
                text: 'O ChatHot transformou completamente nosso atendimento. Aumentamos a satisfação dos clientes em 85%!',
                rating: 5
              },
              {
                name: 'João Santos',
                role: 'Gerente de Vendas',
                text: 'Ferramenta indispensável! A integração com todos os canais economizou horas do nosso time.',
                rating: 5
              },
              {
                name: 'Ana Costa',
                role: 'Diretora de Marketing',
                text: 'Dashboard intuitivo e funcionalidades incríveis. Recomendo para qualquer empresa!',
                rating: 5
              }
            ].map((testimonial, idx) => (
              <div key={idx} className="bg-gradient-to-br from-gray-900 to-black backdrop-blur-sm p-8 rounded-xl border border-orange-500/30 hover:border-orange-500 transition-all duration-300 hover:shadow-xl hover:shadow-orange-500/20">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-orange-500 text-orange-500" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic">"{testimonial.text}"</p>
                <div>
                  <p className="text-white font-bold">{testimonial.name}</p>
                  <p className="text-gray-400 text-sm">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500/20 to-orange-600/20 border border-orange-500/30 rounded-full px-6 py-3 backdrop-blur-sm mb-6">
              <Package className="w-5 h-5 text-orange-500" />
              <span className="text-orange-400 font-semibold">Planos e Preços</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Escolha o Plano <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">Ideal Para Você</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Soluções flexíveis para empresas de todos os tamanhos. Comece grátis e escale conforme cresce.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {/* Plano Starter */}
            <div className="bg-gradient-to-br from-gray-900 to-black backdrop-blur-sm p-8 rounded-2xl border border-orange-500/30 hover:border-orange-500 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-orange-500/20">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">Starter</h3>
                <p className="text-gray-400">Ideal para começar</p>
              </div>
              <div className="mb-8">
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-black text-white">R$ 50</span>
                  <span className="text-gray-400">/mês</span>
                </div>
              </div>
              <ul className="space-y-4 mb-8">
                {[
                  '1 login',
                  '1 fila',
                  '1 conexão'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-gray-300">
                    <Check className="w-5 h-5 text-orange-500 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <button 
                onClick={handleLoginRedirect}
                className="w-full bg-gradient-to-r from-orange-500/20 to-orange-600/20 hover:from-orange-500 hover:to-orange-600 text-white border border-orange-500/50 hover:border-orange-500 px-6 py-4 rounded-xl font-bold transition-all duration-300 hover:scale-105"
              >
                Começar Grátis
              </button>
            </div>

            {/* Plano Prata */}
            <div className="bg-gradient-to-br from-gray-900 to-black backdrop-blur-sm p-8 rounded-2xl border border-orange-500/30 hover:border-orange-500 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-orange-500/20">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">Prata</h3>
                <p className="text-gray-400">Para crescer</p>
              </div>
              <div className="mb-8">
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-black text-white">R$ 145</span>
                  <span className="text-gray-400">/mês</span>
                </div>
              </div>
              <ul className="space-y-4 mb-8">
                {[
                  '3 logins',
                  '3 filas',
                  '3 conexões'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-gray-300">
                    <Check className="w-5 h-5 text-orange-500 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <button 
                onClick={handleLoginRedirect}
                className="w-full bg-gradient-to-r from-orange-500/20 to-orange-600/20 hover:from-orange-500 hover:to-orange-600 text-white border border-orange-500/50 hover:border-orange-500 px-6 py-4 rounded-xl font-bold transition-all duration-300 hover:scale-105"
              >
                Começar Agora
              </button>
            </div>

            {/* Plano Ouro - DESTAQUE */}
            <div className="bg-gradient-to-br from-orange-500/10 to-orange-600/10 backdrop-blur-sm p-8 rounded-2xl border-2 border-orange-500 relative hover:scale-105 transition-all duration-300 shadow-2xl shadow-orange-500/30">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-2 rounded-full text-sm font-bold">
                MAIS POPULAR
              </div>
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">Ouro</h3>
                <p className="text-gray-300">Máximo desempenho</p>
              </div>
              <div className="mb-8">
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-black text-white">R$ 260</span>
                  <span className="text-gray-300">/mês</span>
                </div>
              </div>
              <ul className="space-y-4 mb-8">
                {[
                  '5 logins',
                  '5 filas',
                  '5 conexões'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-white">
                    <Check className="w-5 h-5 text-orange-500 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <button 
                onClick={handleLoginRedirect}
                className="w-full bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 hover:from-orange-600 hover:via-orange-700 hover:to-orange-800 text-white px-6 py-4 rounded-xl font-bold shadow-xl shadow-orange-500/50 transition-all duration-300 hover:scale-105"
              >
                Começar Agora
              </button>
            </div>

            {/* Plano Hot */}
            <div className="bg-gradient-to-br from-gray-900 to-black backdrop-blur-sm p-8 rounded-2xl border border-orange-500/30 hover:border-orange-500 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-orange-500/20">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">Hot</h3>
                <p className="text-gray-400">Ilimitado</p>
              </div>
              <div className="mb-8">
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-black text-white">R$ 750</span>
                  <span className="text-gray-400">/mês</span>
                </div>
              </div>
              <ul className="space-y-4 mb-8">
                {[
                  '10 logins',
                  '10 filas',
                  '10 conexões'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-gray-300">
                    <Check className="w-5 h-5 text-orange-500 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <button 
                onClick={handleLoginRedirect}
                className="w-full bg-gradient-to-r from-orange-500/20 to-orange-600/20 hover:from-orange-500 hover:to-orange-600 text-white border border-orange-500/50 hover:border-orange-500 px-6 py-4 rounded-xl font-bold transition-all duration-300 hover:scale-105"
              >
                Falar com Vendas
              </button>
            </div>
          </div>

          {/* Garantia */}
          <div className="mt-16 text-center">
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-orange-500/20 to-orange-600/20 border border-orange-500/30 rounded-full px-8 py-4 backdrop-blur-sm">
              <DollarSign className="w-6 h-6 text-orange-500" />
              <span className="text-white font-semibold text-lg">Garantia de 30 dias - 100% do seu dinheiro de volta</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 rounded-3xl p-12 text-center shadow-2xl shadow-orange-500/50 border border-orange-400">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Pronto Para Transformar Seu Atendimento?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Junte-se a milhares de empresas que já revolucionaram seu relacionamento com clientes
            </p>
            <button 
              onClick={handleLoginRedirect}
              className="bg-black hover:bg-gray-900 text-orange-500 px-12 py-5 rounded-xl font-bold text-xl shadow-2xl hover:shadow-black/80 transition-all duration-300 hover:scale-110 border-2 border-orange-400"
            >
              Começar Agora - Teste Grátis
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto max-w-2xl">
          <div className="text-center mb-8">
            <Mail className="w-16 h-16 text-orange-500 mx-auto mb-4" />
            <h2 className="text-4xl font-bold text-white mb-4">
              Fique Por Dentro das Novidades
            </h2>
            <p className="text-xl text-gray-300">
              Receba dicas exclusivas, atualizações e ofertas especiais
            </p>
          </div>
          
          {emailSubmitted ? (
            <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-6 rounded-xl text-center shadow-2xl shadow-orange-500/50 border border-orange-400">
              <Check className="w-12 h-12 mx-auto mb-3" />
              <p className="text-xl font-bold">Obrigado por se inscrever!</p>
              <p className="text-white/90">Você receberá nossas novidades em breve.</p>
            </div>
          ) : (
            <form onSubmit={handleEmailSubmit} className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Seu melhor e-mail"
                required
                className="flex-1 px-6 py-4 rounded-xl bg-black/50 border border-orange-500/30 text-white placeholder-gray-400 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/50 transition-all"
              />
              <button
                type="submit"
                className="bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 hover:from-orange-600 hover:via-orange-700 hover:to-orange-800 text-white px-8 py-4 rounded-xl font-bold shadow-xl shadow-orange-500/50 hover:shadow-orange-600/60 transition-all duration-300 hover:scale-105 border border-orange-400/50"
              >
                Inscrever-se
              </button>
            </form>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-orange-500/20">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <img 
              src="https://k6hrqrxuu8obbfwn.public.blob.vercel-storage.com/temp/ea263c57-6426-4076-b2d8-7840a5c3d022.png" 
              alt="ChatHot Logo" 
              className="h-8 w-auto"
            />
            <p className="text-gray-400 text-center">
              © 2024 ChatHot. Todos os direitos reservados.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">Termos</a>
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">Privacidade</a>
              <button 
                onClick={handleWhatsAppContact}
                className="text-gray-400 hover:text-orange-500 transition-colors font-semibold"
              >
                Contato
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
