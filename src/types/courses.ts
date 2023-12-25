export interface CoursesCardProps {
  id: number;
  title: string;
  description: string;
  image: string;
  duration: string;
  start_date: string;
  type: string;
  new_price?: number;
  old_price: number;
  discount: string;
  learns: ILearns[];
  programs: IPrograms[];
  speakers: ISpeakers[];
}

interface ILearns {
  id: number;
  order: string;
  title: string;
  description: string;
}

interface IPrograms {
  id: number;
  title: string;
  description: string;
}

interface ISpeakers {
  id: number;
  name: string;
  title: string;
  image: string;
  description: string;
}
