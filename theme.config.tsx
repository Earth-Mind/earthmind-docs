import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

import { PROJECT_CONFIG } from "./constants";

const config: DocsThemeConfig = {
    logo: <span>{PROJECT_CONFIG.name}</span>,
    project: {
        link: PROJECT_CONFIG.repository,
    },
    chat: {
        link: PROJECT_CONFIG.discord,
    },
    docsRepositoryBase: PROJECT_CONFIG.repository,
    footer: {
        text: PROJECT_CONFIG.footer,
    },
}

export default config