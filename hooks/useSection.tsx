import achievements from '../store/resume/medium-details/achievements';
import awards from '../store/resume/medium-details/awards';
import educations from '../store/resume/long-details/educations';
import experiences from '../store/resume/long-details/experiences';
import interests from '../store/resume/short-details/interests';
import languages from '../store/resume/short-details/languages';
import organizations from '../store/resume/long-details/organizations';
import publications from '../store/resume/medium-details/publications';
import references from '../store/resume/short-details/references';
import skills from '../store/resume/short-details/skills';
import volunteers from '../store/resume/long-details/volunteers';
import projects from '../store/resume/long-details/projects';
const useSection = (section: string) => {
  return section === 'achievements'
    ? achievements
    : section === 'awards'
    ? awards
    : section === 'educations'
    ? educations
    : section === 'experiences'
    ? experiences
    : section === 'interests'
    ? interests
    : section === 'languages'
    ? languages
    : section === 'organizations'
    ? organizations
    : section === 'publications'
    ? publications
    : section === 'references'
    ? references
    : section === 'skills'
    ? skills
    : section === 'volunteers'
    ? volunteers
    : section === 'projects'
    ? projects
    : null;
};
export default useSection;
