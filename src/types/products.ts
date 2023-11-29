export type ProductType = {
  id: number; 
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
};

export type CategoryCreated = {
  label: string;
  id: number;
  checked: boolean;
};
