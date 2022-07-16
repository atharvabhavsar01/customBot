const getjoke = require("../utils/getjoke");
const curseCheck = require("../utils/curseCheck");
async function onMessageCreate(message) {
//   try {
    if (message.content === "joke") {
      console.log("running");
      const joke = await getjoke();
      console.log(joke);
      message.reply(joke);
    }

    const isCurse = curseCheck(message.content);
    if (isCurse) {
      console.log("Contains bad words behave properly!");
      message
        .reply("Sentence is deleted because it contains bad words")
        .then(() => {
          // message.delete()

          message.delete(); //
        });
    }
//   } catch (err) {
//     console.log(err);
//   }
}

module.exports = onMessageCreate;
