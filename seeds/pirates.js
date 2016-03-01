exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('pirates').del(),

    // Inserts seed entries
    knex('pirates').insert({name: 'Anne Bonney', poison:'Rum', accessory: 'hot temper', image_url: 'http://2.bp.blogspot.com/-WSKMEi_MH5U/U-AdUnMNuvI/AAAAAAAABI8/fv0BXLICx8c/s1600/Anne_Bonny_color.jpg'}),
    knex('pirates').insert({name: 'Jack Sparrow', poison:'Tequila', accessory: 'black eyeliner', image_url: 'http://images4.fanpop.com/image/photos/22200000/POTC-4-Jack-Sparrow-stills-pirates-of-the-caribbean-22281675-1500-998.jpg'}),
    knex('pirates').insert({name: 'Teisia Park', poison:'Prosecco', accessory: 'brows on fleek', image_url: 'https://www.facebook.com/photo.php?fbid=10101581537942342&l=4d8f632c21'})
  );
};
