export interface EventsCardProps {
  id: number;
  title: string;
  description: string;
  duration: string;
  image: string;
  platform: string;
  start_date: string;
  type: string;
  speakers: ISpeakers[];
}

interface ISpeakers {
  id: number;
  name: string;
  title: string;
  image: string;
  description: string;
}
