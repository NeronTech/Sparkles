const GAS_URL =
  "https://script.google.com/macros/s/AKfycbzLlbwEVAoACWPOaOTl6ZqAZAxXYAtE2mVtP3PSrYDp8ii0bBzyrq02QyDsaoSPa1RF/exec"; //ml2
// Make sure this is your latest public deployment URL

// Form submission
document.getElementById("bookingForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const data = {
    name: e.target.full_name.value.trim(),
    phone: e.target.phone_number.value.trim(),
    email: e.target.email.value.trim(),
    date: e.target.preferred_date.value.trim(),
    time: e.target.preferred_time.value.trim(),
    vehicle: e.target.vehicle_type.value.trim(),
    service: e.target.service_package.value.trim(),
    request: e.target.special_request.value.trim(),  
  };
  contactForm.querySelector("button").disabled = true;

  submitBooking(data);
});

async function submitBooking(data) {
  const name = data.name;
  const email = data.email;
  const message = data.message;

  if (!name || !email || !message) {
    showToast("Please fill all required fields.");
    return;
  }

  const res = await sendToGAS({
    action: "contact-us",
    name,
    email,
    message,
  });
  showLoader(true);
  showToast('Message sent. We will get back to you soon!');
  contactForm.reset();
  showLoader(false);
}

async function sendToGAS(payload) {
  try {
    const r = await fetch(GAS_URL, {
      redirect: "follow",
      method: "POST",
      headers: { "Content-Type": "text/plain;charset=utf-8" },
      body: JSON.stringify(payload),
    });
    if (!r.ok) throw new Error("Network response was not ok");
    return await r.json();
  } catch (err) {
    showMsg("❌ Request failed: " + err.message);
    return { message: err.message };
  }
}
