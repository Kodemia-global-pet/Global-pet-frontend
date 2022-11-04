export const getPetRecords = (pets) => {
  var records = [];
  pets.forEach((pet) => {
    pet.records.forEach((record) => {
      record.name = pet.name;
      if (new Date(record.date) >= new Date()) records.push(record);
    });
  });

  records.sort(function (a, b) {
    return new Date(b.date) - new Date(a.date);
  });

  return records.reverse();
};
