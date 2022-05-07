module.exports = {
  // Basic site information (required)
  name: 'dhruv97sharma.github.io',
  domain: 'dhruv97sharma.github.io',
  url: 'https://dhruv97sharma.github.io/portfolio/',
  description: 'Dhruv Sharma personal blog about life, music, programming and more.',
  fathomCode: 'TBSAIDMS',

  // SEO specific (optional)
  defaultSocialImage:
    'https://media.graphassets.com/output=format:jpg/resize=height:800,fit:max/TanAg2xSTrWaHHflJoGV',

  /* 
    Social media URLS (optional)

    - Don't have one of the socials below? You can leave the URL empty like ''.
    - As of now it's not possible to alter the icons (we might add this in a later version), 
      so please keep the icon value as is.
  */
  socials: [
    {
      name: 'Github',
      url: 'https://github.com/Dhruv97Sharma',
      icon: 'SiGithub',
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/dhruv-sharma-59082313a',
      icon: 'SiLinkedin',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/DhruvSh02991010',
      icon: 'SiTwitter',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/_dhruvsharma1997',
      icon: 'SiInstagram',
    },
    {
      name: 'Youtube',
      url: '',
      icon: 'SiYoutube',
    },
    {
      name: 'TikTok',
      url: '',
      icon: 'SiTiktok',
    },
    {
      name: 'Medium',
      url: '',
      icon: 'SiMedium',
    },
    {
      name: 'Twitch',
      url: '',
      icon: 'SiTwitch',
    },
  ],

  /* 
    Currently, it's not possible to fetch the images from the notion API.
    So until then, you can make use of the postImageSource.

    If you add this url as a link to your post, it will always get rendered as an image.
  */
  postImageSource: [
    'images.unsplash.com',
    'res.cloudinary.com',
    'dl.dropboxusercontent.com',
    'media.graphassets.com',
  ],
};
