import Link from 'next/link';
import { findListing, formatINR } from '../../../../data/listings';
import { Footer, Header } from '../../../../components/TravelChrome';

export default async function RoomPage({ params }) {
  const listing = findListing(params.id);
  if (!listing) return <><Header showSearch={false} /><main className="trv-container trv-detail"><h1>Stay not found</h1><Link href="/travel-clone-app" className="trv-btn">Back to homes</Link></main></>;
  return <>
    <Header showSearch={false} />
    <main className="trv-container trv-detail">
      <h1>{listing.title}</h1>
      <div className="trv-gallery"><div>{listing.emoji}</div><div>🛏️</div><div>🚿</div><div>🌇</div><div>🍽️</div></div>
      <div className="trv-detail__grid">
        <div>
          <div className="trv-detail__sub"><h3>{listing.type} in {listing.city}, India</h3><p>{listing.beds} bed{listing.beds === 1 ? '' : 's'} · {listing.baths} bath{listing.baths === 1 ? '' : 's'} · ★ {listing.rating} ({listing.reviews} reviews)</p></div>
          {listing.host && <p>Hosted by {listing.host}</p>}
          <div className="trv-feature"><span>📶</span><div><b>Wifi</b><div>Fast wifi throughout the stay</div></div></div>
          <div className="trv-feature"><span>🧘</span><div><b>Shared common spaces</b><div>Yoga space and rooftop with river views</div></div></div>
          <p>A blissful stay with a view of the gurgling Ganges from the rooftop. A brisk walk from the iconic Lakshman Jhula, with vibrant common areas to soothe your mind and soul.</p>
        </div>
        <div>
          <div className="trv-booking">
            <div className="trv-booking__price">{formatINR(listing.price)} <span>for 2 nights</span></div>
            <div className="trv-booking__box">
              <div className="r"><div className="trv-booking__field"><small>Check-in</small><input readOnly value="8/21/2026" aria-label="Check-in" /></div><div className="trv-booking__field"><small>Checkout</small><input readOnly value="8/23/2026" aria-label="Checkout" /></div></div>
              <div className="trv-booking__field"><small>Guests</small><input readOnly value="1 guest" aria-label="Guests" /></div>
            </div>
            <Link className="trv-btn" href={`/travel-clone-app/book/${listing.id}`} style={{ display: 'block', textAlign: 'center' }}>Reserve</Link>
            <div className="trv-note">You won't be charged yet</div>
          </div>
        </div>
      </div>
    </main>
    <Footer />
  </>;
}