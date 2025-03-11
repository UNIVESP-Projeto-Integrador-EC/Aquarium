import Head from 'next/head';
import CustomBarChart from '../../components/BarChart';

const Home: React.FC = () => {
  return (
    <div className="font-roboto bg-gray-100 min-h-screen text-black">
      <Head>
        <title>Dashboard</title>
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <div className="text-2xl font-bold text-black">Aquário Dashboard</div>
          </div>
          <div className="flex items-center space-x-4">
            <a className="text-gray-600" href="#">
              Configurações
            </a>
            <a className="text-gray-600" href="#">
              Relatórios
            </a>
            <div className="relative">
              <i className="fas fa-bell text-gray-600"></i>
              <span className="absolute top-0 right-0 inline-block w-3 h-3 bg-red-600 rounded-full"></span>
            </div>
            <img
              alt="Foto de perfil"
              className="w-10 h-10 rounded-full"
              height="40"
              src="https://storage.googleapis.com/a1aa/image/anJZkQTHcdRfT3NQy6Cn9hPcm0OiQpLS9FALUlKkyCI.jpg"
              width="40"
            />
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Temperatura da Água */}
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="flex items-center space-x-4">
              <div className="bg-blue-400 text-white p-3 rounded-full">
                <i className="fas fa-thermometer-half"></i>
              </div>
              <div>
                <div className="text-2xl font-bold">27°C</div>
                <div className="text-gray-600">Temperatura da água</div>
              </div>
            </div>
            <div className="mt-4 flex justify-between items-center text-sm">
              <a className="text-blue-500" href="#">
                Detalhes
              </a>
              <div className="text-gray-600">Ideal: 25°C - 28°C</div>
            </div>
          </div>

          {/* pH da Água */}
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="flex items-center space-x-4">
              <div className="bg-green-400 text-white p-3 rounded-full">
                <i className="fas fa-vial"></i>
              </div>
              <div>
                <div className="text-2xl font-bold">7.5</div>
                <div className="text-gray-600">pH da água</div>
              </div>
            </div>
            <div className="mt-4 flex justify-between items-center text-sm">
              <a className="text-green-500" href="#">
                Detalhes
              </a>
              <div className="text-gray-600">Ideal: 6.5 - 8.0</div>
            </div>
          </div>

          {/* Autoalimentação */}
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="flex items-center space-x-4">
              <div className="bg-yellow-400 text-white p-3 rounded-full">
                <i className="fas fa-utensils"></i>
              </div>
              <div>
                <div className="text-2xl font-bold">85%</div>
                <div className="text-gray-600">Alimento em estoque</div>
              </div>
            </div>
            <div className="mt-4 flex justify-between items-center text-sm">
              <a className="text-yellow-500" href="#">
                Reabastecer
              </a>
              <div className="text-gray-600">Estoque acima de 50%</div>
            </div>
          </div>

          {/* Luminosidade */}
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="flex items-center space-x-4">
              <div className="bg-purple-400 text-white p-3 rounded-full">
                <i className="fas fa-lightbulb"></i>
              </div>
              <div>
                <div className="text-2xl font-bold">65%</div>
                <div className="text-gray-600">Luminosidade</div>
              </div>
            </div>
            <div className="mt-4 flex justify-between items-center text-sm">
              <a className="text-purple-500" href="#">
                Ajustar
              </a>
              <div className="text-gray-600">Ideal: 60% - 70%</div>
            </div>
          </div>

          {/* Gráfico */}
          <div className="bg-white p-6 rounded-lg shadow col-span-1 md:col-span-2 lg:col-span-1">
            <div className="flex justify-between items-center">
              <div className="text-lg font-bold">Todos os peixes</div>
              <i className="fas fa-ellipsis-h text-black"></i>
            </div>
            <div className="mt-4">
              <CustomBarChart />
            </div>
            <div className="mt-4 flex justify-center space-x-4 text-sm">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500"></div>
                <div>Espécies</div>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-gray-600"></div>
                <div>Quantidade</div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
