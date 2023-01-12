export const script = [
  {
    id: "BOT/intro",
    message: "Hello Please select your order!",
    trigger: "CHOICES/intro",
  },
  {
    id: "CHOICES/intro",
    options: [
      { label: "Burger!", trigger: "BOT/burger" },
      { label: "Pizza!", trigger: "BOT/pizza" },
    ],
  },
  {
    id: "BOT/pizza",
    message: "Which Type of pizza you want !!!",
    trigger: "BOT/pizzaoptions",
  },
  {
    id: "BOT/burger",
    message: "Which Type of burger you want !!!",
    trigger: "BOT/burgeroptions",
  },
  {
    id: "BOT/burgeroptions",
    options: [
      { label: "Chicken", trigger: "BOT/chicken" },
      { label: "Veg", trigger: "BOT/veg" },
      { label: "Beef", trigger: "BOT/beef" },
    ],
  },
  {
    id: "BOT/pizzaoptions",
    options: [
      { label: "Chicken", trigger: "BOT/pizzachicken" },
      { label: "Veg", trigger: "BOT/pizzaveg" },
      { label: "Beef", trigger: "BOT/pizzabeef" },
    ],
  },
  {
    id: "BOT/chicken",
    message: "Thakyou for your order , Chicken burger",
    trigger: "BOT/ask-question",
  },
  {
    id: "BOT/veg",
    message: "Thakyou for your order , Veg Burger",
    trigger: "BOT/ask-question",
  },
  {
    id: "BOT/beef",
    message: "Thakyou for your order,Beef Burger",
    trigger: "BOT/ask-question",
  },

  {
    id: "BOT/pizzachicken",
    message: "Thakyou for your order , Chicken Pizza",
    trigger: "BOT/ask-question",
  },
  {
    id: "BOT/pizzaveg",
    message: "Thakyou for your order , Veg Pizza",
    trigger: "BOT/ask-question",
  },
  {
    id: "BOT/pizzabeef",
    message: "Thakyou for your order,Beef Pizza",
    trigger: "BOT/ask-question",
  },
  {
    id: "BOT/ask-question",
    message: "Do you want more??",
    trigger: "CHOICES/ask-question",
  },
  {
    id: "CHOICES/ask-question",
    options: [
      { label: "Yes", trigger: "CHOICES/intro" },
      { label: "No", trigger: "BOT/calming" },
    ],
  },
  {
    id: "BOT/calming",
    message: "Thank you !!!!",
    //trigger: "BOT/introduce-self"
  },
 
];
