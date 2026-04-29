-- ============================================
-- Top Hat Cleaners — Supabase Setup
-- Run this in your Supabase SQL Editor:
-- Dashboard → SQL Editor → New Query → Paste this → Run
-- ============================================

CREATE TABLE IF NOT EXISTS bookings (
  id TEXT PRIMARY KEY,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  status TEXT DEFAULT 'pending',

  -- Client info
  client_name TEXT NOT NULL,
  client_phone TEXT,
  client_email TEXT,
  contact_method TEXT,

  -- Property
  address TEXT NOT NULL,
  property_type TEXT,
  bedrooms TEXT,
  bathrooms TEXT,
  square_footage TEXT,
  access_method TEXT,
  access_code TEXT,
  pets TEXT,

  -- Service
  service_type TEXT,
  frequency TEXT,
  service_date DATE,
  service_time TEXT,
  notes TEXT
);

-- Enable Row Level Security
ALTER TABLE bookings ENABLE ROW LEVEL SECURITY;

-- Allow anyone to submit a booking (public form)
CREATE POLICY "Public can submit bookings"
ON bookings FOR INSERT
TO anon
WITH CHECK (true);

-- Only authenticated users (you, the admin) can view/update/delete
CREATE POLICY "Authenticated can view bookings"
ON bookings FOR SELECT TO authenticated USING (true);

CREATE POLICY "Authenticated can update bookings"
ON bookings FOR UPDATE TO authenticated USING (true);

CREATE POLICY "Authenticated can delete bookings"
ON bookings FOR DELETE TO authenticated USING (true);

-- Indexes for fast queries
CREATE INDEX IF NOT EXISTS idx_bookings_service_date ON bookings(service_date);
CREATE INDEX IF NOT EXISTS idx_bookings_status ON bookings(status);
CREATE INDEX IF NOT EXISTS idx_bookings_created ON bookings(created_at DESC);

-- ============================================
-- DONE.
-- Next steps:
-- 1. Go to Authentication → Users → Add user
-- 2. Use your email + a strong password
-- 3. That's the account you'll use to log into admin.html
-- ============================================
