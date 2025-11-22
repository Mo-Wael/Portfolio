export const handleScrollTo = (sectionId: string) => {
  if (typeof window === 'undefined') return;
  
  const el = document.getElementById(sectionId);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
};