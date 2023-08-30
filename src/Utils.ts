export default abstract class Utils{

   public static getRandomLetter(): string {
      return 'abcdefghijklmnopqrstuvwxyz'.charAt(Math.floor(Math.random() * 26))
   }

   public static getRandomLetterForTrending(): string {
      return'bcefghklmprstv'.charAt(Math.floor(Math.random() * 14))
   }

   public static async loadImage(url: string): Promise<void> {
      return new Promise((resolve, reject) => {
         const image = new Image()
         image.onload = () => resolve()
         image.onerror = () => reject()
         image.src = url
      })
   }
}