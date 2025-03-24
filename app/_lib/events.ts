import { Event } from './types';

export const events: Event[] = [
  {
    id: '1',
    name: 'Mt. Kenya Hiking',
    description: 'Experience the beauty of Mt. Kenya with our guided hiking tour',
    location: 'Mt. Kenya',
    date: '2025-03-15',
    time: '06:00 AM',
    images: ['/images/mt-kenya.jpg'],
    items: [
      { item: 'hiking', cost: '5000' },
      { item: 'guide', cost: '2000' },
      { item: 'equipment', cost: '3000' }
    ]
  },
  {
    id: '2',
    name: 'Masai Mara Safari',
    description: 'Witness the incredible wildlife in Masai Mara',
    location: 'Masai Mara',
    date: '2025-03-20',
    time: '05:30 AM',
    images: ['/images/masai-mara.jpg'],
    items: [
      { item: 'safari', cost: '15000' },
      { item: 'accommodation', cost: '8000' },
      { item: 'meals', cost: '3000' }
    ]
  },
  {
    id: '3',
    name: 'Lake Naivasha Camping',
    description: 'Camp under the stars at Lake Naivasha',
    location: 'Lake Naivasha',
    date: '2025-03-25',
    time: '02:00 PM',
    images: ['/images/lake-naivasha.jpg'],
    items: [
      { item: 'camping', cost: '4000' },
      { item: 'tent', cost: '2000' },
      { item: 'activities', cost: '3000' }
    ]
  }
];
