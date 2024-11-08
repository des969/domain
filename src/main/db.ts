class DB {
  private dbName: string = 'Domain';

  constructor() {
    const request = window.indexedDB.open(this.dbName, 4);

    request.onupgradeneeded = (event) => {
      //init all tables
      const db: IDBDatabase = event.target.result;
      if (db.objectStoreNames.length === 0) {
        //org
        const organisationsStore = db.createObjectStore('organisations', {
          autoIncrement: true,
          keyPath: 'id',
        });
        organisationsStore.createIndex('id', 'id', { unique: true });
        organisationsStore.createIndex('организация', 'организация', {
          unique: true,
        }); //string
        organisationsStore.createIndex('примечание', 'примечание', {
          unique: false,
        }); //string
        //pers

        const personsStore = db.createObjectStore('persons', {
          autoIncrement: true,
          keyPath: 'id',
        });
        personsStore.createIndex('id', 'id', { unique: true });
        personsStore.createIndex('персона', 'персона', { unique: false }); //string
        personsStore.createIndex('руководитель', 'руководитель', {
          unique: false,
        }); //boolean
        personsStore.createIndex('утверждающий', 'утверждающий', {
          unique: false,
        }); //boolean
        personsStore.createIndex('примечание', 'примечание', { unique: false }); //string
      }
    };
    request.onsuccess = (event) => {
      const db: IDBDatabase = event.target.result;
    };
  }
  getAll(store: any ,cb:any) {
    const request = window.indexedDB.open(this.dbName, 4);
    request.onsuccess = (event) => {
        const db: IDBDatabase = event.target.result;
        const transaction = db.transaction([store], 'readwrite');
        // create an object store on the transaction
        const objectStore = transaction.objectStore(store);
        // add our newItem object to the object store
        const objectStoreRequest = objectStore.getAll()
      
       objectStoreRequest.onsuccess = (event) => {
        cb(objectStoreRequest.result)
       }
      
      };
  }
  addItem(store: any, item: any) {
    const request = window.indexedDB.open(this.dbName, 4);
    request.onsuccess = (event) => {
      const db: IDBDatabase = event.target.result;
      const transaction = db.transaction([store], 'readwrite');
      // create an object store on the transaction
      const objectStore = transaction.objectStore(store);
      // add our newItem object to the object store
      const objectStoreRequest = objectStore.add(item);
      objectStoreRequest.onsuccess = (event) => {
        console.log('itemInserted', item);
      };
    };
  }
}

export default DB;
