// export default function Header() {
//   return (
//     <header className="bg-white text-black shadow-md py-4 px-6">
//       <div className="max-w-5xl mx-auto flex justify-between items-center">
//         <h1 className="text-2xl font-bold">Recipe React App</h1>
//         <nav>
//           <ul className="flex gap-6">
//             <li>
//               <a href="/" className="hover:underline">
//                 Home
//               </a>
//             </li>
//             <li>
//               <a href="/recipes" className="hover:underline">
//                 Recipes
//               </a>
//             </li>
//           </ul>
//         </nav>
//       </div>
//     </header>
//   );
// }
import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-orange-400 to-amber-400 text-white shadow-lg">
      <div className="max-w-5xl mx-auto flex justify-between items-center py-4 px-6">

        {/* Logo / Title */}
        <h1 className="text-2xl font-bold tracking-wide">
          🍽 Recipe App
        </h1>

        {/* Navigation */}
        <nav>
          <ul className="flex gap-6 font-medium">
            <li>
              <Link
                href="/"
                className="hover:text-yellow-200 transition"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/recipes"
                className="hover:text-yellow-200 transition"
              >
                Recipes
              </Link>
            </li>
          </ul>
        </nav>

      </div>
    </header>
  );
}
