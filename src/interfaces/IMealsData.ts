import IArea from "./IArea";
import ICategory from "./ICategory";
import IIngredient from "./IIngredient";
import IMeal from "./IMeal";

export default interface IMealsData{
   categories: ICategory[]
   areas: IArea[]
   ingredients: IIngredient[]
   trending: IMeal[]
}