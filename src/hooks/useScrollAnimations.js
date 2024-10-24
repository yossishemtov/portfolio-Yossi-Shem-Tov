import { useEffect } from "react";

function useScrollAnimations() {
  useEffect(() => {
    const sections = document.querySelectorAll(".section");

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        } else {
          entry.target.classList.remove("show");
        }
      });
    }, { threshold: 0.1 }); // מופעל כאשר לפחות 10% מהחלק נמצא בתחום הצפייה

    sections.forEach(section => {
      observer.observe(section);
    });

    return () => {
      sections.forEach(section => {
        observer.unobserve(section);
      });
    };
  }, []);
}

export default useScrollAnimations;
