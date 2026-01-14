-- Enable the UUID extension
create extension if not exists "uuid-ossp";

-- -----------------------------------------------------------------------------
-- 1. DOCUMENTS TABLE
-- -----------------------------------------------------------------------------

create table if not exists documents (
  id uuid default uuid_generate_v4() primary key,
  slug text not null unique,
  category text not null,
  title text not null,
  description text,
  content text,
  date text,
  color text check (color in ('blue', 'cyan', 'purple', 'green', 'orange', 'pink')),
  published boolean default false,
  author text default 'avrxt',
  tags text[],
  last_modified timestamptz default now(),
  created_at timestamptz default now()
);

alter table documents enable row level security;

create policy "Public docs are viewable by everyone"
  on documents for select
  using ( published = true );

create policy "Admins can view all docs"
  on documents for select
  to authenticated
  using ( true );

create policy "Admins can insert docs"
  on documents for insert
  to authenticated
  with check ( true );

create policy "Admins can update docs"
  on documents for update
  to authenticated
  using ( true );

create policy "Admins can delete docs"
  on documents for delete
  to authenticated
  using ( true );

create index documents_slug_idx on documents (slug);

-- -----------------------------------------------------------------------------
-- 2. ME CONFIG TABLE (Single row storage for /me page)
-- -----------------------------------------------------------------------------

create table if not exists me_config (
  id uuid default uuid_generate_v4() primary key,
  key text not null unique default 'main_config',
  data jsonb not null,
  updated_at timestamptz default now()
);

alter table me_config enable row level security;

-- Public can read the config (to render the page)
create policy "Public can read me_config"
  on me_config for select
  using ( true );

-- Only admins can update
create policy "Admins can update me_config"
  on me_config for all
  to authenticated
  using ( true );

-- Insert default row if not exists
insert into me_config (key, data)
values ('main_config', '{
    "profile": {
        "handle": "@avrxt",
        "bio": "Full Stack Developer",
        "avatarUrl": "https://github.com/shadcn.png",
        "themeColor": "#10b981"
    },
    "music": {
        "title": "Nightcall",
        "artist": "Kavinsky",
        "coverUrl": "https://i.scdn.co/image/ab67616d0000b27356c9d0cba69446d5f7c22359",
        "audioUrl": "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
    },
    "links": [],
    "resources": []
}'::jsonb)
on conflict (key) do nothing;
