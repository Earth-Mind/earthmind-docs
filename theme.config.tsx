import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

import { PROJECT_CONFIG } from "./constants";

const logoStyle = {
    display: "flex",
    alignItems: "center",
    fontSize: "1.45rem",
    fontWeight: "bold",
};

const config: DocsThemeConfig = {
    logo: (
        <div style={logoStyle}>
            <img height="25" width="25" src="/images/logo.png" />
            <span className="custom-header" style={{ marginLeft: "8px" }}>
                {PROJECT_CONFIG.name} Docs
            </span>
        </div>
    ),
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