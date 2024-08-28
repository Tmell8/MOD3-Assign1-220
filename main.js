function Contact (name, address, phone) {
    this.Name = name;
    this.Addressddress = address;
    this.Phone = phone;
  }

  let contacts = [];
  let Max_Contact = 10;

  let name = prompt('Enter the contacts name:');
  let address = prompt('Enter the conctacts address');
  let phone = prompt('Enter the contacts phone number:');
  let newContact = new Contact(name, address, phone);
  contacts.push(newContact);

  function sortContacts(){
    contacts.sort((a,b) => a-b);

  }

  function displayContacts() {
    console.log("Contacts:");
    contacts.forEach(contact => {
    console.log(`Name: ${contact.Name}, Address: ${contact.Address}, Phone: ${contact.Phone}`);
    });

    while (contacts.length < 10) {
      Contact();
  
      if (contacts.length < 10) {
          let more = prompt("Would you like to add another contact? (yes/no)").toLowerCase();
          if (more !== 'yes') break;
      }
  }

        if (contacts.length >= 10) {
        console.log("Maximum number of contacts reached.")};
        }
       sortContacts();
       displayContacts(); 

