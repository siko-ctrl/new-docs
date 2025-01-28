import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Salvium",
  description: "Privacy-First Blockchain Protocol",
  base: '/new-docs/',
  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/new-docs/salvium_coin_circle_white_solid.svg' }]
  ],
  themeConfig: {
    logo: '/new-docs/salvium_coin_circle_white_solid.svg',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Project', 
        items: [
          { text: 'Get Started', link: '/project/get-started' },
          { text: 'Litepaper', link: '/project/litepaper' },
          { text: 'Roadmap', link: '/project/roadmap' }
        ]
      },
      { text: 'Protocol', 
        items: [
          { text: 'Overview', link: '/protocol/overview' },
          { text: 'Privacy', link: '/protocol/privacy' },
          { text: 'Smart Contracts', link: '/protocol/smart-contracts' },
          { text: 'Security', link: '/protocol/security' },
          { text: 'Daemon RPC', link: '/protocol/daemon-rpc' }
        ]
      },
      { text: 'Wallets', link: '/wallets/overview' }
    ],
    sidebar: {
      '/project/': [
        {
          text: 'Project',
          items: [
            { text: 'Get Started', link: '/project/get-started' },
            { text: 'Litepaper', link: '/project/litepaper' },
            { text: 'Roadmap', link: '/project/roadmap' }
          ]
        }
      ],
      '/protocol/': [
        {
          text: 'Protocol',
          items: [
            { text: 'Overview', link: '/protocol/overview' },
            { text: 'Privacy', link: '/protocol/privacy' },
            { text: 'Smart Contracts', link: '/protocol/smart-contracts' },
            { text: 'Security', link: '/protocol/security' },
            { text: 'Daemon RPC', link: '/protocol/daemon-rpc' }
          ]
        }
      ],
      '/wallets/': [
        {
          text: 'Wallets',
          items: [
            { text: 'Overview', link: '/wallets/overview' },
            { text: 'Desktop Wallet', link: '/wallets/desktop' },
            { text: 'Mobile Wallet', link: '/wallets/mobile' },
            { text: 'Web Wallet', link: '/wallets/web' }
          ]
        }
      ]
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/salvium-official' },
      { icon: 'discord', link: 'https://discord.gg/salvium' },
      { icon: 'twitter', link: 'https://twitter.com/salvium' }
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright 2024-present Salvium'
    }
  },
  vite: {
    resolve: {
      alias: {
        '@images': '/public'
      }
    }
  }
})
