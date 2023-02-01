const phoneBook = {
    "Max": 123456789, // ключ John со значением 123456789
    "Marie": 987654321,
    "Ann": 111111111
};

phoneBook["Ann"] = 456789123; // добавить запись
phoneBook["Merie"] = 222222222; // обновить запись
delete phoneBook["Max"];

console.log(phoneBook['Ann'], phoneBook['Max'], phoneBook.Marie);