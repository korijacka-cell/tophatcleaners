<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8"/>
<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
<title>Book Online | Top Hat Cleaners San Antonio</title>
<meta name="description" content="Book your cleaning service online. Online bookings available 14+ days out. Call or text for sooner availability."/>
<meta name="google-site-verification" content="YOUR_VERIFICATION_CODE_HERE"/>
<link rel="canonical" href="/book.html"/>
<link rel="icon" type="image/png" href="img/logo.png"/>
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,800;1,400;1,600&family=DM+Sans:wght@300;400;500;600;700&display=swap" rel="stylesheet"/>
<link rel="stylesheet" href="styles.css"/>
</head>
<body>

<nav class="nav">
  <a href="index.html" class="nav-brand"><img src="img/logo.png" alt="Top Hat Cleaners logo"/><div class="nav-brand-text">Top Hat Cleaners<span>San Antonio, TX</span></div></a>
  <div class="nav-links">
    <a href="index.html" class="nav-link hide-sm">Home</a>
    <a href="services.html" class="nav-link">Services</a>
    <a href="index.html#gallery" class="nav-link hide-sm">Our Work</a>
    <a href="book.html" class="nav-cta">Book Now</a>
  </div>
</nav>

<section style="text-align:center;padding:50px 22px 30px;">
  <div class="wrap wrap-sm">
    <div class="tag-label">Book Online</div>
    <h1 class="h1">Schedule Your <em>Cleaning</em></h1>
    <p class="muted" style="font-size:15px;margin-top:12px;">Online bookings available 14+ days out. <a href="tel:+17268889821" style="color:var(--plum);font-weight:600;">Call or text for sooner →</a></p>
  </div>
</section>

<section class="wrap wrap-sm">

  <!-- Booking form (visible by default) -->
  <form id="bookingForm">

    <div class="notice">
      <strong>Online bookings start 14 days out.</strong> For sooner availability, please <a href="tel:+17268889821">call or text (726) 888-9821</a>.
    </div>

    <div class="card">
      <div class="card-title">1. Choose Your Service</div>
      <div class="card-sub">Pick the level of clean that fits your needs.</div>

      <div class="field-row full">
        <div class="field">
          <label>Service Type <span class="req">*</span></label>
          <select name="service_type" required>
            <option value="">— Select a service —</option>
            <option>The Refresh — Basic Clean</option>
            <option>The Signature — Deep Clean</option>
            <option>The Fresh Start — Move-In/Out</option>
            <option>The Turnover — Airbnb</option>
            <option>The Executive — Commercial</option>
            <option>The Reveal — Post-Construction</option>
          </select>
        </div>
      </div>

      <div class="field-row full">
        <div class="field">
          <label>Frequency</label>
          <select name="frequency">
            <option>One-Time</option>
            <option>Weekly Recurring</option>
            <option>Bi-Weekly Recurring</option>
            <option>Monthly Recurring</option>
          </select>
        </div>
      </div>
    </div>

    <div class="card">
      <div class="card-title">2. Pick a Date &amp; Time</div>
      <div class="card-sub">Earliest online booking is 14 days from today.</div>

      <div class="field-row">
        <div class="field">
          <label>Preferred Date <span class="req">*</span></label>
          <input type="date" name="service_date" id="serviceDate" required/>
          <div class="field-help">Online bookings start 14 days out</div>
        </div>
        <div class="field">
          <label>Arrival Window <span class="req">*</span></label>
          <select name="service_time" required>
            <option value="">— Select a time —</option>
            <option>8:00 AM</option>
            <option>9:00 AM</option>
            <option>10:00 AM</option>
            <option>11:00 AM</option>
            <option>12:00 PM</option>
            <option>1:00 PM</option>
            <option>2:00 PM</option>
            <option>3:00 PM</option>
            <option>4:00 PM</option>
          </select>
        </div>
      </div>
    </div>

    <div class="card">
      <div class="card-title">3. Tell Us About Your Space</div>
      <div class="card-sub">This helps us prepare the right team.</div>

      <div class="field-row full">
        <div class="field">
          <label>Service Address <span class="req">*</span></label>
          <input type="text" name="address" placeholder="123 Main St, San Antonio, TX 78201" required/>
        </div>
      </div>

      <div class="field-row three">
        <div class="field">
          <label>Property Type</label>
          <select name="property_type">
            <option>House</option>
            <option>Apartment / Condo</option>
            <option>Townhouse</option>
            <option>Office</option>
            <option>Retail Space</option>
            <option>Medical / Dental</option>
            <option>Airbnb / STR</option>
            <option>Other</option>
          </select>
        </div>
        <div class="field">
          <label>Bedrooms</label>
          <select name="bedrooms">
            <option>Studio</option>
            <option>1</option>
            <option selected>2</option>
            <option>3</option>
            <option>4</option>
            <option>5+</option>
            <option>N/A</option>
          </select>
        </div>
        <div class="field">
          <label>Bathrooms</label>
          <select name="bathrooms">
            <option>1</option>
            <option>1.5</option>
            <option selected>2</option>
            <option>2.5</option>
            <option>3</option>
            <option>3.5</option>
            <option>4+</option>
          </select>
        </div>
      </div>

      <div class="field-row">
        <div class="field">
          <label>Approx. Square Footage</label>
          <input type="number" name="square_footage" placeholder="1200"/>
        </div>
        <div class="field">
          <label>Pets at Property</label>
          <select name="pets">
            <option>None</option>
            <option>Dog (friendly)</option>
            <option>Dog (will be crated)</option>
            <option>Cat</option>
            <option>Multiple pets</option>
            <option>Other</option>
          </select>
        </div>
      </div>

      <div class="field-row">
        <div class="field">
          <label>How will we get in?</label>
          <select name="access_method">
            <option>I'll be home</option>
            <option>Lockbox / Key code</option>
            <option>Hidden key</option>
            <option>Smart lock</option>
            <option>Doorman / Front desk</option>
            <option>Other</option>
          </select>
        </div>
        <div class="field">
          <label>Access Code / Notes (optional)</label>
          <input type="text" name="access_code" placeholder="Lockbox: 1234, side gate, etc."/>
        </div>
      </div>
    </div>

    <div class="card">
      <div class="card-title">4. Your Contact Information</div>
      <div class="card-sub">So we can confirm your booking within 30 minutes.</div>

      <div class="field-row">
        <div class="field">
          <label>Your Name <span class="req">*</span></label>
          <input type="text" name="client_name" placeholder="Jane Smith" required/>
        </div>
        <div class="field">
          <label>Phone Number <span class="req">*</span></label>
          <input type="tel" name="client_phone" placeholder="(210) 555-0100" required/>
        </div>
      </div>

      <div class="field-row">
        <div class="field">
          <label>Email Address <span class="req">*</span></label>
          <input type="email" name="client_email" placeholder="you@email.com" required/>
        </div>
        <div class="field">
          <label>Best Way to Reach You</label>
          <select name="contact_method">
            <option>Text (preferred)</option>
            <option>Call</option>
            <option>Email</option>
          </select>
        </div>
      </div>

      <div class="field-row full">
        <div class="field">
          <label>Anything else we should know? (optional)</label>
          <textarea name="notes" placeholder="Focus areas, problem zones, allergies, things to avoid, etc."></textarea>
        </div>
      </div>
    </div>

    <div class="card" style="text-align:center;">
      <button type="submit" class="btn btn-p btn-lg" id="submitBtn">Submit Booking Request →</button>
      <div style="font-size:12px;color:var(--muted);margin-top:14px;font-style:italic;">We'll contact you within 30 minutes during business hours to confirm.</div>
    </div>

  </form>

  <!-- Success message (hidden by default) -->
  <div id="successBox" style="display:none;">
    <div class="confirm-box">
      <div class="confirm-icon">🎩</div>
      <h2 class="h2">Booking Request Received!</h2>
      <div class="confirm-id">Booking #<span id="confirmId"></span></div>
      <p style="color:var(--mauve);font-size:15px;margin-bottom:24px;max-width:480px;margin-left:auto;margin-right:auto;line-height:1.7;">Thank you for choosing Top Hat Cleaners! We've received your request and will contact you within <strong style="color:var(--plum);">30 minutes</strong> during business hours to confirm.</p>
      <div style="display:flex;gap:10px;justify-content:center;flex-wrap:wrap;">
        <a href="tel:+17268889821" class="btn btn-s">📞 Call Us</a>
        <a href="sms:+17268889821" class="btn btn-s">💬 Text Us</a>
        <a href="index.html" class="btn btn-p">Back to Home</a>
      </div>
    </div>
  </div>

