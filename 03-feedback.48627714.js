document.querySelector(".feedback-form").addEventListener("input",(function(e){const{elements:{email:t,message:a}}=e.currentTarget,n={email:t.value,message:a.value};localStorage.setItem("feedback-form-state",JSON.stringify(n)),console.log(n)}));
//# sourceMappingURL=03-feedback.48627714.js.map
