// const
// persianNumbers = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"],
// arabicNumbers  = ["٠", "١", "٢", "٣", "٤", "٥", "٦", "٧", "٨", "٩"],
// ToPersionDigits = function (str)
// {
//   if(typeof str === 'string')
//   {
//     for(let i=0; i<10; i++)
//     {
//       str = str.replace(persianNumbers[i], i).replace(arabicNumbers[i], i);
//     }
//   }
//   return str;
// };
// export default ToPersionDigits



export function toPersianDigits(n){
  const farsiDigits=["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"]
  return n.toString().replace(/\d/g,(x)=>farsiDigits[parseInt(x)])
}