import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Salvium",
  description: "Privacy-First Blockchain Protocol",
  base: '/new-docs/',
  srcDir: '.',
  outDir: './.vitepress/dist',
  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: 'salvium_coin_circle_white_solid.svg' }]
  ],
  themeConfig: {
    logo: 'salvium_coin_circle_white_solid.svg',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Project', link: '/project/' },
      { text: 'Protocol', link: '/protocol/' },
      { text: 'Wallets', link: '/wallets/' }
    ],
    
    sidebar: {
      '/project/': [
        {
          text: 'Project',
          items: [
            { text: 'What is Salvium', link: '/project/what-is-salvium' },
            { text: 'Get Started', link: '/project/get-started' },
            { text: 'Litepaper', link: '/project/litepaper' },
            { text: 'Roadmap', link: '/project/roadmap' },
            { text: 'Team & History', link: '/project/team-history' },
            { text: 'Audits', link: '/project/audits' },
            { text: 'Compliance', link: '/project/compliance' },
            { text: 'Treasury Report', link: '/project/treasury-report' },
            { text: 'Token Allocation', link: '/project/token-allocation' },
            { text: 'Get Involved', link: '/project/get-involved' }
          ]
        }
      ],
      '/protocol/': [
        {
          text: 'Protocol',
          items: [
            { text: 'Overview', link: '/protocol/overview' },
            { text: 'Technical Specs', link: '/protocol/technical-specs' },
            { text: 'Security', link: '/protocol/security' }
          ]
        }
      ],
      '/wallets/': [
        {
          text: 'Wallets',
          items: [
            { text: 'Overview', link: '/wallets/overview' },
            { text: 'CLI Wallet', link: '/wallets/cli-wallet' },
            { text: 'GUI Wallet', link: '/wallets/gui-wallet' },
            { text: 'Exchange Mode', link: '/wallets/exchange-mode' }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/salvium' }
    ],

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright 2024-present Salvium'
    }
  }
})
