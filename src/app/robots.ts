import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: ['/me/admin', '/api/'],
        },
        sitemap: 'https://avrxt.in/sitemap.xml',
    };
}
