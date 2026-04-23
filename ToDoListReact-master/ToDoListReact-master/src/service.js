import axios from 'axios';

const apiUrl = "https://todo-list-server-x3w3.onrender.com"; // ודאי שזה הפורט הנכון מה-Visual Studio
axios.defaults.baseURL = `${apiUrl}/items`;

// הוספת ה-Interceptor (כמו שעשינו קודם)
axios.interceptors.response.use(
  response => response,
  error => {
    console.error("API Error:", error);
    return Promise.reject(error);
  }
);

// במקום export default { ... }
const todoService = {
  getTasks: async () => {
    const result = await axios.get("");
    return result.data;
  },
  addTask: async (name) => {
    const result = await axios.post("", { name, isComplete: false });
    return result.data;
  },
  setCompleted: async (id, isComplete) => {
    await axios.put(`/${id}`, { isComplete });
    return { success: true };
  },
  deleteTask: async (id) => {
    await axios.delete(`/${id}`);
    return { success: true };
  }
};

export default todoService; // ייצוא מסודר עם שם