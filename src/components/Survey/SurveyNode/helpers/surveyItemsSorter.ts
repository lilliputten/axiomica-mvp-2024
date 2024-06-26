import { TSurveyOrderedItem } from 'src/entities/Survey/types';

export function surveyItemsSorter(a: TSurveyOrderedItem, b: TSurveyOrderedItem) {
  const aN = a?.orderNumber;
  const bN = b?.orderNumber;
  const noA = aN == null;
  const noB = bN == null;
  if ((noA && noB) || aN === bN) {
    return 0;
  }
  const result = noB || aN < bN ? -1 : 1;
  return result;
}

// TODO: Make tests

// Test cases (list of items with an `orderNumber` member):
// - [undefined,2,1] => [1,2,undefined]
