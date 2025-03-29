export const blogType = {
    name: 'blog',
    type: 'document',
    title: 'Blog',
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'Title of Blog article'
        },
        {
            name: 'smallDescription',
            type: 'text',
            title: 'Small Description',
        },        
        {
            name: 'slug',
            type: 'slug',
            title: 'Slug',
            options: {
                source: 'title',
            }
        },
        {
            name: 'titleImage',
            type: 'image',
            title: 'Title Image',
        },        
        {
            name: 'content',
            type: 'array',
            title: 'Content',
            of: [{ type: 'block' }]
        },
        {
            name: 'publishedAt',
            type: 'datetime',
            title: 'Published At'
        }
    ],
}