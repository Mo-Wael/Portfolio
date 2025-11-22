export const slideVariants = {
  hidden: (direction: number) => ({
    x: direction > 0 ? 50 : -50,
    opacity: 0
  }),
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.4 }
  },
  exit: (direction: number) => ({
    x: direction > 0 ? -50 : 50,
    opacity: 0,
    transition: { duration: 0.4 }
  })
};

// export const slideVariants2 = {
//   hidden: { opacity: 0, x: 50 },
//   visible: { opacity: 1, x: 0, transition: { duration: 0.35, ease: "easeOut" }},
//   exit: { opacity: 0, x: -50, transition: { duration: 0.25 }},
// };