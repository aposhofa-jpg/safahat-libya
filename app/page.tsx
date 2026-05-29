export default function Home() {
  return (
    <main style={{ padding: "40px", fontFamily: "Arial" }}>
      <h1>Safahat Libya</h1>
      <p>صفحات ليبيا - Libyan Business Directory</p>

      <input
        placeholder="Search for business..."
        style={{
          padding: "12px",
          width: "100%",
          maxWidth: "500px",
          marginTop: "20px",
          fontSize: "16px",
        }}
      />

      <h2 style={{ marginTop: "30px" }}>Categories</h2>

      <div style={{ display: "grid", gap: "15px", marginTop: "15px" }}>
        <button>Medical Directory</button>
        <button>Commercial Directory</button>
        <button>Education Directory</button>
        <button>Tourism Directory</button>
        <button>Emergency Directory</button>
      </div>
    </main>
  );
}
