export interface Subcategory {
  name: string | undefined;
  intro: string;
}

export type Component = {
  category: string;
  subcategories: Subcategory[] | undefined; //TODO: Type this better
};
