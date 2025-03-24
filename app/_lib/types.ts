export interface Event {
  id: string;
  name: string;
  description: string;
  location: string;
  date: string;
  time: string;
  images: string[];
  items: Array<{
    item: string;
    cost: string;
  }>;
}
