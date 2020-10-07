export default {
    name: 'location',
    title: 'Locations',
    type: 'document',
    fields: [
        {
            title: 'Name',
            name: 'name',
            type: 'string',
            validation: Rule => Rule.error(`You have to define the location's name.`).required()
        },
        {
            title: 'Code',
            name: 'code',
            type: 'slug',
            description: `url friendly string, 8 characters or less.`,
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
        {
            name: 'logo',
            type: 'array',
            of: [
              {type: 'logoIMG'},
              {type: 'logoSVG'},
              {type: 'logoICON'},
            ],
        },
        {
            title: 'Address',
            name: 'address',
            type: 'array',
            of: [{type: 'usAddr'}, {type: 'ukAddr'}],
            validation: Rule => Rule.required().max(1) // https://gist.github.com/Grsmto/cc4db257d05898ca60a9572511fa9bcf
        },
        {
            name: 'phone',
            type: 'string'
        },
        {
            name: 'fax',
            type: 'string'
        },
        {
            name: 'email',
            type: 'string',
            //validation: Rule => Rule.regex( /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g)
        },
        {
            name: 'link',
            type: 'url',
            validation: Rule => Rule.uri({
                scheme: ['http', 'https']
            })
        },
        {
            name: 'geoPin',
            title: 'Geographic Point',
            type: 'geopoint'
        },
//      {
//          title: 'Healthcare Vertical',
//          name: 'vertical',
//          type: 'vert',
//      },
    ],
    orderings: [
        {
            name: 'nameAsc',
            title: 'Location Name a–>z',
            by: [
                {
                    field: 'name',
                    direction: 'asc'
                }
            ]
        },
        {
            name: 'nameDesc',
            title: 'Location Name z->a',
            by: [
                {
                    field: 'name',
                    direction: 'desc'
                }
            ]
        }
    ],
    preview: {
        select: {
            n: 'name',
            i: 'logo',
            c: 'code',
            l: 'link',
        },
        prepare({ n, i, c, l }) {
            const t=`${n}`+` (`+`${c.current}`+`)`
            const st=`${l}`
            return {
                media: i[0].asset.asset,
                title: t,
                subtitle: st
            }
        }
    }
}