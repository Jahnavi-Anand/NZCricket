document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("#session-form");
    const clearBtn = document.querySelector(".clear-btn");
  
    clearBtn.addEventListener("click", () => {
      if (confirm("Are you sure you want to clear the form?")) {
        form.reset();
      }
    });
  
    form.addEventListener("submit", (e) => {
      e.preventDefault();
  
      const formData = {
        activatorName: form.activatorName.value.trim(),
        association: form.association.value,
        school: form.school.value.trim(),
        zipcode: form.zipcode.value.trim(),
        date: form.date.value,
        time: form.time.value,
        period: form.period.value,
        yearGroups: [...form.querySelectorAll("input[name='yearGroups']:checked")].map(cb => cb.value),
        maleStudents: form.maleStudents.value,
        femaleStudents: form.femaleStudents.value,
        sessionLength: form.sessionLength.value,
        sessionType: form.sessionType.value,
        teacherEngagement: form.teacherEngagement.value,
        enjoymentLevel: form.enjoymentLevel.value,
        notes: form.notes.value.trim()
      };
  
      // Basic required field check
      for (const [key, value] of Object.entries(formData)) {
        if (
          (typeof value === "string" && value === "") ||
          (Array.isArray(value) && value.length === 0)
        ) {
          alert(`Please fill out the "${key}" field.`);
          return;
        }
      }
  
      // Example: Send data to backend (uncomment for actual use)
      /*
      fetch('/submit-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })
      .then(res => res.json())
      .then(data => {
        alert('Session data submitted successfully!');
        form.reset();
      })
      .catch(err => {
        alert('Error submitting form.');
        console.error(err);
      });
      */
  
      // For now, just log it
      console.log("Session Data:", formData);
      alert("Form submitted! (Check console for data)");
    });
  });
  