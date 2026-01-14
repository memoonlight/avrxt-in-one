# ⚡ Supabase Integration Guide

I have successfully refactored the application to use Supabase for authentication and database storage, removing the "demo/demo" local storage system.

## 🛠️ Configuration Required

You need to connect your project to a Supabase project.

### 1. Create Supabase Project
1. Go to [database.new](https://database.new)
2. Create a new project.
3. Once ready, go to **Settings > API**.

### 2. Configure Environment Variables
Add these keys to your `.env.local` file:

```bash
NEXT_PUBLIC_SUPABASE_URL=https://your-project-url.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
```

### 3. Setup Database Schema
1. Go to the **SQL Editor** in your Supabase dashboard.
2. Open the file `SUPABASE_SETUP.sql` from your project root.
3. Copy the content and paste it into the SQL Editor.
4. Click **Run**.
   - This creates the `documents` table.
   - Enables RLS policies (Write: Admin only, Read: Public).
   - Inserts sample data.

### 4. Setup Authentication (Create Admin User)
1. Go to **Authentication > Users**.
2. Click **Add User**.
3. Create a new user with your email and password (e.g., `admin@avrxt.in`).
4. **IMPORTANT:** This user will have admin access because RLS policies allow any `authenticated` user to write. For production, you might want to create a specific `admins` table or role check, but for now, any logged-in user is an admin.

## 🚀 Usage

### Admin Access
1. Go to `/docs/admin` OR `/me/admin`.
2. You will be directed to the centralized login gateway (`/docs/login`).
3. Login with the credentials you created in Supabase.
4. Access is granted for both Documentation and Profile configuration.

### Public Access
1. Go to `/docs` for articles.
2. Go to `/me` for the dynamic profile page (requires configuration in admin first).

## 🗑️ Cleanup
I have refactored `docs-config.ts` to only contain TypeScript types. The local storage logic is completely removed.

**Status:** Ready to Deploy 🚀
