const event = {
  name: "Party",
  guestList: ["Ruba", "Youmna", "Ghazal"],
  printGuestList() {
    this.guestList.forEach((guest) => {
      console.log(guest + " Is coming to the " + this.name);
    });
  },
};

event.printGuestList();
