export type Profile = {
  title: string;
  life_story: string[];
};

export type Time_Lines = {
  title: string;
  sub_title: string;
  lines: {
    time: string;
    title: string;
    summary: string;
  }[];
};
