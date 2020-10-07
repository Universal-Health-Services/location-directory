export default {
    title: 'UK Address',
    name: 'ukAddr',
    type: 'object',
    fields: [
        {
            title: 'Building',
            name: 'building',
            type: 'string',
            description: `name of the building, optional`
        },
        {
            title: 'Street',
            name: 'street',
            type: 'string',
            description: 'building number and name of street or road, required'
        },
        {
            name: 'street2',
            type: 'string',
            description: `additional address details, optional`
        },
        {
            title: 'Post Town',
            name: 'town',
            type: 'string'
        },
        {
            title: 'Post Code',
            name: 'postcode',
            type: 'string'
        },
        {
            name: 'country',
            type: 'string',
            options: {
                list: [
                    {title: 'England', value: 'ENGLAND'},
                    {title: 'Scotland', value: 'SCOTLAND'},
                    {title: 'Wales', value: 'WALES'},
                    {title: 'Ireland', value: 'IRELAND'},
                    {title: 'Northern Ireland', value: 'NORTHERN IRELAND'}
                ],
                layout: 'dropdown',
            }
        },
    ],
    preview: {
        select: {
            s: 'street',
            pt: 'town',
            pc: 'country',
        },
        prepare({ s, pt, pc }) {
            const t=`${s}`
            const st=`${pt}`+`, `+`${pc}`
            return {
                title: t,
                subtitle: st
            }
        }
    }
}