export default {
    title: 'Service(s)',
    name: 'services',
    type: 'object',
    fieldsets: [
        {
            name: 'kyruus',
            title: 'Kyruus',
        },
    ],
    fields: [
        {
            title: 'Scheduling ID',
            name: 'kSID',
            type: 'string',
            fieldset: 'kyruus'
        },
        {
            title: 'Tracking ID',
            name: 'kTID',
            type: 'string',
            fieldset: 'kyruus'
        },
    ],
  }