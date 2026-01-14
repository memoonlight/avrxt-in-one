export interface MeLink {
    id: string;
    name: string;
    url: string;
    icon?: string; // lucide icon name
    type: 'social' | 'external' | 'internal';
}

export interface MeConfig {
    profile: {
        handle: string;
        bio: string;
        avatarUrl: string;
        logoUrl?: string;
        bannerUrl?: string; // for gallery card
        themeColor?: string; // hex code
    };
    music: {
        title: string;
        artist: string;
        coverUrl: string;
        audioUrl: string;
    };
    links: MeLink[];
    resources: {
        id: string;
        title: string;
        url: string;
        type: 'gallery' | 'doc' | 'post';
        previewUrl?: string; // for posts
        meta?: string; // e.g. "avrxt-resend-2025"
    }[];
}

export const defaultConfig: MeConfig = {
    profile: {
        handle: "@avrxt",
        bio: "It's Just ?",
        avatarUrl: "https://objects.avrxt.in/assets/IMG_20251108_224641_264.webp",
        logoUrl: "https://cdn.avrxt.in/assets/logo-02.png",
        bannerUrl: "https://objects.avrxt.in/images/aviorxt_01.jpg",
        themeColor: "#10b981"
    },
    music: {
        title: "her",
        artist: "JVKE",
        coverUrl: "https://objects.avrxt.in/assets/ab67616d0000b273a0934c15232680a3afc9da6e.jpeg",
        audioUrl: "https://objects.avrxt.in/assets/SpotiDownloader.com%20-%20her%20-%20JVKE.mp3"
    },
    links: [
        { id: '1', name: 'Instagram', url: 'https://instagram.com/avr.me', icon: 'Instagram', type: 'social' },
        { id: '2', name: 'GitHub', url: 'https://github.com/avrxt', icon: 'Github', type: 'social' },
        { id: '3', name: 'Discord', url: 'https://discord.com/users/1269352892146384957', icon: 'Discord', type: 'social' },
        { id: '4', name: 'Email', url: 'mailto:hey@avrxt.in', icon: 'Mail', type: 'social' }
    ],
    resources: [
        { id: 'r1', title: 'Visual Gallery', url: '/gallery', type: 'gallery' },
        { id: 'r2', title: 'Documentation Portal', url: '/docs', type: 'doc' },
        { id: 'r3', title: 'Rethinking Email Infrastructure', url: '/docs/avrxt-resend-2025', type: 'post', previewUrl: 'https://www.avrxt.in/assets/screenshot-zoom-analytics.webp', meta: 'avrxt-resend-2025' }
    ]
};

// Client-side helper to get/save config
export function getMeConfig(): MeConfig {
    if (typeof window === 'undefined') return defaultConfig;
    const saved = localStorage.getItem('avrxt_me_config');
    if (saved) {
        try {
            return JSON.parse(saved);
        } catch (e) {
            return defaultConfig;
        }
    }
    return defaultConfig;
}

export function saveMeConfig(config: MeConfig) {
    if (typeof window !== 'undefined') {
        localStorage.setItem('avrxt_me_config', JSON.stringify(config));
    }
}
