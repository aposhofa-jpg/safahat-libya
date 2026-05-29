"use client";

import { useState } from "react";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  "https://uwnhtfkkpxtaopyfyweh.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV3bmh0ZmtrcHh0YW9wZnlmd2VoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzk4NzI3MzksImV4cCI6MjA5NTQ0ODczOX0.iZPmO78wh1oWpPDlar68zpv9eb5iRplxtkU5faHwBm8"
);

export default function Home() {
  const [message, setMessage] = useState("");

  const packages = [
    ["Basic", "£20", "Simple business listing"],
    ["Standard", "£50", "Listing + contact details"],
    ["Premium", "£200", "Business card + featured listing"],
    ["Featured", "£500", "Top category position"],
    ["Sponsor", "£1000", "Homepage promotion"],
    ["VIP", "£10000", "Main sponsor package"],
  ];

  async function submitBusiness(event: any) {
    event.preventDefault();

    const form = event.target;

    const data = {
      business_name: form.business_name.value,
      category: form.category.value,
      city: form.city.value,
      phone: form.phone.value,
      email: form.email.value,
      website: form.website.value,
      description: form.description.value,
      package: form.package.value,
      status: "pending",
    };

    const { error } = await supabase.from("businesses").insert([data]);

    if (error) {
      setMessage("Error: " + error.message);
    } else {
      setMessage("Business submitted successfully. We will contact you soon.");
      form.reset();
    }
  }

  return (
    <main style={{ fontFamily: "Arial", background: "#f4f8fb", minHeight: "100vh" }}>
      <section style={{ background: "#0b4f8a", color: "white", padding: "50px 40px" }}>
        <h1 style={{ fontSize: "42px", margin: 0 }}>Safahat Libya</h1>
        <p style={{ fontSize: "20px" }}>صفحات ليبيا - Libyan Business Directory</p>

        <a href="#submit">
          <button style={{ padding: "15px 22px", borderRadius: "8px", border: "none", background: "#ffcc00", fontWeight: "bold" }}>
            Add your business
          </button>
        </a>
      </section>

      <section style={{ padding: "40px" }}>
        <h2>Business Packages</h2>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "20px" }}>
          {packages.map(([name, price, desc]) => (
            <div key={name} style={{ background: "white", padding: "25px", borderRadius: "12px", boxShadow: "0 4px 12px rgba(0,0,0,0.08)" }}>
              <h3>{name}</h3>
              <h2>{price}</h2>
              <p>{desc}</p>
              <a href="#submit">
                <button style={{ padding: "12px 18px", background: "#0b4f8a", color: "white", border: "none", borderRadius: "8px" }}>
                  Request Package
                </button>
              </a>
            </div>
          ))}
        </div>

        <h2 id="submit" style={{ marginTop: "50px" }}>Submit Your Business</h2>

        <form onSubmit={submitBusiness} style={{ background: "white", padding: "25px", borderRadius: "12px", display: "grid", gap: "15px", maxWidth: "700px" }}>
          <input name="business_name" placeholder="Business Name" required style={{ padding: "12px" }} />

          <select name="category" required style={{ padding: "12px" }}>
            <option value="">Select Category</option>
            <option>Medical Directory</option>
            <option>Commercial Directory</option>
            <option>Education Directory</option>
            <option>Tourism Directory</option>
            <option>Emergency Directory</option>
          </select>

          <input name="city" placeholder="City" style={{ padding: "12px" }} />
          <input name="phone" placeholder="Phone" style={{ padding: "12px" }} />
          <input name="email" placeholder="Email" type="email" style={{ padding: "12px" }} />
          <input name="website" placeholder="Website" style={{ padding: "12px" }} />

          <select name="package" required style={{ padding: "12px" }}>
            <option value="">Select Package</option>
            <option>Basic - £20</option>
            <option>Standard - £50</option>
            <option>Premium - £200</option>
            <option>Featured - £500</option>
            <option>Sponsor - £1000</option>
            <option>VIP - £10000</option>
          </select>

          <textarea name="description" placeholder="Business description" rows={5} style={{ padding: "12px" }} />

          <button type="submit" style={{ padding: "15px", background: "#0b4f8a", color: "white", border: "none", borderRadius: "8px", fontWeight: "bold" }}>
            Submit Business
          </button>

          {message && <p>{message}</p>}
        </form>
      </section>
    </main>
  );
}
