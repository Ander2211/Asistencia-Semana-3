import styles from "./page.module.css";

function TarjetaEstudiante({ nombre, carnet, colorFavorito }) {
  return (
    // JSX: Usamos className en lugar de class para evitar conflictos con JS.
    <div
      className="border-t-8 rounded-lg shadow-md p-6 bg-white"
      style={{ borderTopColor: colorFavorito }}
    >
      {/* Insertamos variables y código de JS usando llaves {} */}
      <h2 className="text-2xl font-bold mb-2">Estudiante: {nombre}</h2>
      <p className="text-gray-600 mb-1">Carnet: {carnet}</p>
      <p style={{ color: colorFavorito }} className="font-semibold">
        Estado: Conectado
      </p>
    </div>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 p-8 page">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold underline">
          Panel de Estudiantes - Universidad Don Bosco
        </h1>
        <p className="text-center text-gray-600 mb-8">
          Aplicando conceptos de Componentes y JSX con Next.js.
        </p>
        <div className="grid md:grid-cols-2 gap-7">
          {/* Renderizamos el componente del Profesor */}
          <TarjetaEstudiante
            nombre="Anderson Daniel Hernadez"
            carnet="HA240610"
            colorFavorito="#8B0003"
          />
          <TarjetaEstudiante
            nombre="Guillermo Antonio Hernandez"
            carnet="HG243075"
            colorFavorito="#8BCA33"
          />
          <TarjetaEstudiante
            nombre="Bryan Alexis Peña"
            carnet="PB243032"
            colorFavorito="#8BF"
          />

          <TarjetaEstudiante
            nombre="Yasir Mauricio Melendez"
            carnet="MA243080"
            colorFavorito="#8B1CFF"
          />

          

        </div>
      </div>
    </div>
  );
}
