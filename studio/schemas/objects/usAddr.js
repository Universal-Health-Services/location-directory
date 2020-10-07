export default {
    title: 'US Address',
    name: 'usAddr',
    type: 'object',
    fields: [
        {
            name: 'street',
            type: 'string'
        },
        {
            name: 'street2',
            type: 'string',
            description: `optional`
        },
        {
            name: 'city',
            type: 'string'
        },
        {
            name: 'state',
            type: 'string',
            options: {
                list: [
                    {title: 'Alabama', value: 'al'},
                    {title: 'Alaska', value: 'ak'},
                    {title: 'Arizona', value: 'az'},
                    {title: 'Arkansas', value: 'ar'},
                    {title: 'California', value: 'ca'},
                    {title: 'Colorado', value: 'co'},
                    {title: 'Connecticut', value: 'ct'},
                    {title: 'Delaware', value: 'de'},
                    {title: 'District Of Columbia', value: 'dc'},
                    {title: 'Florida', value: 'fl'},
                    {title: 'Georgia', value: 'ga'},
                    {title: 'Hawaii', value: 'hi'},
                    {title: 'Idaho', value: 'id'},
                    {title: 'Illinois', value: 'il'},
                    {title: 'Indiana', value: 'in'},
                    {title: 'Iowa', value: 'ia'},
                    {title: 'Kansas', value: 'ks'},
                    {title: 'Kentucky', value: 'ky'},
                    {title: 'Louisiana', value: 'la'},
                    {title: 'Maine', value: 'me'},
                    {title: 'Maryland', value: 'md'},
                    {title: 'Massachusetts', value: 'ma'},
                    {title: 'Michigan', value: 'mi'},
                    {title: 'Minnesota', value: 'mn'},
                    {title: 'Mississippi', value: 'ms'},
                    {title: 'Missouri', value: 'mo'},
                    {title: 'Montana', value: 'mt'},
                    {title: 'Nebraska', value: 'ne'},
                    {title: 'Nevada', value: 'nv'},
                    {title: 'New Hampshire', value: 'nh'},
                    {title: 'New Jersey', value: 'nj'},
                    {title: 'New Mexico', value: 'nm'},
                    {title: 'New York', value: 'ny'},
                    {title: 'North Carolina', value: 'nc'},
                    {title: 'North Dakota', value: 'nd'},
                    {title: 'Ohio', value: 'oh'},
                    {title: 'Oklahoma', value: 'ok'},
                    {title: 'Oregon', value: 'or'},
                    {title: 'Pennsylvania', value: 'pa'},
                    {title: 'Puerto Rico', value: 'pr'},
                    {title: 'Rhode Island', value: 'ri'},
                    {title: 'South Carolina', value: 'sc'},
                    {title: 'South Dakota', value: 'sd'},
                    {title: 'Tennessee', value: 'tn'},
                    {title: 'Texas', value: 'tx'},
                    {title: 'Utah', value: 'ut'},
                    {title: 'Vermont', value: 'vt'},
                    {title: 'Virgin Islands', value: 'vi'},
                    {title: 'Virginia', value: 'va'},
                    {title: 'West Virginia', value: 'wv'},
                    {title: 'Wisconsin', value: 'wi'},
                    {title: 'Wyoming', value: 'wy'}
                ],
                layout: 'dropdown',
            }
        },
        {
            name: 'zip',
            type: 'string'
        },
    ],
    preview: {
        select: {
            s: 'street',
            c: 'city',
            sta: 'state',
        },
        prepare({ s, c, sta}) {
            const t=`${s}`
            const st=`${c}`+`, `+`${sta}`
            return {
                title: t,
                subtitle: st
            }
        }
    }
}