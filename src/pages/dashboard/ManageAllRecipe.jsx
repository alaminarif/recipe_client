import axios from "axios";
import { useEffect, useState } from "react";
import RecipeRow from "../../components/cards/RecipeRow";
import ConfirmationModal from "../../components/shared/ConfirmationModal";
import { useQuery } from "@tanstack/react-query";

export default function ManageAllRecipe() {
  const [recipes, setRescipes] = useState();
  const [deleteRecipe, setDeleteRecipe] = useState(null);

  // const { recipe } = useQuery({
  //   queryKey: ["recipe"],
  //   queryFn: async () => {
  //     const res = await fetch("http://localhost:3000/recipes");
  //     const data = await res.json();
  //     return data;
  //   },
  // });

  useEffect(() => {
    async function load() {
      const data = await axios.get("http://localhost:3000/recipes");
      if (data?.status === 200) {
        setRescipes(data?.data);
      }
    }
    load();
  }, []);
  return (
    <div className="overflow-x-auto w-full px-16 mt-10">
      <h1 className="text-3xl mb-4">Mange All Recipe</h1>
      <table className="table table-zebra">
        {/* head */}
        <thead>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Price</th>
            <th>Category</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {recipes?.map((recipe) => (
            <RecipeRow key={recipe?.id} recipe={recipe} setDeleteRecipe={setDeleteRecipe} />
          ))}
        </tbody>
      </table>
      {deleteRecipe && <ConfirmationModal deleteRecipe={deleteRecipe} setDeleteRecipe={setDeleteRecipe}></ConfirmationModal>}
    </div>
  );
}
