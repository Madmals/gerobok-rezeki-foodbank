import { Dexie } from 'dexie'

export class Database extends Dexie {
	constructor() {
		super('my_db')

		this.version(1).stores({
			listbarang: '++id,barang,timestamp,quantity'
		})

		this.listbarang = this.table('listbarang')

	}

	addBarang(barang,quantitys) {
		this.listbarang.add({
			text: barang, timestamp: new Date(),quantity:quantitys
		})
	}
	



}


export const db = new Database()