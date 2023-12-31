import { Link, useLocation } from 'react-router-dom';
import { Project } from '../../../@types/project';


function ProjectItem({
  id, title, status, author, content, technoProjet,
}: Project) {
  const location = useLocation();
  const excerpContent = content.substring(0, 100);

  return (
    <div
      className={`flex flex-col justify-center items-center mt-10 ${(location.pathname === '/') ? 'w-[60%]' : 'w-[90%]'} sm:w-[80%] mx-auto`}
    >
      <div className="rounded-xl bg-primary0 opacity-75 m-1 w-[90%]">
        <div className="flex flex-col p-8 rounded-xl shadow-xl translate-x-4 translate-y-4 md:w-auto gap-5 bg-secondary20 bg-opacity-[50%]">
          <div className="flex flex-wrap items-center gap-2 w-[20%]">
            <img src={author.avatar_url} className="w-[40%] rounded-full" alt={(author.github.login.length === 0) ? author.username : author.github.login} />
            <p className="text-[white] font-bold">{(author.github.login.length === 0) ? author.username : author.github.login}</p>
          </div>
          <div className="flex flex-col items-center justify-center gap-2">
            <div className="font-semibold text-lg flex items-center">{title}</div>
            <span className="bg-primary0 text-xs font-medium mr-2 px-2.5 py-1 rounded text-[white] border-2 border-solid">{status}</span>
          </div>
          <div className="flex space-x-2 justify-center flex-wrap gap-5 pb-5 rounded">
            {technoProjet.length === 0 ? (
              <div>Aucune techno</div>
            )
              : technoProjet.map((techno) => (
                <div key={techno.id} style={{ borderColor: `${techno.color}` }} className="bg-[white] border-2 border-solid text-sm px-3 rounded-full pt-[0.1em] pb-[0.1em]">{techno.label}</div>
              ))}

          </div>
          <div className="my-4">
              {
                `${excerpContent}...`
              }
          </div>
          <div className="flex justify-center text-[white]">
            <Link to={`/project/${id}`} className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-[white] bg-secondary20 rounded-lg focus:ring-4 focus:outline-none">
              Détails du projet
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectItem;
