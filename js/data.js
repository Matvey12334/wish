const user = {
  name: "Матвій",
  surname: "Гриенко",
  userPhoto: "cat.jpg",
  qrQode: "",
  dreams: [
    { src: "car.jpg", alt: "Авто моєї мрії" },
    { src: "house.jpg", alt: "Домівка моєї мрії " },
    { src: "mars.jpg", alt: "Подорож до Марсу" },
  ],
};

// arr це середня місячна платня по рокам
const arr = [
  500,
  700,
  800,
  1000,
  1200,
  1500,
  1800,
  2100,
  2400,
  2700,
  3000,
  3300,
];

const necessaryExpenses = 800;

const todo = [
  { month: "Червень", skill: "Котяча поліція" },
  { month: "Липень", skill: "Затриманя злочіців" },
  { month: "Серпень", skill: "Програмування" },
  { month: "Вересень", skill: "Java" },
  { month: "Жовтень", skill: "Java script" },
  { month: "Листопад", skill: "Style" },
  { month: "Грудень", skill: "Котяча поліція" },
  { month: "Січень", skill: "Найкращій поліцейський" },
  { month: "Лютий", skill: "Медаль" },
  { month: "Березень", skill: "Останій день" },
  { month: "Квітень", skill: "Пенсія" },
  { month: "Травень", skill: "80 років" },
];

export { user, arr, necessaryExpenses, todo };
