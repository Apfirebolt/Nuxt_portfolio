import { defineEventHandler } from 'h3'
import { $fetch } from 'ofetch'

export default defineEventHandler(async (event) => {
    
    // define a GET method to list all projects
    if (event.node.req.method === 'GET') {
        const response = await $fetch('https://softgenie.org/api/gallery')
        return response
    }
})
