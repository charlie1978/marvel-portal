import { getAllPaginated } from '@/modules/core/services/marvel.api-rest';
import { defaultMapper } from '@/modules/core/services';
import { mapCharacterToCard } from '@/modules/marvel-characters/services';

const domain = `characters`;

export async function getCharatersAtPage(
  page,
  itemsPerPage,
  orden,
  { mappedBy = defaultMapper, queryParams = {} }
) {
  return getAllPaginated(domain, page, orden, {
    mappedBy,
    itemsPerPage,
    ...queryParams
  });
}

export function getCharactersForGrid(page, itemsPerPage, orden) {
  return getCharatersAtPage(page, itemsPerPage, orden, {
    mappedBy: mapCharacterToCard
  });
}
