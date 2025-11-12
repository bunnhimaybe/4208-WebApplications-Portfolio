/* ==============================
    Scaffold & Boot
   ============================== */

// load the app document via adapter and cache it
export async function boot() {
    throw new Error("boot() not implemented yet");
}


/* ==============================
    CREATE
   ============================== */

// insert a new record into collecction 'col'
export async function insertOne(col, data) {
    throw new Error("insertOne() not implemented yet");
}


/* ==============================
    READ
   ============================== */

// get a safe copy of the cached doc
export function getDoc() {
    throw new Error("getDoc() not implemented yet");
}

// read many 
export function findMany(col, pred = () => true) {
    throw new Error("findMany() not implemented yet");
}

// read one
export function findOne(col, pred) {
    throw new Error ("findOne() not implemented yet");
}


/* ==============================
    UPDATE
   ============================== */

// apply shallow patch; arrays are replaced
export async function updateOne(col, id, patch) {
    throw new Error("updateOne() not implemented yet");
}


/* ==============================
    DELETE
   ============================== */

export async function deleteOne(col, id) {
    throw new Error("deleteOne() not implemented yet");
}