import { defineField, defineType } from "sanity";

export default defineType({
  name: "event",
  title: "Events",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Event Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    }),

    // Images
    defineField({
      name: "image",
      title: "Event Image",
      type: "image",
      options: { hotspot: true },
      validation: (Rule) => Rule.required(),
    }),

    // Location or mail
    defineField({
      name: "mail",
      title: "Location / Mail",
      type: "string",
    }),

    // Date
    defineField({
      name: "date",
      title: "Event Date",
      type: "date",
      validation: (Rule) => Rule.required(),
    }),

    // Time
    defineField({
      name: "time",
      title: "Event Time",
      type: "string",
      description: "Example: 17:00 or 5:00 PM",
      validation: (Rule) => Rule.required(),
    }),

      defineField({
        name: "overviewTitle",
        title: "Overview Title",
        type: "string",
        description: "The big bold sentence above the paragraph",
        validation: (Rule) => Rule.required(),
      }),

      defineField({
        name: "overviewDescription",
        title: "Overview Description",
        type: "text",
        rows: 5,
        description: "Small paragraph under the overview title",
        validation: (Rule) => Rule.required(),
      }),

    defineField({
      name: "whatToExpect",
      title: "What to Expect",
      type: "array",
      of: [{ type: "string" }],
      description: "Bullet-point list",
    }),

    // WHO SHOULD ATTEND
    defineField({
      name: "whoShouldAttend",
      title: "Who Should Attend",
      type: "text",
      rows: 3,
    }),

    // ADDITIONAL DETAILS
    defineField({
      name: "additionalDetails",
      title: "Additional Details",
      type: "text",
      rows: 3,
    }),

    // RSVP TEXT
    defineField({
      name: "rsvp",
      title: "RSVP Note",
      type: "string",
    }),
  ],
});
