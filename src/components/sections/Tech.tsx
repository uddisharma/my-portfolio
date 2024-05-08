// import { BallCanvas } from '../canvas';
import { SectionWrapper } from '../../hoc';
import { technologies } from '../../constants';

const Tech = () => {
  return (
    <div id="skills">
      <p className={'sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider'}>
        What are my strengths
      </p>
      <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
        My Skills
      </h2>
      <br />
      <br />
      <div className="flex flex-row flex-wrap justify-center gap-10">
        {technologies.map(technology => (
          <div className="h-28 w-28" key={technology.name}>
            {/* <BallCanvas icon={technology.icon} /> */}
            <div className="h-24 w-24 rounded-full bg-white p-4">
              <img
                style={{ objectFit: 'contain', height: '100%' }}
                className="flex m-auto align-middle justify-center rounded-full "
                src={technology.icon}
                alt=""
              />
            </div>
            <p className="text-xs text-center mr-5 mt-2">{technology.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Tech, 'tech');
