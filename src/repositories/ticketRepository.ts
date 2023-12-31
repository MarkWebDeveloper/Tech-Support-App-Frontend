export default class TicketRepository {

    uri = import.meta.env.VITE_API_ENDPOINT_TICKETS

    async getAll() {

        try {
            const response = await fetch(this.uri) 
            const data = await response.json()
            return data
        } catch (error) {
            throw new Error('Error occured during API fetch GET request')
        }
    }

    async deleteById(id: number) {
        
        try {
            const response = await fetch(this.uri + '/' + id, {
                method: 'DELETE',
              });
              const text = await response.text();
              console.log(text);
        } catch (error) {
            throw new Error('Error occured during API fetch DELETE request')
        }
      }

    async create(data: Object) {

        try {
            const response = await fetch(this.uri, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            });
            const text = await response.text();
            console.log(text);
        }   catch (error) {
            throw new Error('Error occured during API fetch POST request')
        }
    }

}