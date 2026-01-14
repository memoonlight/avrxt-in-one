import { redirect } from 'next/navigation';
import { createClient } from '@/utils/supabase/server';
import { getAdminDocs } from '@/app/actions/docs';
import AdminClient from './AdminClient';

export default async function DocsAdminPage() {
    const supabase = await createClient();

    const { data: { user } } = await supabase.auth.getUser();

    if (!user) {
        redirect('/docs/login');
    }

    const docs = await getAdminDocs();

    return (
        <AdminClient
            initialDocs={docs}
            userEmail={user.email || 'Admin'}
        />
    );
}
