import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [new URL('https://cdn.prod.website-files.com/63dae19244d432799bf5baa4/63e526efa973a610da0df9e8_farley.gif'), new URL('https://cdn.prod.website-files.com/63dae19244d432799bf5baa4/665a018147f26450b8d1c326_image_2024-05-31_12-36-23.png'), new URL('https://cdn.prod.website-files.com/63dae19244d432799bf5baa4/665a014030cda3f1845a8562_image_2024-05-31_12-34-52.png'), new URL('https://cdn.prod.website-files.com/63dae19244d432799bf5baa4/665a01571b3134a64425d44a_image_2024-05-31_12-35-12-p-500.png'), new URL('https://cdn.prod.website-files.com/63dae19244d432799bf5baa4/665a01690c508b5bebac1311_image_2024-05-31_12-38-04-p-500.png'), new URL('https://cdn.prod.website-files.com/63dae19244d432799bf5baa4/665a01757508c661ca1da843_image_2024-05-31_12-35-52.png')]
  }
};

export default nextConfig;
