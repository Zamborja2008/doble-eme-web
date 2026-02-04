import Link from 'next/link';
import { ArrowLeft, AlertCircle, CheckCircle, XCircle } from 'lucide-react';

export default function DevolucionesPage() {
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
          Política de Devoluciones y Cambios
        </h1>
        
        <div className="bg-white rounded-lg shadow-md p-8 space-y-6 text-gray-700 leading-relaxed">
          
          {/* Aviso importante */}
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded">
            <div className="flex items-start gap-3">
              <AlertCircle className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-yellow-900 mb-1">
                  Importante: Productos Perecederos
                </p>
                <p className="text-yellow-800 text-sm">
                  Nuestros productos son de elaboración artesanal y naturaleza perecedera. 
                  Por esta razón, aplicamos políticas específicas para garantizar la calidad 
                  y frescura en cada entrega.

                  Al tratarse de un producto artesanal y vivo, pueden existir variaciones naturales en sabor, 
                  textura, color, nivel de fermentación o efervescencia entre lotes. 
                  Esto no constituye defecto del producto.
                </p>
              </div>
            </div>
          </div>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              1. Plazo para Devoluciones
            </h2>
            <p>
            Debes <strong>verificar el producto al momento de recibirlo.</strong> Los reclamos deben hacerse <strong>
                inmediatamente durante la entrega</strong> o dentro de las <strong>
                    primeras 2 horas</strong> después de recibido.
            </p>
            <p>
              Una vez aceptado el pedido sin observaciones, asumimos que el producto fue recibido en perfectas condiciones.
            </p> 
            <p>
              No aceptamos reclamos posteriores por la naturaleza perecedera de nuestros productos.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              2. Casos en los que SÍ Aceptamos Devoluciones
            </h2>
            
            <div className="space-y-4 mt-4">
              <div className="flex items-start gap-3 bg-green-50 p-4 rounded-lg">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-green-900 mb-1">Producto Defectuoso</p>
                  <p className="text-sm text-green-800">
                    Si el producto presenta signos evidentes de descomposición, mal estado 
                    o no cumple con los estándares de calidad.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-green-50 p-4 rounded-lg">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-green-900 mb-1">Error en el Pedido</p>
                  <p className="text-sm text-green-800">
                    Si recibiste un producto diferente al solicitado o la cantidad es incorrecta.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-green-50 p-4 rounded-lg">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-green-900 mb-1">Envase Dañado</p>
                  <p className="text-sm text-green-800">
                    Si el envase llegó roto, derramado o comprometiendo la integridad del producto.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              3. Casos en los que NO Aceptamos Devoluciones
            </h2>
            
            <div className="space-y-4 mt-4">
              <div className="flex items-start gap-3 bg-red-50 p-4 rounded-lg">
                <XCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-red-900 mb-1">Cambio de Opinión</p>
                  <p className="text-sm text-red-800">
                    No se aceptan devoluciones por arrepentimiento o cambio de preferencia 
                    después de recibir el producto.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-red-50 p-4 rounded-lg">
                <XCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-red-900 mb-1">Producto Abierto o Consumido</p>
                  <p className="text-sm text-red-800">
                    Una vez que el envase ha sido abierto o el producto parcialmente consumido, 
                    no se aceptan devoluciones.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-red-50 p-4 rounded-lg">
                <XCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-red-900 mb-1">Fuera del Plazo</p>
                  <p className="text-sm text-red-800">
                    Reportes no realizados en el mismo momento que recibe el producto.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-red-50 p-4 rounded-lg">
                <XCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-red-900 mb-1">Mal Almacenamiento</p>
                  <p className="text-sm text-red-800">
                    Productos dañados por almacenamiento inadecuado (fuera de refrigeración, 
                    exposición al calor, etc.) por parte del cliente.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              4. Proceso de Devolución
            </h2>
            <p className="mb-4">Para solicitar una devolución o cambio, sigue estos pasos:</p>
            
            <ol className="list-decimal list-inside space-y-3 ml-4">
              <li className="pl-2">
                <strong>Contacta inmediatamente</strong> vía WhatsApp al +51 912 304 748
                o email a doble.eme2815@gmail.com
              </li>
              <li className="pl-2">
                <strong>Proporciona evidencia</strong> del problema (fotos claras del producto, 
                envase, etiqueta con fecha, etc.)
              </li>
              <li className="pl-2">
                <strong>Describe el problema</strong> detalladamente (qué esperabas vs. qué recibiste)
              </li>
              <li className="pl-2">
                <strong>Incluye tu número de pedido</strong> o datos de la compra
              </li>
              <li className="pl-2">
                <strong>No deseches el producto</strong> hasta que confirmemos la devolución
              </li>
            </ol>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              5. Opciones de Resolución
            </h2>
            <p className="mb-4">
              Una vez aprobada tu solicitud, ofrecemos las siguientes opciones:
            </p>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="border border-green-200 rounded-lg p-4 bg-green-50">
                <h3 className="font-semibold text-green-900 mb-2">🔄 Reemplazo</h3>
                <p className="text-sm text-green-800">
                  Te enviamos un producto nuevo sin costo adicional en la siguiente entrega disponible.
                </p>
              </div>
              
              <div className="border border-green-200 rounded-lg p-4 bg-green-50">
                <h3 className="font-semibold text-green-900 mb-2">💰 Reembolso</h3>
                <p className="text-sm text-green-800">
                  Devolución del importe pagado mediante el mismo método de pago utilizado.
                </p>
              </div>
              
              <div className="border border-green-200 rounded-lg p-4 bg-green-50">
                <h3 className="font-semibold text-green-900 mb-2">🎁 Crédito</h3>
                <p className="text-sm text-green-800">
                  Crédito para usar en tu próxima compra con un 10% adicional de cortesía.
                </p>
              </div>
              
              <div className="border border-green-200 rounded-lg p-4 bg-green-50">
                <h3 className="font-semibold text-green-900 mb-2">📦 Producto Alternativo</h3>
                <p className="text-sm text-green-800">
                  Cambio por otro producto de valor similar según disponibilidad.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              6. Tiempo de Procesamiento
            </h2>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>
                <strong>Evaluación:</strong> Responderemos a tu solicitud dentro de 24 horas
              </li>
              <li>
                <strong>Reemplazo:</strong> Se enviará en la siguiente entrega programada (24-48 horas)
              </li>
              <li>
                <strong>Reembolso:</strong> Se procesará en 3-5 días hábiles según el método de pago
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              7. Prevención de Problemas
            </h2>
            <p className="mb-4">Para evitar inconvenientes:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Refrigera inmediatamente al recibir el producto</li>
              <li>Verifica el producto al momento de la entrega</li>
              <li>Revisa la fecha de elaboración y consumo preferente</li>
              <li>Sigue las instrucciones de almacenamiento</li>
              <li>Consume dentro del periodo recomendado</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              8. Garantía de Satisfacción
            </h2>
            <p>
              En Doble Eme nos esforzamos por entregar productos de la más alta calidad. 
              Si no estás satisfecho con tu compra por razones válidas, haremos todo lo posible 
              por resolver el problema de manera justa y rápida.
            </p>

            <p>
              Nos reservamos el derecho de rechazar solicitudes cuando se detecte uso indebido de la política, 
              evidencia insuficiente o inconsistencias en la información proporcionada.
            </p>
          </section>

          <section className="bg-blue-50 p-6 rounded-lg border border-blue-200">
            <h2 className="text-2xl font-semibold text-blue-900 mb-4">
              📞 ¿Necesitas Ayuda?
            </h2>
            <p className="text-blue-800 mb-4">
              Nuestro equipo de atención al cliente está disponible para ayudarte:
            </p>
            <ul className="list-none space-y-2">
              <li className="flex items-center gap-2 text-blue-900">
                <span className="font-medium">📱 WhatsApp:</span> +51 912 304 748
              </li>
              <li className="flex items-center gap-2 text-blue-900">
                <span className="font-medium">📧 Email:</span> doble.eme2815@gmail.com
              </li>
              <li className="flex items-center gap-2 text-blue-900">
                <span className="font-medium">⏰ Horario:</span> Lunes a Sábado, 9:00 AM - 6:00 PM
              </li>
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