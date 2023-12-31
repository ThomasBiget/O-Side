import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Menu as Burger, User, Home, UserPlus,
} from 'react-feather';
import { useAppSelector } from '../../hooks/redux';
import ModalUser from './ModalUser';


function Menu() {
  // state du menu utilisateur
  const [displayMenu, setDisplayMenu] = useState<boolean>(false);
  // state qui permet de savoir si l'utilisateur est connecté
  const isLogged = useAppSelector((state) => state.login.logged);
  // state qui récupère les données de l'utilisateur
  const avatarGitHub = useAppSelector((state) => state.user.data.avatar_url);
  const userName = useAppSelector((state) => state.user.data.username);
  const githubLogin = useAppSelector((state) => state.user.data.github.login); 
  // state du modal
  const [showModal, setShowModal] = useState(false);
  
  // Permet d'afficher le menu utilisateur
  const handleToogleMenu = () => {
    setDisplayMenu(!displayMenu);
  };
  // Permet de fermer le menu utilisateur
  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <div>
        {/* Permet d'afficher le menu utilisateur */}
        {showModal && (
          <ModalUser handleCloseModal={closeModal} />
        )}
      </div>
      <nav className="flex items-center justify-between p-2 gap-2">
        <div className="block sm:hidden">
          <div className={`${displayMenu ? 'hidden' : 'block'}`}>
            <Burger onClick={handleToogleMenu} />
          </div>
        </div>
        <div
          className={`w-full block flex-grow sm:flex sm:items-center sm:w-auto ${displayMenu ? 'block' : 'hidden'}`}
        >
          <div className="h-full text-sm flex flex-wrap gap-3 items-center justify-center absolute left-0 top-0 w-full sm:pb-0 sm:relative sm:flex-row bg-gradient-to-r from-emeral to-cyan sm:flex-wrap sm:bg-none">
            <Link
              to="/"
              onClick={handleToogleMenu}
              className="block sm:inline-block sm:mt-0 text-white-200 border border-solid border-[white] rounded p-2 bg-cyan sm:bg-primary0 tracking-wider"
            >
              <Home />
            </Link>
            <Link
              to="/projects"
              onClick={handleToogleMenu}
              className="block sm:inline-block sm:mt-0 text-white-200 border border-solid border-[white] rounded p-2 bg-cyan sm:bg-primary0 tracking-wider"
            >
              Projets
            </Link>
            <Link
              to="/about"
              onClick={handleToogleMenu}
              className="block sm:inline-block sm:mt-0 text-white-200 border border-solid border-[white] rounded p-2 bg-cyan sm:bg-primary0 tracking-wider"
            >
              About
            </Link>
            <Link
              to="/search"
              onClick={handleToogleMenu}
              className="block sm:inline-block sm:mt-0 text-white-200 border border-solid border-[white] rounded p-2 bg-cyan sm:bg-primary0 tracking-wider"
            >
              Rechercher
            </Link>
            <div className="sm:hidden ">
              <button onClick={handleToogleMenu} className="absolute top-1 right-1 w-7 h-7 rounded-full border border-solid border-[red] bg-[red] text-[white]">
                X
              </button>
            </div>
          </div>
        </div>
        {/* Affichage de cette partie si utilisateur connecté */}
        {isLogged ? (
          <button type="button" onClick={() => setShowModal(true)}>
            <img src={avatarGitHub} className="rounded-full mx-auto h-12 w-12 bg-cover bg-center" alt={(githubLogin.length === 0) ? userName : githubLogin} />
            {' '}
          </button>
        ) : (
          <>
          <Link
            to="/login"
            className="border border-solid border-[white] rounded-full p-1 bg-[white]"
          >
            <User />
          </Link>
          <Link
          to="/register"
          className="border border-solid border-[white] rounded-full p-1 bg-[white]"
        >
          <UserPlus />
        </Link>
        </>
        )}
      </nav>
    </>
  );
}

export default Menu;
