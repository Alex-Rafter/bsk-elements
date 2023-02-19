export const bskClearFilters = {
  text : "Clear Filters",
  resetAll() {
    const arrOfSelects = Array.from(document.querySelectorAll("select"));
    arrOfSelects.forEach((select) => (select.selectedIndex = 0));
  },
  mounted() {
    console.log('i am mounted bsk clear filters')
  },
};
