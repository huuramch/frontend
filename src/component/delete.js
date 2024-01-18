import axios from "axios"
import react from "react"

export const Delete = ({ factId, onDelete }) => {
    const handleAddDeleteButton = async () => {
     try {    
        await axios.delete(`https://quizapp-0hs0.onrender.com/facts/${factId}`);
        console.log("Successfully deleted")

        onDelete(factId);
    } catch (error) {
        console.error("Error deleting", error);
    }
        }
    return (
        <div>
            <button onClick={handleAddDeleteButton}>Delete</button>
        </div>
    )
}