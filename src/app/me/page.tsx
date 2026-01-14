import { getMeConfigAction } from '@/app/actions/me';
import MeClient from './MeClient';

export const revalidate = 60; // Revalidate data every 60 seconds

export default async function MePage() {
    const config = await getMeConfigAction();

    return (
        <MeClient initialConfig={config} />
    );
}
