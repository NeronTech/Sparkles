const GAS_URL =
  "https://script.google.com/macros/s/AKfycbzvJWyLcvivOrZZhcQSxh1R_QvGFmGC9P2ZNGNnjZ--xdnovP4ZmsaMtItAfmMYQ_TaJQ/exec"; //save booking
// Make sure this is your latest public deployment URL

// Call server functions when DOM is loaded
document.addEventListener("DOMContentLoaded", loadDropdowns);

const toastFail = document.getElementById("toast-fail");
const submitBtn = document.getElementById("submit-btn");
const spinner = document.getElementById("submit-spinner");
const submitText = document.getElementById("submit-text");
const toastSuccess = document.getElementById("toast-success");

function showToast(toastEl) {
  toastEl.classList.remove("hidden");
  toastEl.classList.add("animate-fade-in-up");
  setTimeout(() => {
    toastEl.classList.add("hidden");
    toastEl.classList.remove("animate-fade-in-up");
  }, 3000);
}

async function loadDropdowns() {
  try {
    const res = await fetch(GAS_URL);
    const data = await res.json();
    populateVehicleTypes(data.vehicles); // Pass array, not string
    populateServicePackages(data.services); // Pass array, not string
  } catch (err) {
    return { message: err.message };
  }
}

// Populate Vehicle Type dropdown
function populateVehicleTypes(types) {
  const vehicleSelect = document.getElementById("vehicle_type");
  vehicleSelect.innerHTML = '<option value="">Select vehicle type</option>';
  types.forEach((type) => {
    const opt = document.createElement("option");
    opt.value = type;
    opt.textContent = type;
    vehicleSelect.appendChild(opt);
  });
}

// Populate Service Package dropdown
function populateServicePackages(services) {
  // console.log(services);
  const serviceSelect = document.getElementById("service_package");
  serviceSelect.innerHTML = '<option value="">Select service package</option>';
  services.forEach((svc) => {
    const opt = document.createElement("option");
    opt.value = svc;
    opt.textContent = svc;
    serviceSelect.appendChild(opt);
  });
}

// Form submission
document.getElementById("bookingForm").addEventListener("submit", (e) => {
  e.preventDefault();

  submitBtn.disabled = true;
  spinner.classList.remove("hidden");
  const data = {
    name: e.target.full_name.value.trim(),
    phone: e.target.phone_number.value.trim(),
    email: e.target.email.value.trim(),
    date: e.target.preferred_date.value.trim(),
    time: e.target.preferred_time.value.trim(),
    vehicle: e.target.vehicle_type.value.trim(),
    service: e.target.service_package.value.trim(),
    request: e.target.special_requests.value.trim(),
  };
  bookingForm.querySelector("button").disabled = true;

  submitBooking(data);
});

async function submitBooking(data) {
  const name = data.name;
  const phone = data.phone;
  const email = data.email;
  const date = data.date;
  const time = data.time;
  const vehicle = data.vehicle;
  const service = data.service;
  const request = data.request;

  if (!name || !phone || !email || !date || !time || !vehicle || !service) {
    showToast("Please fill all required fields.");
    return;
  }

  const res = await sendToGAS({
    action: "booking",
    name,
    phone,
    email,
    date,
    time,
    vehicle,
    service,
    request,
  });
  bookingForm.reset();
  submitText.innerText = "Booked ✓";
  spinner.classList.add("hidden");
  setTimeout(() => (submitText.innerText = "Book Now"), 3000);
  showToast(toastSuccess);
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
    showToast(toastFail);
    return { message: err.message };
  }
}
