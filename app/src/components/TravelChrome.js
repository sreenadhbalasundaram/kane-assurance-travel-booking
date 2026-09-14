import Link from 'next/link';

export function Header({ showSearch = true }) {
  return <header className="trv-header"><div className="trv-container">
    <div className="trv-header__row">
      <Link href="/travel-clone-app" className="trv-logo">⌂ StayNest</Link>
      <nav className="trv-tabs" aria-label="Site navigation"><Link className="is-active" href="/travel-clone-app">Homes</Link><Link href="/travel-clone-app">Experiences</Link><Link href="/travel-clone-app">Services</Link></nav>
      <div className="trv-header__right"><span>Become a host</span><span>🌐</span><span className="trv-avatar">☰ 👤</span></div>
    </div>
    {showSearch && <div className="trv-search"><div className="trv-search__seg"><small>Where</small><span>Search destinations</span></div><div className="trv-search__seg"><small>When</small><span>Add dates</span></div><div className="trv-search__seg"><small>Who</small><span>Add guests</span></div><button className="trv-search__btn" aria-label="Search">🔍</button></div>}
  </div></header>;
}

export function Footer() {
  return <footer className="trv-footer"><div className="trv-container"><div className="trv-footer__cols"><div><h5>Support</h5><a href="#">Help Centre</a><a href="#">Get help with a safety issue</a><a href="#">AirCover</a><a href="#">Cancellation options</a></div><div><h5>Hosting</h5><a href="#">StayNest your home</a><a href="#">AirCover for Hosts</a><a href="#">Hosting resources</a><a href="#">Community forum</a></div><div><h5>StayNest</h5><a href="#">Newsroom</a><a href="#">New features</a><a href="#">Careers</a><a href="#">Investors</a></div><div><h5>Explore</h5><a href="#">Rishikesh</a><a href="#">Goa</a><a href="#">Dehradun</a><a href="#">Noida</a></div></div><p>© 2026 StayNest, Inc. · Privacy · Terms · Company details</p></div></footer>;
}
