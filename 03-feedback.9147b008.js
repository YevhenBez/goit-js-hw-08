document.querySelector(".feedback-form").addEventListener("input",(function(e){var t=e.currentTarget.elements,a=t.email,r=t.message,l={email:a.value,message:r.value};localStorage.setItem("feedback-form-state",JSON.stringify(l)),console.log(l)}));
//# sourceMappingURL=03-feedback.9147b008.js.map
