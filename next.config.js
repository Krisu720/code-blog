const withNextIntl = require("next-intl/plugin")("./i18n.ts");

module.exports = withNextIntl({
  images: {
    domains: ["localhost", "images.unsplash.com", "uploadthing.com"],
  },
});
