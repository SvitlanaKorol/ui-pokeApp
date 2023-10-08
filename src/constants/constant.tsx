export const API_URL = 'https://pokeapi.co/api/v2/pokemon?limit=84';
export const IMG_URL =
  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/';

export const LOGO_URL = 'https://pokeapi.co/';

export const ITEM_DESCRIPTION = {
  itemTittle: 'Information for pokemon with id :',
  itemName: 'Name:',
  itemStats: 'Stats:',
  itemTotalMoves: 'Total moves:',
} as const;

export const ITEMS_PER_PAGE = 12;

export const ALT_IMG_NAMES = {
  alt_logo: 'Poke logo',
} as const;

export const LABEL_NAMES = {
  filter_by_type: 'Filter by Type:',
} as const;

export const OPTION_NAMES = {
  by_default: 'all types',
} as const;

export const LINKS_NAMES = {
  homeLink: 'Home',
} as const;
export const BUTTON_NAMES = {
  previousButton: 'Previous',
  nextButton: 'Next',
  previewButton: 'View details',
} as const;

export const TEXT_DESC = {
  pageText: 'Page',
  ofText: 'of',
} as const;
