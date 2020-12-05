import React from 'react';

const Home = () => {
  return (
    <div className="flex flex-col w-full pt-10 md:pt-20">
      <div className="flex flex-row">
        <div className="hidden md:block w-450 -mt-10 pr-4">
          <img src="/images/welcome.png" alt="" />
        </div>
        <div className="w-full md:w-350">
          <div className="md:border border-gray-200 md:bg-white">
            <h1 className="font-bold text-3xl text-center md:py-6 pb-10">Instagram</h1>
            <form className="flex flex-col mx-8">
              <input
                type="text"
                className="border border-gray-300 bg-gray-100 rounded text-xs placeholder-gray-500 py-2 px-1 mb-3"
                placeholder="Teléfono, usuario o correo electrónico"
              />
              <input
                type="text"
                className="border border-gray-300 bg-gray-100 rounded text-xs placeholder-gray-500 py-2 px-1 mb-3"
                placeholder="Contraseña"
              />
              <button
                type="submit"
                className="text-white font-semibold bg-blue-400 rounded-md py-1"
              >
                Iniciar sesión
              </button>
            </form>
            <div className="text-center border-b border-gray-300 leading-1 my-4 mx-8 pt-4">
              <span className="bg-white px-4 text-gray-600">o</span>
            </div>
            <div className="flex flex-col items-center pt-4 text-blue-900">
              <div className="font-semibold  text-sm">
                <i aria-hidden className="fab fa-facebook-square"></i>
                <a href="https://www.facebook.com/" className="pl-2">
                  Iniciar sesión con Facebook
                </a>
              </div>
              <a href="https://www.facebook.com/" className="pt-5 pb-6 text-xs">
                ¿Olvidaste tu contraseña?
              </a>
            </div>
          </div>
          <div className="md:border border-gray-200 mt-4 text-sm text-center py-5 md:bg-white">
            <span>¿No tienes una cuenta?</span>
            <a href="" className="font-semibold text-blue-400">
              {' '}
              Regístrate
            </a>
          </div>
          <div className="pt-5">
            <div className="text-center">Descargar app</div>
            <div className="flex flex-row">
              <div className="px-2 pt-3">
                <img src="images/appstore.png" alt="" />
              </div>
              <div>
                <img src="images/googleplay.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className="pt-8 text-gray-400 text-sm">
        <div className="flex flex-row flex-wrap justify-center">
          <a className="px-2">Información</a>
          <a className="px-2">Blog</a>
          <a className="px-2">Empleo</a>
          <a className="px-2">Ayuda</a>
          <a className="px-2">API</a>
          <a className="px-2">Privacidad</a>
          <a className="px-2">Condiciones</a>
          <a className="px-2">Cuentas destacadas</a>
          <a className="px-2">Hashtags</a>
        </div>
        <div className="flex flex-row flex-wrap justify-center">
          <a className="px-2">Ubicaciones</a>
          <a className="px-2">Belleza</a>
          <a className="px-2">Danza y espectáctulos</a>
          <a className="px-2">Fitness</a>
          <a className="px-2">Comida y Bebida</a>
          <a className="px-2">Hogar y Jardinería</a>
          <a className="px-2">Música</a>
          <a className="px-2">Artes visulaes</a>
        </div>
        <div className="flex flex-row justify-center pt-2">
          <div>
            Español <button>&or;</button>{' '}
          </div>
          <div className="pl-2">&copy; 2020 Instagram from Facebook</div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