</section>

<footer class="footer">
  <img src="img/logo-dark.png" alt="" class="footer-logo"/>
  <div class="footer-name">Top Hat Cleaners</div>
  <div class="footer-tag">— Cleaning with Class —</div>
  <div class="footer-links">
    <a href="index.html">Home</a>
    <a href="services.html">Services</a>
    <a href="book.html">Book Online</a>
    <a href="mailto:tophatcleaners210@gmail.com">Email</a>
    <a href="tel:+17268889821">Call/Text</a>
  </div>
  <div class="footer-contact"><a href="mailto:tophatcleaners210@gmail.com">tophatcleaners210@gmail.com</a> · <a href="tel:+17268889821">(726) 888-9821</a></div>
  <div class="footer-divider"></div>
  <div class="footer-nap">Top Hat Cleaners · San Antonio, TX · (726) 888-9821</div>
</footer>

<!-- Supabase client (small, ~30 KB) -->
<script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2"></script>
<script src="config.js"></script>
<script>
// Set min date on the date picker (14 days from today)
const minDate = new Date();
minDate.setDate(minDate.getDate() + 14);
document.getElementById('serviceDate').min = minDate.toISOString().split('T')[0];

// Submit handler
document.getElementById('bookingForm').addEventListener('submit', async function(e) {
  e.preventDefault();
  const btn = document.getElementById('submitBtn');
  btn.disabled = true;
  btn.textContent = 'Submitting...';

  // Collect form data
  const formData = new FormData(e.target);
  const booking = Object.fromEntries(formData);
  booking.id = 'TH-' + Date.now().toString().slice(-8) + '-' + Math.floor(Math.random() * 999);
  booking.status = 'pending';

  // Initialize Supabase
  if (!window.SUPABASE_CONFIG || window.SUPABASE_CONFIG.url === 'YOUR_SUPABASE_URL_HERE') {
    alert('Booking system not configured yet. Please call (726) 888-9821 to book.');
    btn.disabled = false;
    btn.textContent = 'Submit Booking Request →';
    return;
  }
  const supabase = window.supabase.createClient(window.SUPABASE_CONFIG.url, window.SUPABASE_CONFIG.anonKey);

  // Submit to Supabase
  const { error } = await supabase.from('bookings').insert([booking]);

  if (error) {
    console.error('Submission error:', error);
    alert('Sorry, something went wrong. Please call us at (726) 888-9821 to book directly.');
    btn.disabled = false;
    btn.textContent = 'Submit Booking Request →';
    return;
  }

  // Show success
  document.getElementById('confirmId').textContent = booking.id;
  document.getElementById('bookingForm').style.display = 'none';
  document.getElementById('successBox').style.display = 'block';
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
</script>

</body>
</html>
