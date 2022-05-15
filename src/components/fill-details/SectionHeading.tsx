import { useAppDispatch, useAppSelector } from '../../store/store';
import { AllActions, BlurEvent } from '../../vite-env';
import Editable from '../customs/Editable';
import SwitchCheckbox from '../customs/SwitchCheckbox';
import { LongSection } from './LongDetail';
import { MediumSection } from './MediumDetail';
import { ShortSection } from './ShortDetail';
import experiences from '../../store/resume/long-details/experiences';
import educations from '../../store/resume/long-details/educations';
import projects from '../../store/resume/long-details/projects';
import volunteers from '../../store/resume/long-details/volunteers';
import organizations from '../../store/resume/long-details/organizations';
import achievements from '../../store/resume/medium-details/achievements';
import awards from '../../store/resume/medium-details/awards';
import publications from '../../store/resume/medium-details/publications';
import interests from '../../store/resume/short-details/interests';
import languages from '../../store/resume/short-details/languages';
import references from '../../store/resume/short-details/references';
import skills from '../../store/resume/short-details/skills';

interface Props {
  section: AllActions;
  placeholder: string;
}

const SectionHeading: React.FC<Props> = ({ section, placeholder }) => {
  const dispatch = useAppDispatch();
  const { heading, beingUsed } = useAppSelector(
    ({ resume }) => resume[section]
  );
  const { setHeading, setBeingUsed } =
    section === 'achievements'
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
      : projects;
  return (
    <div className='flex justify-between items-center'>
      <Editable
        placeholder={placeholder}
        as='h2'
        className='h2 flex-grow'
        content={heading}
        onBlur={(e: BlurEvent) => dispatch(setHeading(e.target.value))}
      />
      <SwitchCheckbox onChange={() => dispatch(setBeingUsed(!beingUsed))} />
    </div>
  );
};

export default SectionHeading;
