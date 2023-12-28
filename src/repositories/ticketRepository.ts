export default class TicketRepository {

    uri = import.meta.env.VITE_API_ENDPOINT_TICKETS

    async getAll() {

        try {
            const response = await fetch(this.uri) 
            const data = await response.json()
            return data
        } catch (error) {
            throw new Error('Error occured during APIs tickets table data extraction')
        }

    }

}