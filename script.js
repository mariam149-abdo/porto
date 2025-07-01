window.addEventListener("scroll", ()=>{
    const about = document.querySelector("#about .content p");
    const skillsleft = document.querySelector("#skills .all-skills .technical-Skills");
    const skillsRight = document.querySelector("#skills .all-skills .soft-skills");
    const skillsLi = document.querySelectorAll("#skills .all-skills .soft-skills li");
    const education = document.querySelectorAll("#education .education-item,#education .education-item .education-content,#experience .experience-item,#experience .experience-item p,#contact p,#contact form");
    const rectAbout = about.getBoundingClientRect();
    const rectLeft = skillsleft.getBoundingClientRect();
    const rectRight = skillsRight.getBoundingClientRect();
    const screenHeight = window.innerHeight;
    if(rectAbout.top < screenHeight - 100 ){
        about.classList.add("animationabout");
    }
    if(rectLeft.top < screenHeight - 100 ){
        skillsleft.classList.add("animationskills-left");
    }
    if(rectRight.top < screenHeight - 100 ){
        skillsRight.classList.add("animationskills-right");

    skillsLi.forEach(skillsLi => {
            skillsLi.classList.add("animationskills-li");
    });
    }
       education.forEach(education => {
        const recteducation = education.getBoundingClientRect();
        if(recteducation.top < screenHeight - 100 ){
            education.classList.add("animationeducation");
        }
});
});
 window.addEventListener("scroll", () => {
  const serviceCards = document.querySelectorAll("#services .cards .card");
  const screenHeight = window.innerHeight;

  serviceCards.forEach((card, index) => {
    const rect = card.getBoundingClientRect();
    if (rect.top < screenHeight - 100) {
      if (index < 3) {
        card.classList.add("animationservices-top");
      } else {
        card.classList.add("animationservices-bottom");
      }
    }
  });
  });


