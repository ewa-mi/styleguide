export interface ComponentSubcategory {
  name: string | undefined;
  intro: string;
}

export type ComponentItem = {
  category: string;
  subcategories: ComponentSubcategory[] | undefined; //TODO: Type this better
};
