'use client'

import { useState, useEffect } from 'react'
import { ShoppingCart, Mail, Star, Check, MessageSquare, Zap, Users, TrendingUp, X } from 'lucide-react'

export default function Home() {
  const [email, setEmail] = useState('')
  const [cartCount, setCartCount] = useState(0)
  const [showCart, setShowCart] = useState(false)
  const [emailSubmitted, setEmailSubmitted] = useState(false)

  // Carregar dados do Local Storage
  useEffect(() => {
    const savedCart = localStorage.getItem('chathotCart')
    if (savedCart) {
      setCartCount(parseInt(savedCart))
    }
  }, [])

  const handleAddToCart = () => {
    const newCount = cartCount + 1
    setCartCount(newCount)
    localStorage.setItem('chathotCart', newCount.toString())
    setShowCart(true)
    setTimeout(() => setShowCart(false), 3000)
  }

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

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
      {/* Header/Navbar */}
      <header className="fixed top-0 w-full bg-black/80 backdrop-blur-md z-50 border-b border-orange-500/20">
        <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img 
              src="https://k6hrqrxuu8obbfwn.public.blob.vercel-storage.com/temp/46aae178-1014-4624-8a21-d30b3a6a04df.png" 
              alt="ChatHot Logo" 
              className="h-10 w-auto"
            />
          </div>
          <button 
            onClick={() => setShowCart(!showCart)}
            className="relative p-3 hover:bg-orange-500/20 rounded-lg transition-all duration-300 border border-orange-500/30"
          >
            <ShoppingCart className="w-6 h-6 text-orange-500" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-gradient-to-r from-orange-500 to-orange-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold shadow-lg shadow-orange-500/50">
                {cartCount}
              </span>
            )}
          </button>
        </nav>
      </header>

      {/* Cart Notification */}
      {showCart && (
        <div className="fixed top-20 right-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-4 rounded-lg shadow-2xl shadow-orange-500/50 z-50 animate-bounce border border-orange-400">
          <div className="flex items-center gap-2">
            <Check className="w-5 h-5" />
            <span className="font-semibold">Adicionado ao carrinho!</span>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-white space-y-6">
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                Revolucione Seu <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600">Atendimento</span> ao Cliente
              </h1>
              <p className="text-xl text-gray-300">
                CRM Omnichannel completo que integra WhatsApp, Instagram, E-mail e Facebook em uma única plataforma inteligente.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={handleAddToCart}
                  className="bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 hover:from-orange-600 hover:via-orange-700 hover:to-orange-800 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-2xl shadow-orange-500/50 hover:shadow-orange-600/60 transition-all duration-300 hover:scale-105 border border-orange-400/50"
                >
                  Começar Agora
                </button>
                <button className="border-2 border-orange-500/50 hover:border-orange-500 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:bg-orange-500/10 hover:scale-105">
                  Ver Demonstração
                </button>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://k6hrqrxuu8obbfwn.public.blob.vercel-storage.com/temp/8fab01d6-0509-41a1-bb63-fc4f30ff355a.png" 
                alt="ChatHot CRM Omnichannel" 
                className="w-full rounded-2xl shadow-2xl shadow-orange-500/20 border border-orange-500/30"
              />
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

      {/* More Screenshots */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-white text-center mb-16">
            Veja o ChatHot em Ação
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              'https://k6hrqrxuu8obbfwn.public.blob.vercel-storage.com/temp/d5df327d-ebac-49f4-a93d-795ac046e358.png',
              'https://k6hrqrxuu8obbfwn.public.blob.vercel-storage.com/temp/ef023e4f-05c6-4786-ae87-045059447540.png',
              'https://k6hrqrxuu8obbfwn.public.blob.vercel-storage.com/temp/e89b32bb-f18d-4879-a766-1ccc2d12fa04.png',
              'https://k6hrqrxuu8obbfwn.public.blob.vercel-storage.com/temp/be48b000-ba06-4587-ac5a-e8e53a310859.png'
            ].map((img, idx) => (
              <img 
                key={idx}
                src={img} 
                alt={`Interface ChatHot ${idx + 1}`} 
                className="w-full rounded-xl shadow-2xl shadow-orange-500/10 border border-orange-500/30 hover:scale-105 hover:border-orange-500 transition-all duration-300"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Additional Features Gallery */}
      <section className="py-20 px-4 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              'https://k6hrqrxuu8obbfwn.public.blob.vercel-storage.com/temp/d3c67b64-277c-461b-afba-af39f1fc3bc8.png',
              'https://k6hrqrxuu8obbfwn.public.blob.vercel-storage.com/temp/344d1d5d-feda-4b38-abec-cdd94c5fb5b1.png',
              'https://k6hrqrxuu8obbfwn.public.blob.vercel-storage.com/temp/6d99021e-b381-4344-9dea-a260a2d8c20d.png',
              'https://k6hrqrxuu8obbfwn.public.blob.vercel-storage.com/temp/c450c065-0a53-4653-a7d3-0757ab02c937.png',
              'https://k6hrqrxuu8obbfwn.public.blob.vercel-storage.com/temp/04a30b97-cf00-40ed-be44-e8931b390339.png'
            ].map((img, idx) => (
              <img 
                key={idx}
                src={img} 
                alt={`Recurso ChatHot ${idx + 1}`} 
                className="w-full rounded-xl shadow-xl shadow-orange-500/10 border border-orange-500/30 hover:scale-105 hover:border-orange-500 transition-all duration-300"
              />
            ))}
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
              onClick={handleAddToCart}
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
              src="https://k6hrqrxuu8obbfwn.public.blob.vercel-storage.com/temp/46aae178-1014-4624-8a21-d30b3a6a04df.png" 
              alt="ChatHot Logo" 
              className="h-8 w-auto"
            />
            <p className="text-gray-400 text-center">
              © 2024 ChatHot. Todos os direitos reservados.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">Termos</a>
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">Privacidade</a>
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">Contato</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
