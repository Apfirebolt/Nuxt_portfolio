import { defineEventHandler } from 'h3';

export default defineEventHandler(async (event) => {
    const { id } = event.context.params;

    if (!id) {
        return {
            statusCode: 400,
            body: { error: 'Blog ID is required' }
        };
    }

    const response = await $fetch(`https://softgenie.org/api/blogs/${id}`);
    return response;
    
});