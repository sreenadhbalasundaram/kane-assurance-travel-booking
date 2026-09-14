export async function POST(request) {
  const body = await request.json();
  if (!body.listingId || !body.payment) return Response.json({ error: 'Listing and payment method are required' }, { status: 400 });
  return Response.json({ bookingId: `BKG-${String(body.listingId).toUpperCase()}-2026`, status: 'confirmed' });
}
