export default function Footer() {
    return (
      <footer className="bg-black text-white">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h2 className="text-lg font-semibold">Sobre Nós</h2>
              <p className="mt-2 text-sm">
                Somos uma loja dedicada a oferecer as melhores camisetas, com design exclusivo e qualidade excepcional.
              </p>
            </div>
            <div>
              <h2 className="text-lg font-semibold">Links Rápidos</h2>
              <ul className="mt-2 space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">Início</a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">Produtos</a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">Sobre Nós</a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">Contato</a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-lg font-semibold">Siga-nos</h2>
              <div className="flex space-x-4 mt-2">
                <a href="#" className="text-gray-400 hover:text-white">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12c0 5.5 4.48 10 10 10 5.52 0 10-4.5 10-10S17.52 2 12 2zm1.3 17.7h-2.6V15h-1.5v-2.5h1.5V11c0-1.2.4-2 1.5-2 .6 0 1.1.05 1.5.1v1.5h-1c-.6 0-.8.4-.8.9v1.2h2.3L13 15h-2v4.7h2.3z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.23 5.924c-.774.344-1.606.576-2.478.68.891-.533 1.574-1.377 1.896-2.376-.834.494-1.759.855-2.743 1.048-.787-.836-1.908-1.36-3.146-1.36-2.382 0-4.307 1.925-4.307 4.307 0 .336.038.662.112.976C7.691 10.097 4.066 8.563 1.64 6.228c-.373.64-.586 1.38-.586 2.179 0 1.506.766 2.83 1.93 3.607-.713-.023-1.38-.218-1.964-.545v.054c0 2.1 1.493 3.842 3.474 4.243-.367.1-.75.154-1.14.154-.278 0-.55-.027-.817-.079.553 1.724 2.158 2.975 4.055 3.01-1.48 1.158-3.348 1.846-5.372 1.846-.349 0-.688-.022-1.024-.064 1.897 1.217 4.145 1.933 6.548 1.933 7.861 0 12.145-6.498 12.145-12.145 0-.185-.004-.372-.014-.556.834-.601 1.564-1.354 2.141-2.206z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.373 0 0 5.373 0 12c0 5.316 3.438 9.8 8.094 11.438.593.109.81-.257.81-.57 0-.285-.01-1.046-.015-2.057-3.302.715-4.007-1.591-4.007-1.591-.543-1.375-1.326-1.744-1.326-1.744-1.083-.739.083-.724.083-.724 1.197.084 1.827 1.232 1.827 1.232 1.06 1.812 2.778 1.292 3.45.988.107-.766.416-1.292.754-1.588-2.645-.3-5.428-1.322-5.428-5.878 0-1.297.465-2.36 1.234-3.197-.123-.303-.535-1.526.116-3.175 0 0 1.008-.322 3.304 1.228A11.563 11.563 0 0112 4.889c1.03.004 2.071.139 3.029.406 2.297-1.551 3.304-1.228 3.304-1.228.651 1.649.239 2.872.116 3.175.77.837 1.234 1.9 1.234 3.197 0 4.57-2.788 5.575-5.436 5.87.428.37.81 1.099.81 2.22 0 1.604-.014 2.91-.014 3.3 0 .313.215.688.82.57C20.564 21.798 24 17.314 24 12c0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
  
          <div className="mt-8 border-t border-gray-700 pt-6 text-center">
            <p className="text-sm text-gray-400">
              © 2024 Company Name. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    );
  }
  