 class HashTable{
    constructor(){
        this.table = new Array(127);
        this.size = 0;
    }
    /*
    to handle the collisions in the hashtable indexes, we have added another level of array hierarchy such that the 
    keys generating same indexes are added as [key,value] pairs to the existing array at index.
    Ex:
        [
            [  index : 22
                [
                    first [key,value] pair with index 22
                ],
                [
                    second [key,value] pair with index 22
                ]
            ],
            [ index : 25
                [
                    first [key,value] pair with index 25
                ],[
                    second [key,value] pair with index 25
                ]
            ]
        ]
    */

    _hash(key){
        let hash = 0;
        for(let i=0;i<key.length;i++){
            hash+=key.charCodeAt(i);
        }
        return hash % this.table.length;
    }

    set(key,value){
        //updated to handle collisions
        let index = this._hash(key);

        //if table contains this key hash:
        if(this.table[index]){
            //check all the keys, if the case is to update the same key with different value
            for(let i=0;i<this.table[index].length;i++){
                if(key === this.table[index][i][0]){
                    this.table[index][i][1]=value;
                    return;
                }
            }
            //an existing key was not found at the key hash, add the key-value pair to the colliding hash
            this.table[index].push([key,value]);

        }else{
            this.table[index] = [];
            this.table[index].push([key,value]);
        }
                
        this.size++;
    }

    get(key){
        let index = this._hash(key);
        if(this.table[index]){
            for(let i=0;i<this.table[index].length;i++){
                if(key === this.table[index][i][0]){
                    return this.table[index][i][1];
                }
            }
        }
        return undefined;
    }

    remove(key){
        let index = this._hash(key);

        if(this.table[index] && this.table[index].length){
            for(let i=0;i<this.table[index].length;i++){
                if(key === this.table[index][i][0]){
                    this.table[index].splice(i,1); 
                    this.size--;
                    return true;
                }
            }
            
        }
        else{
            return false;
        }
    }
}

export {HashTable};

