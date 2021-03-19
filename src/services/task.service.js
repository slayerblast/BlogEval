import axios from "axios";
const baseUrl = "https://jsonplaceholder.typicode.com";

export default class TaskService{

    /**
     * Get list of todos
     * @returns {Promise<AxiosResponse<any>>}
     */
    static async list(limit = null){
        let call = await axios.get(`${baseUrl}/todos`);
        //Récupération des todos
        let todos = limit !== null ? call.data.slice(0, limit) : call.data;
        //Récupération des utilisateurs
        let users = await axios.get(`${baseUrl}/users`);

        //Correspondance entre les todos et les utilisateurs
        for (let task of todos) {
            for (const user of users.data) {
                if(user.id === task.userId)
                    task.user = user;
            }
        }

        return todos
        /*return todos.map(post => {
            post.user = users.data.find(user => user.id === post.userId);
            return post;
        });*/
    }

    /**
     * Create post
     * @param data
     * @returns {Promise<AxiosResponse<any>>}
     */
    static async create(data){
        return await axios.post(`${baseUrl}/todos`, data);
    }

    /**
     * Details of post
     * @param id
     * @returns {Promise<AxiosResponse<any>>}
     */
    static async details(id){
        return await axios.get(`${baseUrl}/todos/${id}`);
    }

    /**
     * Update post
     * @param id
     * @param data
     * @returns {Promise<AxiosResponse<any>>}
     */
    static async update(id, data){
        return await axios.put(`${baseUrl}/todos/${id}`, data);
    }

    /**
     * Delete one post
     * @param id
     * @returns {Promise<AxiosResponse<any>>}
     */
    static async delete(id){
        return await axios.delete(`${baseUrl}/todos/${id}`);
    }
}
