import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
export default function RecipeRow({ recipe, setDeleteRecipe }) {
  return (
    <tr>
      <th>{recipe?.id}</th>
      <td>{recipe?.title}</td>
      <td>{recipe?.price}</td>
      <td>{recipe?.category}</td>
      <td className="flex gap-4">
        <Link to={`/dashboard/edit-recipe/${recipe?.id}`} className="btn btn-xs btn-neutral">
          Edit
        </Link>

        <button
          className="btn btn-xs btn-error"
          onClick={() => {
            setDeleteRecipe(recipe);
            document.getElementById("my_modal_5").showModal();
          }}
        >
          delete
        </button>

        {/* <button className="btn btn-xs btn-error">Delete</button> */}
      </td>
    </tr>
  );
}
