export interface DataApiResponse {
  id: number;
  sprites: {
    other: {
      dream_world: {
        front_default: string;
      };
    };
  };
  name: string;
  types: {
    type: {
      name: string;
    };
  }[];
  stats: {
    base_stat: number;
    stat: {
      name: string;
      url: string;
    };
  }[];
  moves: string[];
}

export interface DataItem {
  id: number;
  src: string;
  name: string;
  types: string;
  stats: {
    base_stat: number;
    stat: {
      name: string;
      url: string;
    };
  }[];
  movies: number;
}
