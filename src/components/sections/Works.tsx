import { github, google } from '../../assets';
import { SectionWrapper } from '../../hoc';
import { projects } from '../../constants';
import { config } from '../../constants/config';
import { TProject } from '../../types';
import { styles } from '../../constants/styles';

const ProjectCard: React.FC<{ index: number } & TProject> = ({
  // index,
  name,
  description,
  tags,
  image,
  sourceCodeLink,
  live,
}) => {
  return (
    <div>
      {/* <motion.div variants={fadeIn('up', 'spring', index * 0.5, 0.75)}>
        <Tilt glareEnable tiltEnable tiltMaxAngleX={30} tiltMaxAngleY={30} glareColor="#aaa6c3"> */}
      <div className="bg-tertiary w-full rounded-2xl p-5 sm:w-[300px]">
        <div className="relative h-[230px] w-full">
          <img src={image} alt={name} className="h-full w-full rounded-2xl object-cover" />
          <div className="card-img_hover absolute inset-0 m-3 flex justify-end">
            <div
              onClick={() => window.open(sourceCodeLink, '_blank')}
              className="black-gradient flex h-10 w-10 cursor-pointer items-center justify-center rounded-full"
            >
              <img src={github} alt="github" className="h-1/2 w-1/2 object-contain" />
            </div>
            <div
              onClick={() => window.open(live, '_blank')}
              className="black-gradient flex h-10 w-10 cursor-pointer items-center justify-center rounded-full ml-5"
            >
              <img
                src={google}
                alt="github"
                className="h-1/2 w-1/2 object-contain rounded-full"
              />
            </div>
          </div>
        </div>
        <div className="mt-5">
          <h3 className="text-[24px] font-bold text-white">{name}</h3>
          <p className="text-secondary mt-2 text-[14px]">{description}</p>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map(tag => (
            <p key={tag.name} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </div>
      {/* </Tilt>
      </motion.div> */}
    </div>
  );
};

const Works = () => {
  return (
    <>

      <p className={styles.sectionSubText}>{config.sections.works.p}</p>
      <h2 className={styles.sectionHeadText}>{config.sections.works.h2}</h2>

      <p>{config.sections.works.content}</p>

      <div>
        <p className="mt-5 text-red-500">
          Source code or demo link may be private of some projects because of some privacy concern !
        </p>
      </div>

      <div className="mt-10 flex flex-wrap gap-5">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, '');
