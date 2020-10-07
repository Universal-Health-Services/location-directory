export default {
    title: 'Healthcare Verticals',
    name: 'vertical',
    type: 'document',
    fields: [
        {
            title: 'Name',
            name: 'name',
            type: 'string',
            validation: Rule => Rule.error(`You have to define the healthcare vertical's name.`).required()
        },
        {
            title: 'Code',
            name: 'code',
            type: 'slug',
            description: `url friendly string, 8 characters or less.`,
            options: {
                maxLength: 4,
            },
        },
        {
            title: 'Slug',
            name: 'slug',
            type: 'slug',
            description: `url friendly string, 95 characters or less.`,
            options: {
                source: doc => doc.name,
                maxLength: 95,
                slugify: input => input
                    .toLowerCase()
                    .replace(/\s+/g, '-')
                    .slice(0, 95)
            },
        },
    ],
    preview: {
        select: {
            n: 'name',
            c: 'code',
        },
        prepare({ n, c }) {
            const t=`${n}`+` (`+`${c.current}`+`)`
            return {
                title: t
            }
        }
    }
  }