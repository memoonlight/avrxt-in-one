import { redirect } from 'next/navigation';
import { createClient } from '@/utils/supabase/server';
import { getMeConfigAction } from '@/app/actions/me';
import MeAdminClient from './MeAdminClient';

export default async function MeAdminPage() {
    const supabase = await createClient();

    const { data: { user } } = await supabase.auth.getUser();

    if (!user) {
        redirect('/docs/login');
    }

    const config = await getMeConfigAction();

    return (
        <MeAdminClient initialConfig={config} />
    );
}
