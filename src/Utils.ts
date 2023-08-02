export default abstract class Utils{

   public static getRandomLetter(){
      return 'abcdefghijklmnopqrstuvwxyz'.charAt(Math.floor(Math.random() * 26))
   }
}