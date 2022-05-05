export interface Resume {
  firstName: string;
  lastName: string;
  profilePic: string;
  title: string;
  about: string;
  dob: {
    date: number;
    month: number;
    year: number;
  };
  email: string;
  country: string;
  city: string;
  address: string;
  phone: string;
  social_profiles: {
    website: string;
    linkedin: string;
    github: string;
    twitter: string;
    quora: string;
    skype: string;
    stackoverflow: string;
    reddit: string;
    facebook: string;
    connect: string;
    medium: string;
    instagram: string;
  };
  experiences: [
    {
      position: string;
      company: string;
      from: string;
      to: string;
      location: string;
      company_description: string;
      achievements: string[];
      contact: {
        contact_person: string;
        contact_info: string;
      };
    }
  ];
  projects: [
    {
      project_name: string;
      from: string;
      to: string;
      achievements: string[];
    }
  ];
  languages: [
    {
      language_name: string;
      rating: number; //max 5
    }
  ];
  skills: [
    {
      skill: string;
      rating: number;
    }
  ];
  education: [
    {
      course_name: string;
      institution: string;
      from: string;
      to: string;
      location: string;
      projects?: string[];
      courses?: string[];
    }
  ];
  references: [
    {
      name: string;
      position: string;
      reference_description: string;
      contact: {
        contact_info: string[];
      };
    }
  ];
  soft_skills: [
    {
      skill: string;
      rating: number;
    }
  ];
  awards: [
    {
      title: string;
      from: string;
      to: string;
      issued_by: string;
      description: string[];
    }
  ];
  achievements: [
    {
      title: string;
      from: string;
      to: string;
      description: string[];
    }
  ];
  certifications: [
    {
      name: string;
      from: string;
      to: string;
      issuer: string;
      description: string[];
    }
  ];
  interests: string[];
  organizations: [
    {
      name: string;
      from: string;
      to: string;
      role: string;
    }
  ];
  volunteer_experiences: [
    {
      position: string;
      organization: string;
      from: string;
      to: string;
      location: string;
      organization_description: string;
      achievements: string[];
      contact: {
        contact_person: string;
        contact_info: string;
      };
    }
  ];
  publications: [
    {
      type: string;
      title: string;
      authors: string[];
      publication_date: string;
      publisher: string;
      description: string[];
    }
  ];
}
