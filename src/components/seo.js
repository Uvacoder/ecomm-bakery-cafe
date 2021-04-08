import * as React from "react"
import { Helmet } from 'react-helmet';
import config from "../config"

export function SEO() {
    const { site } = config
    return (
        <>
            <Helmet>
                {/* General tags */}
                <title>{site.title}</title>
                <meta name="description" content={site.description} />
                <meta name="image" content={site.image} />
                <link rel="canonical" href={site.url} />

                {/* OpenGraph tags */}
                <meta property="og:url" content={site.url} />
                <meta property="og:title" content={site.title} />
                <meta property="og:description" content={site.description} />
                <meta property="og:image" content={site.image} />

                {/* Twitter Card tags */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={site.title} />
                <meta name="twitter:description" content={site.description} />
                <meta name="twitter:image" content={site.image} />
            </Helmet>
        </>
    )
}