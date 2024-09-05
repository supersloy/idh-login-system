export function scrollToTarget(id: string) {
  const element = document.getElementById(id)!;
  const headerOffset = 64 + 16; // 16 for additional space
  const elementPosition = element.getBoundingClientRect().top;
  const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

  window.scrollTo({
    top: offsetPosition,
    behavior: "smooth",
  });
}
