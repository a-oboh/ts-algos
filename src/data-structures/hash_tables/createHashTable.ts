class HashTable {
    constructor(size: number){
      this.data = new Array(size);
    }

    data: any[];
  
   private hash(key) {
      let hash = 0;
      for (let i =0; i < key.length; i++){
          hash = (hash + key.charCodeAt(i) * i) % this.data.length
      }
      return hash;
    }

    set(key, value) {

    }
  }
  
  const myHashTable = new HashTable(50);
//   myHashTable.set('grapes', 10000)
//   myHashTable.get('grapes')
//   myHashTable.set('apples', 9)
//   myHashTable.get('apples')
  