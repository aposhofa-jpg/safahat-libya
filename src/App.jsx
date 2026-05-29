
export default function App() {
  return (
    <div style={{ padding: "30px", fontFamily: "Arial" }}>
      <h1>Safahat Libya</h1>
      <p>دليل الأعمال الليبية - Libyan Business Directory</p>

      <input
        placeholder="Search for business..."
        style={{
          padding: "12px",
          width: "100%",
          maxWidth: "500px",
          marginTop: "20px",
          fontSize: "16px"
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
    </div>
  );
}
