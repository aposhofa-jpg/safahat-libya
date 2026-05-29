export default function Home() {
  const categories = [
    "Medical Directory",
    "Commercial Directory",
    "Education Directory",
    "Tourism Directory",
    "Emergency Directory",
  ];

  const packages = [
    ["Basic", "£20", "Simple business listing"],
    ["Standard", "£50", "Listing + contact details"],
    ["Premium", "£200", "Business card + featured listing"],
    ["Featured", "£500", "Top category position"],
    ["Sponsor", "£1000", "Homepage promotion"],
    ["VIP", "£10000", "Main sponsor package"],
  ];

  return (
    <main style={{ fontFamily: "Arial", background: "#f4f8fb", minHeight: "100vh" }}>
      <section style={{ background: "#0b4f8a", color: "white", padding: "50px 40px" }}>
        <h1 style={{ fontSize: "42px", margin: 0 }}>Safahat Libya</h1>
        <p style={{ fontSize: "20px" }}>صفحات ليبيا - Libyan Business Directory</p>

        <input
          placeholder="Search for business..."
          style={{
            padding: "15px",
            width: "100%",
            maxWidth: "600px",
            fontSize: "16px",
            borderRadius: "8px",
            border: "none",
            marginRight: "10px",
          }}
        />

        <a href="#packages">
          <button
            style={{
              padding: "15px 20px",
              borderRadius: "8px",
              border: "none",
              background: "#ffcc00",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            Add your business
          </button>
        </a>
      </section>

      <section style={{ padding: "40px" }}>
        <h2>Categories</h2>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "20px" }}>
          {categories.map((cat) => (
            <div key={cat} style={{ background: "white", padding: "25px", borderRadius: "12px", boxShadow: "0 4px 12px rgba(0,0,0,0.08)", fontWeight: "bold" }}>
              {cat}
            </div>
          ))}
        </div>

        <h2 style={{ marginTop: "40px" }}>Featured Businesses</h2>

        <div style={{ display: "grid", gap: "20px" }}>
          <div style={{ background: "white", padding: "20px", borderRadius: "12px" }}>
            <h3>Tripoli Medical Center</h3>
            <p>Hospital / Clinic - Tripoli</p>
          </div>

          <div style={{ background: "white", padding: "20px", borderRadius: "12px" }}>
            <h3>Libya Business Services</h3>
            <p>Commercial Services - Benghazi</p>
          </div>
        </div>

        <h2 id="packages" style={{ marginTop: "40px" }}>Business Packages</h2>
        <p>Choose a package to request your business card or listing.</p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "20px" }}>
          {packages.map(([name, price, desc]) => (
            <div key={name} style={{ background: "white", padding: "25px", borderRadius: "12px", boxShadow: "0 4px 12px rgba(0,0,0,0.08)" }}>
              <h3>{name}</h3>
              <h2>{price}</h2>
              <p>{desc}</p>
              <button style={{ padding: "12px 18px", background: "#0b4f8a", color: "white", border: "none", borderRadius: "8px", cursor: "pointer" }}>
                Request Package
              </button>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
