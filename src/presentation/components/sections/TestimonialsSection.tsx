'use client';

import { Star, Quote } from 'lucide-react';

// Datos de ejemplo - puedes crear entidades y repositorios si lo deseas
const testimonials = [
  {
    id: '1',
    name: 'Liliana Acosta',
    location: 'Callao, Callao',
    rating: 5,
    comment: 'El mejor kéfir que he probado. Completamente natural y fresco. Mi digestión ha mejorado notablemente desde que lo consumo diariamente.',
    date: '2026-01-15',
  },
  {
    id: '2',
    name: 'Brian Álvarez',
    location: 'San Miguel, Lima',
    rating: 4,
    comment: 'Buen día!. Muchas gracias por el Kefir, muy rico sabor y son notorios los beneficios que proporciona su consumo.',
    date: '2026-02-04',
  },
  {
    id: '3',
    name: 'Joselyn Abregú',
    location: 'Chincha, Perú',
    rating: 3,
    comment: 'Me encanta el sabor y la textura. Mis hijos también lo disfrutan. Es una alternativa saludable que toda la familia puede disfrutar.',
    date: '2026-01-25',
  },
];

export function TestimonialsSection() {
  return (
    <section id="comentarios" className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Encabezado */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Lo que Dicen Nuestros Clientes
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            La satisfacción de nuestros clientes es nuestra mejor recompensa
          </p>
        </div>

        {/* Grid de testimonios */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6 relative"
            >
              {/* Icono de comillas */}
              <div className="absolute -top-4 left-6 bg-green-600 rounded-full p-3">
                <Quote className="w-6 h-6 text-white" />
              </div>

              {/* Estrellas */}
              <div className="flex gap-1 mb-4 mt-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${
                      i < testimonial.rating
                        ? 'text-yellow-400 fill-yellow-400'
                        : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>

              {/* Comentario */}
              <p className="text-gray-700 mb-6 leading-relaxed">
                "{testimonial.comment}"
              </p>

              {/* Autor */}
              <div className="border-t pt-4">
                <p className="font-semibold text-gray-900">{testimonial.name}</p>
                <p className="text-sm text-gray-500">{testimonial.location}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            ¿Ya probaste nuestros productos? ¡Comparte tu experiencia!
          </p>
          <button
            onClick={() => {
              const message = encodeURIComponent('Hola! Me gustaría dejar un comentario sobre los productos');
              window.open(`https://wa.me/51940942119?text=${message}`, '_blank');
            }}
            className="inline-flex items-center gap-2 bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
          >
            Dejar un Comentario
          </button>
        </div>
      </div>
    </section>
  );
}