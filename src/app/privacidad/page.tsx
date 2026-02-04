import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function PrivacidadPage() {
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
          Política de Privacidad
        </h1>
        
        <div className="bg-white rounded-lg shadow-md p-8 space-y-6 text-gray-700 leading-relaxed">
          
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              1. Introducción
            </h2>
            <p>
              En Doble Eme somos un emprendimiento artesanal dedicado a la elaboración diaria de productos naturales. 
              Nos comprometemos a proteger tu privacidad y los datos personales mínimos que nos proporcionas para coordinar pedidos y entregas. 
              Esta política explica cómo recopilamos, usamos y protegemos tu información dentro de nuestra modalidad de atención directa principalmente vía WhatsApp.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              2. Información que Recopilamos
            </h2>
            <p>Recopilamos la siguiente información cuando interactúas con nosotros:</p>
            <ul className="list-disc list-inside mt-3 space-y-2 ml-4">
              <li><strong>Información de contacto:</strong> nombre, teléfono, correo electrónico</li>
              <li><strong>Información de pedidos:</strong> productos solicitados, dirección de entrega</li>
              <strong>No utilizamos sistemas automatizados ni bases de datos masivas para almacenar información personal. 
                La información se mantiene únicamente dentro de los canales de comunicación directa utilizados para coordinar pedido
              </strong>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              3. Cómo Usamos tu Información
            </h2>
            <p>Utilizamos tus datos personales para:</p>
            <ul className="list-disc list-inside mt-3 space-y-2 ml-4">
              <li>Procesar y entregar tus pedidos</li>
              <li>Comunicarnos contigo sobre el estado de tu pedido</li>
              <li>Enviarte información sobre promociones (solo si lo autorizas)</li>
              <strong>Los datos proporcionados son utilizados exclusivamente para coordinar pedidos, entregas y comunicación directa con el cliente respecto a productos artesanales perecederos.</strong>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              4. Compartir Información
            </h2>
            <p>
              No vendemos, alquilamos ni compartimos tu información personal con terceros, 
              excepto en los siguientes casos:
            </p>
            <ul className="list-disc list-inside mt-3 space-y-2 ml-4">
              <li>Cuando sea necesario para completar tu pedido (servicios de entrega)</li>
              <li>Con tu consentimiento explícito</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              5. Medio de Atención
            </h2>
            <p>
              La gestión de pedidos y comunicación con los clientes se realiza principalmente a través de WhatsApp u otros canales directos de mensajería. 
              La información proporcionada se utiliza únicamente para fines comerciales relacionados con la compra realizada.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              6. Tus Derechos
            </h2>
            <p>Tienes derecho a:</p>
            <ul className="list-disc list-inside mt-3 space-y-2 ml-4">
              <li>Acceder a tus datos personales</li>
              <li>Rectificar datos incorrectos o incompletos</li>
              <li>Solicitar la eliminación de tus datos</li>
              <li>Oponerte al procesamiento de tus datos</li>
              <li>Retirar tu consentimiento en cualquier momento</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              7. Enlaces a Terceros
            </h2>
            <p>
              Nuestro sitio web puede contener enlaces a sitios de terceros (como WhatsApp, 
              Facebook, Instagram). No somos responsables de las prácticas de privacidad de 
              estos sitios.

              Tratamos la información proporcionada por nuestros clientes de forma responsable y únicamente para fines relacionados con la venta y entrega de productos, 
              conforme a la normativa peruana vigente aplicable a emprendimientos y actividades comerciales.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              8. Tratamiento Responsable de la Información
            </h2>
            <p>
              Tratamos la información proporcionada por nuestros clientes de forma responsable y únicamente para fines relacionados con la venta y entrega de productos, 
              conforme a la normativa peruana vigente aplicable a emprendimientos y actividades comerciales.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              9. Menores de Edad
            </h2>
            <p>
              Nuestros servicios no están dirigidos a menores de 18 años. No recopilamos 
              conscientemente información personal de menores.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              10. Cambios a esta Política
            </h2>
            <p>
              Podemos actualizar esta política de privacidad ocasionalmente. Te notificaremos 
              sobre cambios importantes publicando la nueva política en esta página.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              11. Contacto
            </h2>
            <p>
              Si tienes preguntas sobre esta política de privacidad o quieres ejercer tus derechos, 
              contáctanos:
            </p>
            <ul className="list-none mt-3 space-y-2 ml-4">
              <li>📧 Email: doble.eme2815@gmail.com</li>
              <li>📱 WhatsApp: +51 912 304 748</li>
              <li>📍 Ubicación: Lima, Perú</li>
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