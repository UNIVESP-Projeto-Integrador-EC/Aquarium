'use client';

import { useState } from 'react';
import CustomBarChart from '../../components/BarChart';

interface InfoCardProps {
  title: string;
  value: string | number;
  idealRange: string;
  iconClass: string;
  colorClass: string;
  linkText: string;
  linkHref: string;
}

const InfoCard: React.FC<InfoCardProps> = ({
  title,  value,  idealRange,  iconClass,  colorClass,  linkText,  linkHref,}) => (
  <div className="bg-white p-6 rounded-lg shadow">
    <div className="flex items-center space-x-4">
      <div className={`${colorClass} text-white p-3 rounded-full`}>
        <i className={iconClass}></i>
      </div>
      <div>
        <div className="text-2xl font-bold">{value}</div>
        <div className="text-gray-600">{title}</div>
      </div>
    </div>
    <div className="mt-4 flex justify-between items-center text-sm">
      <a className={`${colorClass} text-500`} href={linkHref}>
        {linkText}
      </a>
      <div className="text-gray-600">Ideal: {idealRange}</div>
    </div>
  </div>
);

const Home: React.FC = () => {
  const [luminosity, setLuminosity] = useState(65);

  const handleLuminosityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLuminosity(Number(e.target.value));
  };

  return (
    <div className="font-roboto bg-gray-100 min-h-screen text-black">
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-black">Aquário Dashboard</div>
          <div className="flex items-center space-x-4">
            <a className="text-gray-600" href="#">Configurações</a>
            <a className="text-gray-600" href="#">Relatórios</a>
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
          <InfoCard
            title="Temperatura da água"
            value="27°C"
            idealRange="25°C - 28°C"
            iconClass="fas fa-thermometer-half"
            colorClass="bg-blue-400"
            linkText="Detalhes"
            linkHref="#"
          />
          <InfoCard
            title="pH da água"
            value="7.5"
            idealRange="6.5 - 8.0"
            iconClass="fas fa-vial"
            colorClass="bg-green-400"
            linkText="Detalhes"
            linkHref="#"
          />
          <InfoCard
            title="Alimento em estoque"
            value="85%"
            idealRange="Acima de 50%"
            iconClass="fas fa-utensils"
            colorClass="bg-yellow-400"
            linkText="Reabastecer"
            linkHref="#"
          />
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="flex items-center space-x-4">
              <div className="bg-purple-400 text-white p-3 rounded-full">
                <i className="fas fa-lightbulb"></i>
              </div>
              <div>
                <div className="text-2xl font-bold">{luminosity}%</div>
                <div className="text-gray-600">Luminosidade</div>
              </div>
            </div>
            <div className="mt-4 flex justify-between items-center text-sm">
              <a className="text-purple-500" href="#">Ajustar</a>
              <div className="text-gray-600">Ideal: 60% - 70%</div>
            </div>
            <div className="mt-4">
              <input
                type="range"
                min="0"
                max="100"
                value={luminosity}
                onChange={handleLuminosityChange}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
              />
            </div>
          </div>

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
