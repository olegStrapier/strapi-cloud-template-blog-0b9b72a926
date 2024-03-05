module.exports = [
  'strapi::errors',
  'strapi::security',
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::logger',
  'strapi::query',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
  {
    name: "strapi::body",
    config: {
      formLimit: "2gb", // modify form body
      jsonLimit: "2gb", // modify JSON body
      textLimit: "2gb", // modify text body
      formidable: {
        maxFileSize: 2 * 1024 * 1024 * 1024, // multipart data, modify here limit of uploaded file size
      },
    },
  },
];
