export type IdText = {
  id: string;
  text: string;
}[];

export type Profile = {
  name: string;
  title: string;
  summary: string;
  goal: string;
  details: IdText;
  btn_text: string;
};

export type Experience = {
  title: string;
  sub_heading: string;
  categories: IdText;
  items: (IdText[number] & { title: string })[];
  environtment: {
    id: string;
    title: string;
    summary: string;
  }[];
};

export type Projects = {
  heading: {
    title: string;
    summary: string;
    porpose: {
      title: string;
      summary: string;
    }[];
  };
  featured: {
    title: string;
    summary: string;
    key_feature: string[];
  }[];
  commision_projects: {
    title: string;
    summary: string;
    works: {
      title: string;
      summary: string;
      key_feature: string[];
    }[];
  };
  key_feature: string;
  tech: string;
};
