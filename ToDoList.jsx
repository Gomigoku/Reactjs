import { useState } from "react";
// import { fal } from "@fal-ai/client";
// import axios from 'axios';

export default function App() {
  const [task, setTask] = useState("");
  const [remove, setRemove] = useState([]);
  const [date, setDate] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (task.trim() && date.trim()) {
      setLoading(true);

      try {
        //  const response = await axios.post('al-ai/flux/dev',
        //  {
        //   prompt :task,
        //   n:1,
        //   size:'512x512'
        //  },
        //  {
        //   headers:{
        //     Authorization:'53c8573-3c4f-4275-b5b8-c624d0452860:c8ab925f1ad3857431e728702c047891',
        //     'Content-Type': 'application/json',
        //   },
        //  }
        //  );

        // const imageUrl = `https://source.unsplash.com/1600x900/?${encodeURIComponent(task)}`;
        const imageUrl = `https://picsum.photos/seed/${encodeURIComponent(task)}/300/200`;
        // const imageUrl = `https://robohash.org/${encodeURIComponent(task)}.png`;
        // const imageUrl = `https://placeimg.com/400/300/${encodeURIComponent(task)}`;

        setRemove([...remove, { task, date, imageUrl }]);
        setTask(""); // Clear the input after adding a task
        setDate("");
      } catch (error) {
        console.log("Error generating image:", error);
      } finally {
        setLoading(false);
      }
    }
  };

  const handleDelete = (index) => {
    const newTasks = remove.filter((_, i) => i !== index); // Remove task at index
    setRemove(newTasks);
  };

  const nowDate = new Date();

  return (
    <div>
      <h1>Todo List</h1>
      <div>
        <input
          type="text"
          value={task}
          placeholder="Add your task"
          onChange={(e) => setTask(e.target.value)} // Update input value
        />
        <span>
          <input
            type="Date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </span>
        <div>
          <button onClick={handleSubmit} disabled={loading}>
            {loading ? "Generating Image ..." : "Submit"}
          </button>
        </div>
      </div>
      <ul>
        {remove.map((t, index) => {
          const taskDate = new Date(t.date);
          const isPast = taskDate < nowDate;

          return (
            <li key={index}>
              <span>{t.task} - </span>
              <span style={{ backgroundColor: isPast ? "red" : "transparent" }}>
                {t.date}
              </span>
              <div>
                {t.imageUrl && (
                  <img src={t.imageUrl} alt="Generated" width="100" />
                )}
              </div>
              <button onClick={() => handleDelete(index)}>Delete</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
