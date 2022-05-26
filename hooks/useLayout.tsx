import Education from '../src/edit/long-details/Education';
import Experience from '../src/edit/long-details/Experience';
import Organization from '../src/edit/long-details/Organizations';
import Projects from '../src/edit/long-details/Projects';
import Volunteer from '../src/edit/long-details/Volunteers';
import Achievements from '../src/edit/medium-details/Achievements';
import Awards from '../src/edit/medium-details/Awards';
import Publications from '../src/edit/medium-details/Publications';
import Interests from '../src/edit/short-details/Interests';
import Languages from '../src/edit/short-details/Languages';
import References from '../src/edit/short-details/References';
import Skills from '../src/edit/short-details/Skills';

const layoutElement = (el: string) => {
  return el === 'experiences' ? (
    <Experience />
  ) : el === 'projects' ? (
    <Projects />
  ) : el === 'educations' ? (
    <Education />
  ) : el === 'volunteers' ? (
    <Volunteer />
  ) : el === 'organizations' ? (
    <Organization />
  ) : el === 'achievements' ? (
    <Achievements />
  ) : el === 'awards' ? (
    <Awards />
  ) : el === 'publications' ? (
    <Publications />
  ) : el === 'interests' ? (
    <Interests />
  ) : el === 'languages' ? (
    <Languages />
  ) : el === 'skills' ? (
    <Skills />
  ) : el === 'references' ? (
    <References />
  ) : null;
};

export default layoutElement;
