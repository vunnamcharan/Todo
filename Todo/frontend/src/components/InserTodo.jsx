import { useState } from "react";

export function InsertTodo() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const handleAddTodo = () => {
        fetch("http://localhost:3014/todos", {
            method: "POST",
            body: JSON.stringify({
                title: title,
                description: description
            }),
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(async function(res) {
            const json = await res.json();
            alert("Todo added");
        })
        .catch(function(error) {
            console.error("Error:", error);
        });
    };

    return (
        <div>
            <input
                type="text"
                placeholder="Title"
                onChange={(e) => setTitle(e.target.value)}
            />
            <br />
            <br />
            <input
                type="text"
                placeholder="Description"
                onChange={(e) => setDescription(e.target.value)}
            />
            <br />
            <br />
            <button onClick={handleAddTodo}>Add Todo</button>
        </div>
    );
}

