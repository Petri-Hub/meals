import Utils from '../Utils'
import IArea from '../interfaces/IArea'
import ICategory from '../interfaces/ICategory'
import IIngredient from '../interfaces/IIngredient'
import IMeal from '../interfaces/IMeal'
import IMealReference from '../interfaces/IMealReference'
import IMealsData from '../interfaces/IMealsData'

export default abstract class Api {
   private static TOKEN = '1'
   private static BASE_URL = 'https://www.themealdb.com/api/json/v1/'

   public static async getData(): Promise<IMealsData> {
      try {
         const [categories, ingredients, areas, trending] = await Promise.all([
            Api.getAllCategories(),
            Api.getAllIngredients(),
            Api.getAllAreas(),
            Api.getMealsStartingWith(Utils.getRandomLetterForTrending()),
         ])

         return {
            categories,
            ingredients,
            areas,
            trending,
         }
      } catch (error) {
         return {
            categories: [],
            ingredients: [],
            areas: [],
            trending: [],
         }
      }
   }

   public static async getMealByID(id: string): Promise<IMeal | null> {
      try {
         const response = await Api.fetchJSON<{ meals: IMeal[] }>(
            Api.getBaseURL() + `lookup.php?i=${id}`,
         )
         const meal = response.meals[0]

         return meal
      } catch (error) {
         console.error(error)
         return null
      }
   }

   public static async getMealsByCategory(category: string): Promise<IMealReference[]> {
      try {
         const response = await Api.fetchJSON<{ meals: IMealReference[] }>(
            Api.getBaseURL() + `filter.php?c=${category}`,
         )
         const meals = response.meals ?? []

         return meals
      } catch (error) {
         console.error(error)
         return []
      }
   }

   public static async getAllCategories(): Promise<ICategory[]> {
      try {
         const response = await Api.fetchJSON<{ categories: ICategory[] }>(
            Api.getBaseURL() + 'categories.php',
         )
         const categories = response.categories ?? []

         return categories
      } catch (error) {
         console.error(error)
         return []
      }
   }

   public static async getAllAreas(): Promise<IArea[]> {
      try {
         const response = await Api.fetchJSON<{ meals: IArea[] }>(
            Api.getBaseURL() + 'list.php?a=list',
         )
         const areas = response.meals ?? []

         return areas
      } catch (error) {
         console.error(error)
         return []
      }
   }

   public static async getAllIngredients(): Promise<IIngredient[]> {
      try {
         const response = await Api.fetchJSON<{ meals: IIngredient[] }>(
            Api.getBaseURL() + 'list.php?i=list',
         )
         const ingredients = response.meals ?? []

         return ingredients
      } catch (error) {
         console.error(error)
         return []
      }
   }

   public static async getMealsStartingWith(letter: string): Promise<IMeal[]> {
      try {
         const response = await Api.fetchJSON<{ meals: IMeal[] }>(
            Api.getBaseURL() + 'search.php?f=' + letter,
         )
         const meals = response.meals ?? []

         return meals
      } catch (error) {
         console.error(error)
         return []
      }
   }

   private static getBaseURL(): string {
      return Api.BASE_URL + Api.TOKEN + '/'
   }

   private static async fetchJSON<T>(url: string): Promise<T> {
      return await fetch(url).then((res) => res.json())
   }
}
