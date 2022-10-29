import { HashTable } from './HashTable.js ';

function testHashTable(){
    const hashTable = new HashTable();

    hashTable.set("name","varsha");
    hashTable.set("fff","this has ascii sum 306");
    hashTable.set("dei","this has ascii sum 306");
    hashTable.set("dhf","this has ascii sum 306");

    console.log("after additions ",hashTable.size);

    hashTable.remove("name");
    console.log("name after removing it ",hashTable.get("name"));

    console.log("size after removal ", hashTable.size);

    console.log("complete hashtable structure ",hashTable);

}

testHashTable();