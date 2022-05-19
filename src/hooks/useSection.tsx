const useSection = (section: string) => {
  return section === 'achievements'
    ? require('../store/resume/long-details/achievements').default()
    : section === 'awards'
    ? require('../store/resume/long-details/awards').default()
    : section === 'educations'
    ? require('../store/resume/long-details/educations').default()
    : section === 'experiences'
    ? require('../store/resume/long-details/experiences').default()
    : section === 'interests'
    ? require('../store/resume/long-details/interests').default()
    : section === 'languages'
    ? require('../store/resume/long-details/languages').default()
    : section === 'organizations'
    ? require('../store/resume/long-details/organizations').default()
    : section === 'publications'
    ? require('../store/resume/long-details/publications').default()
    : section === 'references'
    ? require('../store/resume/long-details/references').default()
    : section === 'skills'
    ? require('../store/resume/long-details/skills').default()
    : section === 'volunteers'
    ? require('../store/resume/long-details/volunteers').default()
    : require('../store/resume/long-details/projects').default()
};
export default useSection;
