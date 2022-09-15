/** @type {import('next').NextConfig} */

module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    CLOUD_NAME: "dec2lboba",
    PRESET_NAME: "AFCAI-Uploads",
    BEARER_TOKEN:
      "c5681252b0b735f6389c0578cdabbb6880606c52e823e0ee3ba16cc089331d28936b17e3597ffab645c521dd70ca801c10a8588e6f6765fdc498db3782bd42681bcaf6014a6e0169168a3531c71e72ecb236fcb418c28f0c45743f9edfd1bef1e54af47f40b916f68cccea2a66d2fe536dde0e0ac198e9c298e12fed3c84d8a7",

    CMS_PUBLIC_URL: "https://strapi-4h0k.onrender.com",
    GQL_PUBLIC_URL:
      // "http://localhost:5000/",
      "https://afcai.fly.dev/",
  },
  images: {
    domains: [
      "res.cloudinary.com",
      "strapi-4h0k.onrender.com",
      "afcai.fly.dev",
    ],
  },
};
