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
    <Experience key='experiences' />
  ) : el === 'projects' ? (
    <Projects key='projects' />
  ) : el === 'educations' ? (
    <Education key='educations' />
  ) : el === 'volunteers' ? (
    <Volunteer key='volunteers' />
  ) : el === 'organizations' ? (
    <Organization key='organizations' />
  ) : el === 'achievements' ? (
    <Achievements key='achievements' />
  ) : el === 'awards' ? (
    <Awards key='awards' />
  ) : el === 'publications' ? (
    <Publications key='publications' />
  ) : el === 'interests' ? (
    <Interests key='interests' />
  ) : el === 'languages' ? (
    <Languages key='languages' />
  ) : el === 'skills' ? (
    <Skills key='skills' />
  ) : el === 'references' ? (
    <References key='references' />
  ) : null;
};

export default layoutElement;
