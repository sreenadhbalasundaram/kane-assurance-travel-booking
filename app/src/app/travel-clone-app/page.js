import Link from 'next/link';
import { CATEGORIES, LISTINGS, formatINR } from '../../data/listings';
import { Footer, Header } from '../../components/TravelChrome';

const sections = [['Popular homes in Noida', ['ns1', 'ns2', 'ns3']], ['Available in Gurgaon District this weekend', ['gg1', 'gg2', 'gg3']], ['Stay in Dehradun', ['dd1', 'dd2', 'dd3']], ['Available next month in North Goa', ['go1', 'go2']], ['Homes in Rishikesh', ['rk1', 'rk2', 'rk3']]];
export default function TravelHome() {
  return <><Header /><main className="trv-container">{sections.map(([heading, ids]) => <section className="trv-row" key={heading}><div className="trv-row__head"><h2>{heading}</h2><span>›</span></div><div className="trv-grid">{ids.map((id) => { const listing = LISTINGS.find((item) => item.id === id); return <Link className="trv-card" href={`/travel-clone-app/rooms/${id}`} key={id}><div className="trv-card__img">{listing.fav && <span className="trv-badge">Guest favourite</span>}<span className="trv-heart">♡</span>{listing.emoji}</div><div className="trv-card__title">{listing.title}</div><div className="trv-card__price"><b>{formatINR(listing.price)}</b> for 2 nights · ★ {listing.rating}</div></Link>; })}</div></section>) }<div className="trv-cats">{CATEGORIES.map(([icon, name]) => <div className="trv-cat" key={name}><div className="ic">{icon}</div>{name}</div>)}</div></main><Footer /></>;
}
