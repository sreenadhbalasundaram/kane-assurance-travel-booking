import Link from 'next/link';
import { findListing, formatINR, calculateBooking } from '../../../../data/listings';
import { Footer, Header } from '../../../../components/TravelChrome';
export default function BookingPage({ params }) {
  const listing = findListing(params.id);
  if (!listing) return <><Header showSearch={false} /><main className="trv-container trv-detail"><h1>Stay not found</h1></main></>;
  const { discount, tax, total } = calculateBooking(listing.price);
  return <><Header showSearch={false} /><main className="trv-container"><div className="trv-checkout"><div><Link className="trv-back" href={`/travel-clone-app/rooms/${listing.id}`}>← Confirm and pay</Link><h1>Proceed to payment</h1><p className="trv-panel">You'll be directed to StayPay to complete payment. By selecting the button, I agree to the booking terms and updated Terms of Service.</p><Link className="trv-btn trv-btn--dark" href={`/travel-clone-app/pay/${listing.id}`}>Continue to StayPay</Link></div><aside className="trv-panel"><div style={{ fontSize: 48, textAlign: 'center' }}>{listing.emoji}</div><h3>{listing.title}</h3><p>{listing.type} · ★ {listing.rating}</p><p><b>Free cancellation</b><br />Cancel before 16 August for a full refund.</p><h3>Price details</h3><div className="trv-price-row"><span>2 nights x {formatINR(Math.round(listing.price / 2))}</span><span>{formatINR(listing.price)}</span></div><div className="trv-price-row"><span>Special offer</span><span>- {formatINR(discount)}</span></div><div className="trv-price-row"><span>Taxes</span><span>{formatINR(tax)}</span></div><div className="trv-price-row total"><span>Total INR</span><span>{formatINR(total)}</span></div><p>🏷️ {formatINR(discount)} discount applied</p></aside></div></main><Footer /></>;
}
