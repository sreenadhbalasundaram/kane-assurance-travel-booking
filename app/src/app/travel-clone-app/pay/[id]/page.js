'use client';
import Link from 'next/link';
import { useState } from 'react';
import { findListing, formatINR, calculateBooking } from '../../../../data/listings';
import { Header } from '../../../../components/TravelChrome';
export default function PaymentPage({ params }) {
  const listing = findListing(params.id); const [booking, setBooking] = useState(null); const [processing, setProcessing] = useState(false);
  if (!listing) return <><Header showSearch={false} /><main className="trv-container trv-detail"><h1>Stay not found</h1></main></>;
  const { total } = calculateBooking(listing.price);
  async function pay(payment) { setProcessing(true); try { const response = await fetch('/api/travel/book', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ listingId: listing.id, checkin: '2026-08-21', checkout: '2026-08-23', guests: 1, total, payment }) }); const data = await response.json(); if (!response.ok) throw new Error(data.error); setBooking(data); } catch { setBooking({ bookingId: 'BKG-DEMO', status: 'confirmed' }); } finally { setProcessing(false); } }
  if (booking) return <><Header showSearch={false} /><main className="trv-container"><div className="trv-success"><div className="ic">✓</div><h1>Booking confirmed!</h1><p>Reference <b>{booking.bookingId}</b> — {listing.title}. Total paid {formatINR(total)}.</p><Link href="/travel-clone-app" className="trv-btn">Back to Home</Link></div></main></>;
  return <><Header showSearch={false} /><main className="trv-container"><div className="trv-rzp"><div className="trv-rzp__left"><b style={{ fontSize: 20 }}>⌂ StayPay</b><div className="trv-rzp__summary">Price Summary<b>{formatINR(total)}</b></div><p>Secured by StayPay</p></div><div className="trv-rzp__right"><div style={{ padding: '18px 24px', fontWeight: 700, borderBottom: '1px solid #f0f0f0' }}>Payment Options</div>{['UPI', 'Cards', 'Netbanking', 'UPI QR'].map((method) => <button className="trv-rzp__opt" key={method} onClick={() => !processing && pay(method)} disabled={processing}><span>{method}</span><span>›</span></button>)}<div style={{ padding: 20, textAlign: 'center', color: 'var(--muted)', fontSize: 13 }}>{processing ? 'Processing payment…' : `Select a payment method to pay ${formatINR(total)}`}</div></div></div></main></>;
}
