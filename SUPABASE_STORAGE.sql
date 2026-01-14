-- Enable accessing objects for everyone (Public Read)
create policy "Public Access"
  on storage.objects for select
  using ( bucket_id = 'images' );

-- Enable uploading objects for authenticated users only (Admin Upload)
create policy "Authenticated Upload"
  on storage.objects for insert
  to authenticated
  with check ( bucket_id = 'images' );

-- Enable deleting/updating own objects (Optional, good for cleanup)
create policy "Authenticated Update"
  on storage.objects for update
  to authenticated
  using ( bucket_id = 'images' );
create policy "Authenticated Delete"
  on storage.objects for delete
  to authenticated
  using ( bucket_id = 'images' );
