const util = require("util");
const phrases = {
  Hello: "Привет",
  world: "мир",
};

// message name stack
// function PhraseError(message) {
//     this.message = message;
//     Error.captureStackTrace(this, PhraseError);
// }
// util.inherits(PhraseError, Error);
// PhraseError.prototype.name = "PhraseError";

class PhraseError extends Error {
  constructor(message) {
    super(message);
    this.name = "PhraseError";
  }
}

// function HttpError(status, message) {
//   this.status = status;
//   this.message = message;
//   Error.captureStackTrace(this, HttpError);
// }
// util.inherits(HttpError, Error);
// HttpError.prototype.name = "HttpError";

class HttpError extends Error {
  constructor(status, message) {
    super();
    this.name = "HttpError";
    this.status = status;
    this.message = message;
  }
}

function getPhrase(name) {
  if (!phrases[name]) {
    throw new PhraseError("Нет такой фразы: " + name); // HTTP 500, уведомление!
  }
  return phrases[name];
}

function makePage(url) {
  if (url != "index.html") {
    throw new HttpError(404, "Нет такой страницы"); // HTTP 404
  }
  return util.format("%s, %s!", getPhrase("*****"), getPhrase("world"));
}

try {
  const page = makePage("index.html");
  // const page = makePage("ind");
  console.log(page);
} catch (e) {
  if (e instanceof HttpError) {
    console.log(e.status, e.message);
  } else {
    console.error(
      "Ошибка %s\n сообщение: %s\n стек: %s",
      e.name,
      e.message,
      e.stack
    );
  }
}
