export interface SubcomponentItem {
  name: string | undefined;
  intro: string;
}

export type ComponentItem = {
  category: string;
  subcategories: SubcomponentItem[] | undefined; //TODO: Type this better
};
