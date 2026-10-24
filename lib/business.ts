export const business = {
  name: "Duke Auto Repair & Service",
  shortName: "Duke Auto Repair",
  siteUrl: "https://www.dukeautorepair.com",
  street: "5220 Duke St",
  city: "Alexandria",
  region: "VA",
  postalCode: "22304",
  country: "United States",
  address: "5220 Duke St, Alexandria, VA 22304, United States",
  shortAddress: "5220 Duke St, Alexandria, VA 22304",
  phoneDisplay: "+1 (703) 212-0608",
  phoneLocal: "(703) 212-0608",
  phoneInternational: "+1 703-212-0608",
  phoneE164: "+17032120608",
  phoneHref: "tel:+17032120608",
  smsHref: "sms:+17032120608",
  email: "service@dukeautorepair.com",
  emailHref: "mailto:service@dukeautorepair.com",
  hoursDisplay: "Mon–Fri: 8AM–6PM | Sat: 8AM–4PM",
  hours: [
    { days: "Monday – Friday", short: "Mon–Fri", time: "8:00 AM – 6:00 PM" },
    { days: "Saturday", short: "Sat", time: "8:00 AM – 4:00 PM" },
    { days: "Sunday", short: "Sun", time: "Closed" },
  ],
  // Content & UX Guide (revised), section 1: utility bar centre text.
  inspectionHours:
    "VA State Inspections & Emissions: Mon–Fri 8AM–6PM | Sat 8:30AM–4PM",
  saturdayInspections: "8:30 AM – 4:00 PM",
  laborRate: "$165/hr",
  paymentMethods: [
    "Debit and credit cards",
    "Contactless payments",
    "Online payments",
    "Cash",
    "Financing when available",
  ],
  // Revised guide: parts 24/24, labor 12/12; the word "Nationwide" is retired.
  warranty: {
    short: "24-Month / 24K-Mile",
    long: "24-Month / 24,000-Mile Warranty",
    parts: "24-month/24,000-mile parts warranty",
    labor: "12-month/12,000-mile labor warranty",
  },
  // Taken from the Google Business listing pin. The brief's sample schema
  // used 38.8130, -77.1350, which lands roughly a kilometre west of the shop.
  geo: { latitude: 38.8120819, longitude: -77.1225839 },
  // Shopgenie tracking link for the site's "Book an Appointment" buttons
  // (client's final comments). It resolves to the booking page tagged
  // utm_medium=website, so bookings from the site are attributed.
  bookingUrl: "https://booking.shopgenie.io/?r=23ldgo",
  googleMapsUrl: "https://www.google.com/maps?cid=6996727418227818346",
  directionsUrl:
    "https://www.google.com/maps/dir/?api=1&destination=Duke+Auto+Repair+%26+Service,+5220+Duke+St,+Alexandria,+VA+22304",
  googleMapsEmbedUrl:
    "https://www.google.com/maps?q=Duke+Auto+Repair+%26+Service,+5220+Duke+St,+Alexandria,+VA+22304&output=embed",
  googleReviewsUrl:
    "https://www.google.com/maps/place/Duke+Auto+Repair+%26+Service/@38.8120819,-77.1225839,17z/data=!4m8!3m7!1s0x89b7b234dc40aa19:0x61195e8441b47f6a!8m2!3d38.8120819!4d-77.1225839!9m1!1b1!16s%2Fg%2F1tdjxxhd?entry=ttu&g_ep=EgoyMDI2MTAxMy4wIKXMDSoASAFQAw%3D%3D",
  googlePlaceQuery:
    "Duke Auto Repair and Service, 5220 Duke St, Alexandria, VA 22304",
} as const;
