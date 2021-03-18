const { Text, Select, Relationship } = require("@keystonejs/fields");
const { Wysiwyg } = require("@keystonejs/fields-wysiwyg-tinymce");

const postFields = {
  fields: {
    title: {
      type: Text,
      isRequired: true,
    },
    subtitle: {
      type: Text,
      isRequired: true,
    },
    body: {
      type: Wysiwyg,
      isMultiline: true,
    },
    status: {
      type: Select,
      options: [
        { value: "PUBLISHED", label: "Published" },
        { value: "UNPUBLISHED", label: "Unpublished" },
      ],
      defaultValue: "PUBLISHED",
    },
    author: {
      type: Relationship,
      ref: "User",
      many: false,
      isRequired: true,
    },
  },
};

module.exports = postFields;
