import RecipeCard from "./RecipeCard";
export default function RecipeList({ recipes }) {
  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {recipes.map((recipe) => (
        <RecipeCard key={recipe.id} recipe={recipe} />
      ))}
    </section>
  );
}
