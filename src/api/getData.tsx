import axios, { AxiosResponse } from 'axios';
import { API_URL } from '../constants/constant';
import { DataItem, DataApiResponse } from '../types/types';

export const mapPokemonData = (data: DataApiResponse): DataItem => {
  return {
    id: data.id,
    src: data.sprites?.other?.dream_world?.front_default || '',
    name: data.name,
    types: data.types?.[0]?.type?.name || '',
    stats: data.stats || [],
    movies: data.moves.length || 0,
  };
};

export const fetchDataFromApi = async (endpoint: string): Promise<DataItem[]> => {
  try {
    const response: AxiosResponse<{ results: { url: string }[] }> = await axios.get(
      `${API_URL}${endpoint}`,
    );
    const itemDataPromises = response.data.results.map(async (item) => {
      const itemResponse = await axios.get<DataApiResponse>(item.url);
      const detailedItemData = mapPokemonData(itemResponse.data);
      return detailedItemData;
    });

    return await Promise.all(itemDataPromises);
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};
