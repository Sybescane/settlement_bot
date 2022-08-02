const TelegramApi = require("node-telegram-bot-api");

const token = "5513816701:AAHqYfDetaywe0GMlFbh2mowf5F-Na6dJI4";

const bot = new TelegramApi(token, { polling: true });

// arr_m1 = [];
// arr_m2 = [];
// arr_m3 = [];
// arr_m4 = [];
arr_m = [,];
var chatId;
var text;
var data;

bot.on("message", async (msg) => {
  text = msg.text;
  chatId = msg.chat.id;

  switch (text) {
    case "/start":
      {
        await bot.sendMessage(
          chatId,
          'Вы попали в бот для заселения в студгородок "Металлург".'
        );
        await bot.sendMessage(
          chatId,
          "Хотите встать в очередь на заселение?",
          startKeyboard
        );
      }
      break;
  }
});

bot.on("callback_query", async (msg) => {
  data = msg.data;
  chatId = msg.message.chat.id;
  console.log(msg);
  switch (data) {
    case "Да": {
      return bot.sendMessage(
        chatId,
        "В какое общежитие хотите заселиться?",
        chooseDorm
      );
    }
    case "Нет": {
      return bot.sendMessage(chatId, "Что вы хотите сделать?", checkPlace);
    }
    case "1": {
      user = new Entrant(chatId, Number(data))

    }

  }
});

const startKeyboard = {
  reply_markup: JSON.stringify({
    inline_keyboard: [
      [
        { text: "Да", callback_data: "Да" },
        { text: "Нет", callback_data: "Нет" },
      ],
    ],
  }),
};

const chooseDorm = {
  reply_markup: JSON.stringify({
    inline_keyboard: [
      [
        { text: "М1", callback_data: "1" },
        { text: "М2", callback_data: "2" },
      ],
      [
        { text: "М3", callback_data: "3" },
        { text: "М4", callback_data: "4" },
      ],
    ],
  }),
};

const checkPlace = {
  reply_markup: JSON.stringify({
    inline_keyboard: [
      [{ text: "Узнать свою позицию", callback_data: "checkPlace" }],
      [{ text: "Выйти из очереди", callback_data: "go_out" }],
    ],
  }),
};

// class Entrant {
//   id;
//   dorm;
//   constructor(id, dorm) {
//     this.id = id;
//     this.dorm = dorm;
//   }
// }
