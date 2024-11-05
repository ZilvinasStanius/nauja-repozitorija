export async function getAllCategories() {
  const categoriesPromise = await fetch(
    'https://srv10.vibelink.lt/server/api/categories'
  );
  const categoriesResponse = await categoriesPromise.json();
  return categoriesResponse;
}
