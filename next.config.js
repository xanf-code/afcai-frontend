/** @type {import('next').NextConfig} */

const { withAxiom } = require("next-axiom");

module.exports = withAxiom({
  reactStrictMode: true,
  swcMinify: true,
  env: {
    PHRASE: "AFCAIADMIN",
    CLOUD_NAME: "dec2lboba",
    PRESET_NAME: "AFCAI-Uploads",
    BEARER_TOKEN:
      // "1c20cd6a377158a00d1e2b793ee483ae590e9d7708c8e3be3a78696e326dac0207eff31e19a04a7aab115c8ba38f8f82773d2a3baa99465e31cea42deb42921411ca491e9d2f10de238517d1ab9b6b85ff64d14172da4d181912115dd51cafe751e2ba0d9a3067d82f34c22d74d4129aabf6c3998a09ebcb5a071a395dd92d44",
      "6d1453199d1f60d84d41eebc7aea13e808ba0e4ee4348a7a4fdb063e1ef083ad8193fa836aa1a29ffecc9350967d05640c2e934a068ded7b9f09a34a7b5e779f406db196886d7e3b8217fb9b5b31fd6e2f40f291815fe6ece8dc3e2da748c75d3c3851b0f317913d64a598b4940e5cd81a8d735ba273feaabb84de1dc73eaa40",

    CMS_PUBLIC_URL: "https://strapi-4h0k.onrender.com",
    GQL_PUBLIC_URL:
      //"http://localhost:5000/",
      //"https://fair-puce-squirrel-suit.cyclic.app/",
      "afcai.fly.dev",
  },
  images: {
    domains: [
      "res.cloudinary.com",
      "strapi-4h0k.onrender.com",
      "afcai.fly.dev",
      "fair-puce-squirrel-suit.cyclic.app",
    ],
  },
  redirects: async () => {
    return [
      {
        source: "/admin/cms",
        destination: "https://strapi-4h0k.onrender.com/admin",
        permanent: true,
      },
    ];
  },
});
