!function(){var e=document.querySelector(".feedback-form"),t=document.querySelector("input"),a=document.querySelector("textarea");e.addEventListener("input",(function(e){var t=e.currentTarget.elements,a=t.email,r=t.message,o={email:a.value,message:r.value};localStorage.setItem("feedback-form-state",JSON.stringify(o))}));var r=localStorage.getItem("feedback-form-state"),o=JSON.parse(r);r&&(t.value=o.email,a.value=o.message),e.addEventListener("submit",(function(e){var t=localStorage.getItem("feedback-form-state"),a=JSON.parse(t);console.log(a),e.preventDefault(),e.currentTarget.reset(),localStorage.removeItem("feedback-form-state")}))}();
//# sourceMappingURL=03-feedback.d5adbe9e.js.map
