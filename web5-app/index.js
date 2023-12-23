import { Web5 } from '@web5/api';

const { web5, did: danielDid } = await Web5.connect();

// console.log(danielDid);

const { record } = await web5.dwn.records.create({
	data: 'Hello Web5!',
	message: {
		dataFormat: 'text/plain',
	},
});

console.log('writeResult', record);

const readResult = await record.data.text();

console.log('readResult', readResult);


const updateResult = await record.update({
	data: "I'm updated!",
});

console.log('updateResult', updateResult);
console.log('readUpdatedResult', await record.data.text());

const deleteResult = await web5.dwn.records.delete({
	message: {
		recordId: record._recordId,
	},
});

console.log('deleteResult', deleteResult);
//console.log('deletedResult', await record);
