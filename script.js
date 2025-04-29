document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    if (form) {
      form.addEventListener("submit", function (e) {
        e.preventDefault();
        let valid = true;
        const inputs = form.querySelectorAll("input, textarea");
        inputs.forEach(input => {
          input.classList.remove("is-invalid");
          if (input.type === "email") {
            const emailRegex = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
            if (!emailRegex.test(input.value)) {
              valid = false;
              input.classList.add("is-invalid");
            }
          } else if (input.value.trim().length < 10) {
            valid = false;
            input.classList.add("is-invalid");
          }
        });
        if (valid) {
          alert("Sikeres beküldés!");
          form.reset();
        }
      });
    }
    const rows = document.querySelectorAll(".table-row");
    const modalImage = document.getElementById("modalImage");
    const imageModal = new bootstrap.Modal(document.getElementById("imageModal"));
    rows.forEach(row => {
      row.addEventListener("click", () => {
        const imgSrc = row.getAttribute("data-img");
        modalImage.src = imgSrc;
        imageModal.show();
      });
    });
   });