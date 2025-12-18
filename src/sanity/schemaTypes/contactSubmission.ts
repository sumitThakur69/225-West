// sanity/schemas/contactSubmission.ts
export default {
  name: 'contactSubmission',
  title: 'Contact Submissions',
  type: 'document',

  fields: [
    {
      name: 'firstName',
      title: 'First Name',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'lastName',
      title: 'Last Name',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'email',
      title: 'Email',
      type: 'string',
      validation: (Rule: any) => Rule.required().email(),
    },
    {
      name: 'eventType',
      title: 'Event Type of Interest',
      type: 'string',
    },
    {
      name: 'message',
      title: 'Message',
      type: 'text',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'subscribed',
      title: 'Newsletter Subscription',
      type: 'boolean',
      initialValue: false,
    },
    {
      name: 'status',
      title: 'Status',
      type: 'string',
      initialValue: 'new',
      options: {
        list: [
          { title: 'New', value: 'new' },
          { title: 'Read', value: 'read' },
          { title: 'Responded', value: 'responded' },
          { title: 'Archived', value: 'archived' },
        ],
        layout: 'radio',
      },
    },
  ],

  preview: {
    select: {
      firstName: 'firstName',
      lastName: 'lastName',
      email: 'email',
      eventType: 'eventType',
      status: 'status',
      createdAt: '_createdAt',
    },
    prepare({ firstName, lastName, email, eventType, status, createdAt }: any) {
      return {
        title: `${firstName} ${lastName}`,
        subtitle: `${email} • ${eventType || 'General'} • ${new Date(createdAt).toLocaleDateString()}`,
      }
    },
  },

  orderings: [
    {
      title: 'Newest First',
      name: 'newestFirst',
      by: [{ field: '_createdAt', direction: 'desc' }],
    },
    {
      title: 'By Status',
      name: 'statusOrder',
      by: [
        { field: 'status', direction: 'asc' },
        { field: '_createdAt', direction: 'desc' },
      ],
    },
  ],
}
