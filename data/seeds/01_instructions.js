exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("instructions")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("instructions").insert([
        {
          instructions:
            "Cut roast in half; place in a 3- or 4-qt. slow cooker. Mix chilies, taco seasoning and cumin; spoon over pork. Cook, covered, on low until meat is tender, 8-10 hours.",
          ins_rec_id: 1
        },
        {
          instructions:
            "Remove pork; cool slightly. Skim fat from cooking juices. Shred meat with two forks. Return to slow cooker; heat through. Serve in tortillas with lettuce and cheese. ",
          ins_rec_id: 2
        },

        {
          instructions:
            "Freeze option: Place cooled pork mixture in freezer containers; freeze up to 3 months. To use, partially thaw in refrigerator overnight. Heat through in a covered saucepan, stirring gently and adding a little broth if necessary.",
          ins_rec_id: 3
        }
      ]);
    });
};
