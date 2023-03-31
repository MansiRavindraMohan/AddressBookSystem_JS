
class Contact {
    constructor(firstName, lastName, address, city, state, zip, phone, email) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.address = address;
      this.city = city;
      this.state = state;
      this.zip = zip;
      this.phone = phone;
      this.email = email;
    }
  }
  
 
  class AddressBook {
    constructor() {
      this.contacts = [];
    }
  

    addContact(contact) {
      this.contacts.push(contact);
    }
  

    removeContact(contact) {
      const index = this.contacts.indexOf(contact);
      if (index !== -1) {
        this.contacts.splice(index, 1);
      }
    }
  
  
    printContacts() {
      for (let contact of this.contacts) {
        console.log(contact);
      }
    }
  }
  

  const myAddressBook = new AddressBook();
  
 
  const contact1 = new Contact(
    "John",
    "Doe",
    "123 Main St",
    "Anytown",
    "CA",
    "12345",
    "555-555-5555",
    "johndoe@example.com"
  );
  myAddressBook.addContact(contact1);
  

  const contact2 = new Contact(
    "Jane",
    "Doe",
    "456 Oak Ave",
    "Sometown",
    "CA",
    "67890",
    "555-555-1234",
    "janedoe@example.com"
  );
  myAddressBook.addContact(contact2);
  

  myAddressBook.printContacts();
  