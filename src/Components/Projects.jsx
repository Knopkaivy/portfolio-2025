import Project from './Project';
import ProjectImagesArray from './ProjectImages';
import '../Styles/Projects.scss'
function Projects() {
    const projectListArray = [
        {imgSrc: ProjectImagesArray[0].image, name: 'Beauty Salon Landing Page',},
        {imgSrc: ProjectImagesArray[1].image, name: 'Hotel Landing Page',},
        {imgSrc: ProjectImagesArray[2].image, name: 'Photographer Portfolio',},
        {imgSrc: ProjectImagesArray[3].image, name: 'Real Estate Listing',},
    ]
    const projectList = projectListArray.map((project, i) =>{
        return <Project key={i} imgSrc={project.imgSrc} name={project.name} />
    })

    return (


        <div className="projects" >
            {projectList}
        </div>
      );
}

export default Projects;