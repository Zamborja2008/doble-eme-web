import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function TerminosPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header simple */}
      <div className="bg-white shadow-sm">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-green-600 hover:text-green-700 font-medium"
          >
            <ArrowLeft className="w-4 h-4" />
            Volver al inicio
          </Link>
        </div>
      </div>

      {/* Contenido */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">
          Términos y Condiciones
        </h1>
        
        <div className="bg-white rounded-lg shadow-md p-8 space-y-6 text-gray-700 leading-relaxed">
          
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              1. Aceptación de los Términos
            </h2>
            <p>
              Al acceder y utilizar este sitio web de Doble Eme, aceptas estar sujeto a estos 
              términos y condiciones. Si no estás de acuerdo con alguna parte de estos términos, 
              no debes utilizar nuestro sitio web.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              2. Productos y Servicios
            </h2>
            <p>
              Los productos ofrecidos en este sitio web son de fabricación artesanal. Nos reservamos 
              el derecho de modificar precios, descripciones y disponibilidad sin previo aviso.
            </p>
            <ul className="list-disc list-inside mt-3 space-y-2 ml-4">
              <li>Todos los productos son elaborados diariamente con ingredientes frescos</li>
              <li>Las imágenes son referenciales y pueden variar del producto final</li>
              <li>La disponibilidad está sujeta a stock</li>
            </ul>
            <p>
                Nuestros productos son alimentos naturales fermentados y no constituyen medicamentos ni sustituyen tratamientos médicos profesionales.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              3. Naturaleza Artesanal del Producto
            </h2>
            <p>
              Nuestros productos son elaborados de forma artesanal utilizando procesos naturales de fermentación. 
              Debido a esta naturaleza, pueden existir variaciones leves en sabor, 
              textura, color o nivel de efervescencia entre lotes, lo cual forma parte del proceso natural del producto.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              4. Proceso de Pedido
            </h2>
            <p>
              Los pedidos se realizan a través de WhatsApp. Al realizar un pedido, te comprometes a:
            </p>
            <ul className="list-disc list-inside mt-3 space-y-2 ml-4">
              <li>Proporcionar información de contacto válida y precisa</li>
              <li>Confirmar la disponibilidad del producto antes de la compra</li>
              <li>Coordinar la entrega o recojo según lo acordado</li>
            </ul>
            <p>
              El cliente es responsable de verificar el estado del producto al momento de la entrega o recojo.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              5. Pagos
            </h2>
            <p>
              Los métodos de pago aceptados serán informados al momento de realizar el pedido. 
              Nos reservamos el derecho de rechazar pedidos si detectamos actividad fraudulenta.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              6. Entrega
            </h2>
            <p>
              Las entregas se realizan en un plazo de 24-48 horas según disponibilidad y zona. 
              Los tiempos de entrega son estimados y pueden variar por circunstancias fuera de 
              nuestro control.

              El servicio no incluye delivery; el cliente coordina o asume el recojo/envío según corresponda.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              7. Devoluciones y Cambios
            </h2>
            <p>
              Debido a la naturaleza perecedera de nuestros productos, solo aceptamos devoluciones 
              en caso de productos defectuosos o errores en el pedido. Debes notificarnos dentro de 
              las 2 horas de recibido el producto.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              8. Limitación de Responsabilidad y Consumo responsable
            </h2>
            <p>
              Doble Eme no será responsable por daños indirectos, incidentales o consecuentes 
              derivados del uso de nuestros productos. Recomendamos consultar con un profesional 
              de la salud antes de consumir si tienes alergias o condiciones médicas.
            </p>
            <p>
                Cada cliente es responsable de evaluar su tolerancia personal a productos fermentados, lácteos o frutas naturales antes del consumo.
            </p>

          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              9. Modificaciones
            </h2>
            <p>
              Nos reservamos el derecho de modificar estos términos en cualquier momento. 
              Las modificaciones entrarán en vigor inmediatamente después de su publicación 
              en el sitio web.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              10. Conservación
            </h2>
            <p>
              El producto debe mantenerse refrigerado en todo momento.
              Doble Eme no se responsabiliza por daños derivados de mala conservación posterior a la entrega.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              11. Contacto
            </h2>
            <p>
              Para cualquier consulta sobre estos términos, contáctanos a través de:
            </p>
            <ul className="list-none mt-3 space-y-2 ml-4">
              <li>📧 Email: doble.eme2815@gmail.com</li>
              <li>📱 WhatsApp: +51 912 304 748</li>
            </ul>
          </section>

          <div className="border-t pt-6 mt-8">
            <p className="text-sm text-gray-500">
              Última actualización: {new Date().toLocaleDateString('es-PE', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}