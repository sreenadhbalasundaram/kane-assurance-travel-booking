# PRD: StayNest Travel Booking

**Product:** StayNest Web Application
**Version:** 1.0
**Last Updated:** September 2026

## Overview

StayNest is a travel and stays booking demo for discovering homes, rooms, and apartments in India. This PRD defines the public browsing and reservation journey used by the deployed demo at `https://my-testing-repo-main.vercel.app/travel-clone-app`.

## User Journey

A visitor can browse grouped listings, open a listing detail page, review the booking price, select a payment method in StayPay, and receive a booking confirmation. Authentication is not required for this demo.

## Functional Requirements

### FR-1: Homes Listing

The homes page is available at `/travel-clone-app`. It must display the StayNest header with Homes, Experiences, and Services navigation, a destination/date/guest search presentation, grouped listing sections, and a footer.

The listing groups are:
- Popular homes in Noida
- Available in Gurgaon District this weekend
- Stay in Dehradun
- Available next month in North Goa
- Homes in Rishikesh

Each listing card shows a title, location context, nightly-stay price for two nights, rating, guest-favourite badge when applicable, and a link to `/travel-clone-app/rooms/{listingId}`. The page also shows the categories Cultural tours, Landmarks, Food tours, Art workshops, Cooking, Outdoors, Shopping, Wellness, and Museums.

### FR-2: Room Details

A valid room URL `/travel-clone-app/rooms/{listingId}` must show the listing title, image gallery, property type and city, beds, baths, rating and review count, amenities, description, and a booking card.

The booking card displays check-in `8/21/2026`, checkout `8/23/2026`, one guest, the two-night price, and a `Reserve` action. The `Reserve` action must navigate to `/travel-clone-app/book/{listingId}`. Invalid listing IDs must not expose a booking action and must provide a way back to the homes page.

### FR-3: Booking Review

The booking review page `/travel-clone-app/book/{listingId}` must show a `Confirm and pay` back link, `Proceed to payment` heading, StayPay handoff explanation, and `Continue to StayPay` action.

Price details must include:
- Two-night base price
- Special offer discount equal to 20% of the base price
- Taxes equal to 5% of the discounted price
- Total equal to discounted price plus taxes
- A visible discount-applied message

The Continue to StayPay action navigates to `/travel-clone-app/pay/{listingId}`.

### FR-4: StayPay Payment Selection

The payment page `/travel-clone-app/pay/{listingId}` must show StayPay, the calculated price summary, and these payment options: UPI, Cards, Netbanking, and UPI QR.

Selecting any payment option must show a processing state, submit a POST request to `/api/travel/book` with listing ID, fixed booking dates, guest count, total, and selected payment method, and then show the booking confirmation state.

### FR-5: Booking Confirmation

After successful payment selection, the page must show `Booking confirmed!`, a booking reference, the listing title, total paid in INR, and a `Back to Home` action. The API must return a confirmed booking ID when listing ID and payment method are supplied and return a clear 400 response when either is missing.

## Non-Functional Requirements

- The journey must work at desktop and mobile widths down to 320px.
- Primary actions must be keyboard reachable and have readable text or accessible names.
- Booking totals must be deterministic and displayed in Indian Rupees.
- The local mock app must expose the same route contracts as the deployed demo.

## Out of Scope

- User registration and login
- Real inventory or date availability
- Real payment processing
- Search filtering and autocomplete
- Host onboarding
- Cancellations and refunds

## Open Questions

1. Should the search presentation become interactive in a future version?
2. Should the demo support additional guest counts and date ranges?
3. Should payment failures be modeled as a separate deterministic test fixture?
