export const makers = [
    {
        name: '@electron-forge/maker-squirrel',
        config: {
            certificateFile: './cert.pfx',
            certificatePassword: process.env.CERTIFICATE_PASSWORD
        }
    }
];


export const publishers = [
    {
        name: '@electron-forge/publisher-github',
        config: {
          repository: {
            owner: 'anthony-dev-9595',
            name: 'billiarhouse'
          },
          prerelease: false,
          draft: true
        }
    }
];
  